const emailClient = require('../adapter/smtp-email-client')
const logger = require('../util/logger').forFile(__filename)
const emailTo = (process.env.EMAIL_CONTACT_RECIPIENT || '').split(',').filter((r) => !!r)

module.exports.contactSubmit = async function (req, res) {
  const variables = {
    name: req.body.name,
    email: req.body.email,
    company: req.body.company,
    phone: req.body.phone,
    message: req.body.message
  }

  logger.info(`New contact form submission: ${JSON.stringify(variables)}`)

  try {
    await emailClient.sendMail('contact.new', variables, emailTo)
    res.status(200).send()
  } catch (e) {
    res.status(500).send()
  }
}
