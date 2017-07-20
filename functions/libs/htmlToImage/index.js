const Promise = require('bluebird')
const cors = require('cors')({ origin: true });
const wkhtmltoimage = require('wkhtmltoimage')

/**
 * [htmlToImage]
 * @param  {Object} request  []
 * @param  {Object} response []
 * @return {Promise}         [firebase requires that functions return a Promise]
 */
module.exports = function htmlToImage(request, response) {
  cors(request, response, function corsHandler() {
    return new Promise(function htmlToImagePromiseHandler(resolve, reject) {
        //wkhtmltoimage.command = __dirname + "/bin/wkhtmltoimage"
        response.set("Content-Type", "image/png")
        wkhtmltoimage.generate(request.query.html).pipe(response)

        resolve(response)
        
    })
  })
}
