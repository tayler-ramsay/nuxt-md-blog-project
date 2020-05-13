const path = require('path')
const winston = require('winston')
const { format, transports } = winston
const { colorize, combine, timestamp, label, printf, metadata } = format;

const customFormat = printf(({ level, message, label, timestamp, ...meta }) => {
  return `${timestamp} - ${level.toUpperCase()} --- [${label}] | ${message} | ${JSON.stringify(meta)}`;
});

module.exports = getOrCreateLogger('root')
module.exports.forName = getOrCreateLogger
module.exports.forFile = function (fileName) {
  return getOrCreateLogger(path.basename(fileName))
}

function getOrCreateLogger (name) {
  if (winston.loggers.has(name)) {
    return winston.loggers.get(name)
  }

  addLogger(name)

  return winston.loggers.get(name)
}

function addLogger (name) {
  winston.loggers.add(name, {
    level: process.env.LOG_LEVEL || 'info',
    format: combine(
      colorize(),
      label({ label: name }),
      timestamp(),
      customFormat,
      metadata()
    ),
    transports: [
      new transports.Console()
    ]
  })
}
