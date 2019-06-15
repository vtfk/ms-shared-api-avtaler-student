const axios = require('axios')
const generateToken = require('./generate-system-token')
const logger = require('./logger')

module.exports = async uid => {
  axios.defaults.headers.common['Authorization'] = generateToken(process.env.AGREEMENT_SERVICE_SECRET)
  logger('info', ['get-agreements', 'start'])
  const payload = {
    uids: [uid]
  }
  try {
    const { data } = await axios.post(process.env.AGREEMENT_SERVICE_URL, payload)
    logger('info', ['get-agreements', 'success'])
    return data
  } catch (error) {
    logger('error', ['get-agreements', error])
  }
}
