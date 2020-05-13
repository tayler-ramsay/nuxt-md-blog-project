require('dotenv').config()
const nodemailer = require('nodemailer');
const path = require('path');
const nunjucks = require('nunjucks');
const juice = require('juice');
const Inliner = require('inliner');
const logger = require('../util/logger').forFile(__filename)

const EMAIL_SEND = process.env.EMAIL_SEND === 'true'
const EMAIL_FROM = process.env.EMAIL_FROM
const EMAIL_REPLY_TO = EMAIL_FROM
const EMAIL_TEMPLATE_DIR = path.resolve(__dirname, '../templates/email');
const ALLOWED_RECIPIENTS = (process.env.EMAIL_ALLOWED_RECIPIENTS || '').split(',').filter((r) => r.length)
const OVERRIDE_RECIPIENTS = (process.env.EMAIL_OVERRIDE_RECIPIENTS || '').split(',').filter((r) => r.length)

exports.sendMail = async function (template, variables, recipients) {
  let transport = createTransport();

  variables = addDefaultVariables(variables);

  let subject = await renderTemplate(template + '.subject.txt', variables);
  let htmlBody = await renderTemplate(template + '.body.njk', variables);

  let filteredRecipients = filterEmailRecipient(recipients)
  let emailTo = Array.isArray(filteredRecipients) ? filteredRecipients.join(',') : filteredRecipients;

  let message = {
    from: EMAIL_FROM,
    to: filterEmailRecipient(emailTo),
    replyTo: EMAIL_REPLY_TO,
    subject: subject,
    text: '',
    html: htmlBody
  };

  if (!EMAIL_SEND) {
    logger.warn('Email cannot be sent because email is not configured to send')
    return
  }

  let result = await transport.sendMail(message);

  logger.info(`Email sent to ${emailTo}: ${result.messageId}`);

  let testMessageUrl = nodemailer.getTestMessageUrl(result)

  if (testMessageUrl) {
    logger.debug(`Email preview URL: ${testMessageUrl} `);
  }
};

function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_TLS === 'true',
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    }
  })
}

function filterEmailRecipient (to) {
  if (OVERRIDE_RECIPIENTS && OVERRIDE_RECIPIENTS.length) {
    return OVERRIDE_RECIPIENTS
  }

  let allowed = ALLOWED_RECIPIENTS
  if (allowed != null && !Array.isArray(allowed)) {
    allowed = [ALLOWED_RECIPIENTS]
  }

  let recipients = to
  if (to != null && !Array.isArray(to)) {
    recipients = [to]
  }

  return recipients.filter(recipient => {
    for (let allowedAddress of allowed) {
      if (recipient.includes(allowedAddress)) {
        return true
      }
    }

    return false
  })
}

function addDefaultVariables(variables) {
  return Object.assign({}, {
    now: new Date()
  }, variables);
}

async function renderTemplate(template, variables) {
  let content = await renderFile(template, variables);

  if (!template.endsWith('.njk')) {
    return content;
  }

  let imported = await importStyles(content);
  let inlined = await inlineStyles(imported);

  return inlined;
}

async function renderFile(template, variables) {
  return new Promise((resolve, reject) => {
    let templatePath = path.join(EMAIL_TEMPLATE_DIR, template);

    nunjucks.render(templatePath, variables, (err, output) => {
      if (err) {
        reject(err);
      } else {
        resolve(output);
      }
    });
  });
}

async function importStyles(content) {
  return new Promise((resolve, reject) => {
    new Inliner(content, { images: false }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  });
}

async function inlineStyles(content) {
  return juice(content);
}
