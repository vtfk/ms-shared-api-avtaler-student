const { send } = require('micro')
const withTokenAuth = require('../lib/token-auth')
const getUserName = require('../lib/get-user-name')
const getUid = require('../lib/get-uid-from-username')
const getAgreements = require('../lib/get-agreements')
const logger = require('../lib/logger')

const getMyAgreements = async (request, response) => {
  const { upn } = request.token
  const userName = getUserName(upn)
  logger('info', ['my-agreements', 'getMyAgreements', 'upn', upn, 'userName', userName])
  const uid = await getUid(userName)
  const agreements = await getAgreements(uid)
  send(response, 200, agreements)
}

module.exports = (request, response) => withTokenAuth(request, response, getMyAgreements)
