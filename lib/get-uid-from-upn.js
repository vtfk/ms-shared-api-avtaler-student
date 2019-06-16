const axios = require('axios')
const generateToken = require('./generate-system-token')
const logger = require('./logger')

module.exports = async upn => {
  axios.defaults.headers.common['Authorization'] = generateToken(process.env.IDENTITY_SERVICE_SECRET)
  const url = `${process.env.IDENTITY_SERVICE_URL}/${upn}`
  logger('info', ['get-uid-from-upn', 'upn', upn, 'start'])
  try {
    const { data } = await axios.get(url)
    const uid = data.fnr || false
    logger('info', ['get-uid-from-upn', 'upn', upn, 'uid', uid, 'finished'])
    return uid
  } catch (error) {
    logger('error', ['get-uid-from-upn', 'upn', upn, error])
    return false
  }
}
