const Promise = require('bluebird')
const sendMail = require('./libs/sendMail');
const cors = require('cors')({ origin: true });

/**
 * [sendTemplate]
 * @param  {Object} request  [sendTemplate depends on a on object containing the following fields
 *                            from: {String} the sender of the template,
 *                            subject {String} the subject of the template,
 *                            recipients {Array<String>} an array of Strings, recipients of the template
 *                            content {Base64 EncodedURI HTML} an encoded template to be sent
 *                            ]
 * @param  {Object} response [description]
 * @return {Promise}         [firebase requires that functions return a Promise]
 */
module.exports = function sendTemplate(request, response) {
  cors(request, response, function corsHandler() {
    return new Promise(function sendTemplatePromiseHandler(resolve, reject) {
      sendMail({
        from: request.body.from,
        subject: request.body.subject,
        recipients: request.body.recipients,
        content: request.body.content
      })
      .then(sendMailResponse => {
        response.send(sendMailResponse);
      })
      .catch(sendMailError => {
        response.send(sendMailError)
      })
    })
  })
}
