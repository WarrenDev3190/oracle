const expect = require('chai').expect
const getArticles = require('../../../libs/newsapi/libs/getArticles')

describe('NewsApi getArticles', function () {
  it('should exist', function () {
    expect(getArticles).to.be.defined
  })

  it('should return an array of articles', function (done) {
    getArticles()
    .then(function (getArticlesRes) {
      expect(getArticlesRes).to.be.an.array
      done()
    })
  })
})
