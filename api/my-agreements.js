const { send } = require('micro')
const withTokenAuth = require('../lib/token-auth')
const getUid = require('../lib/get-uid-from-upn')
const getAgreements = require('../lib/get-agreements')
const logger = require('../lib/logger')

const getMyAgreements = async (request, response) => {
  const { upn } = request.token
  logger('info', ['my-agreements', 'getMyAgreements', 'upn', upn])
  const uid = await getUid(upn)
  if (uid) {
    logger('info', ['my-agreements', 'getMyAgreements', 'upn', upn, 'uid', uid])
    const agreements = await getAgreements(uid)
    send(response, 200, agreements)
  } else {
    logger('warn', ['my-agreements', 'getMyAgreements', 'upn', upn, 'missing uid'])
    send(response, 200, [])
  }
}

module.exports = (request, response) => withTokenAuth(request, response, getMyAgreements)
