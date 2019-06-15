const { send } = require('micro')

module.exports = async (request, response) => {
  send(response, 200, 'Howdy stranger')
}