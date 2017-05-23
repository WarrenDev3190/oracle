// oracle/functions/tests/functions/newsapi/getSources.spec.js
const expect = require('chai').expect
const getSources = require('../../../libs/newsapi/libs/getSources.js')

describe('NewsAPI getSources', function () {
  it('should exist', function () {
    expect(getSources).to.be.defined
  })

  it('should return an array of sources', function (done) {
    getSources()
    .then(function (responseData) {
      expect(responseData).to.be.an.array
      done()
    })
  })
})
