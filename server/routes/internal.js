const version = require('../lib/util/version')

module.exports.health = function(req, res) {
  res.status(200).send('OK')
}

module.exports.version = function(req, res) {
  res.json(version.getInfo())
}
