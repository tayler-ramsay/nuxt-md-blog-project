const morgan = require('morgan');
const logger = require('../util/logger').forName('http');

module.exports = morgan(
  ':method :url :status :response-time ms - :res[content-length]',
  {
    stream: {
      write: message => logger.info(message.substring(0, message.lastIndexOf('\n')))
    }
  }
);
