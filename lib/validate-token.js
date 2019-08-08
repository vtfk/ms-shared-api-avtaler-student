const jwt = require('jsonwebtoken')
const getKeys = require('./get-keys')
const logger = require('./logger')

module.exports = async token => {
  const decodedToken = jwt.decode(token, { complete: true })
  const keys = await getKeys()
  const { x5c } = keys.find(key => decodedToken.header.x5t === key.x5t)
  const pubCert = `-----BEGIN CERTIFICATE-----\n${x5c}\n-----END CERTIFICATE-----`
  let verifiedToken
  logger('info', ['validate-token', 'start'])
  try {
    verifiedToken = jwt.verify(token, pubCert)
    logger('info', ['validate-token', 'success'])
  } catch (error) {
    logger('error', ['validate-token', error])
    throw error
  }
  return verifiedToken
}
