const withTokenAuth = require('../lib/token-auth')
const getUid = require('../lib/get-uid-from-upn')
const getAgreements = require('../lib/get-agreements')
const anonymize = require('../lib/anonymize-uid')
const logger = require('../lib/logger')

const getMyAgreements = async (request, response) => {
  const { upn } = request.token
  logger('info', ['my-agreements', 'getMyAgreements', 'upn', upn])
  const uid = await getUid(upn)
  if (uid) {
    logger('info', ['my-agreements', 'getMyAgreements', 'upn', upn, 'uid', anonymize(uid)])
    const agreements = await getAgreements(uid)
    response.json(agreements)
  } else {
    logger('warn', ['my-agreements', 'getMyAgreements', 'upn', upn, 'missing uid'])
    response.json([])
  }
}

module.exports = (request, response) => withTokenAuth(request, response, getMyAgreements)
