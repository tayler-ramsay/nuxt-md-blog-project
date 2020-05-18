require('dotenv').config()
const logger = require('./util/logger').forFile(__filename)
const express = require('express')
const bodyParser = require('body-parser')
const requestLogger = require('./middleware/request-logger')
const emailRoutes = require('./routes/email')
const app = express()

const port = process.env.SERVER_PORT || 8080

async function start () {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(requestLogger)

  // Express GET endpoint
  app.post('/api/contact', emailRoutes.contactSubmit)

  // Listen the server
  app.listen(port, () => {
    logger.info(`server listening on port ${port}`)
  })
}

start()
