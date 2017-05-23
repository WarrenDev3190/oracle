const expect = require('chai').expect
const getArticlesBySource = require('../../../libs/newsapi/libs/getArticlesBySource')

describe('NewsAPI getArticlesBySource', function () {
  it('should exist', function () {
    expect(getArticlesBySource).to.be.defined
  })

  it('should return an array of articles', function (done) {
    getArticlesBySource('buzzfeed')
    .then(function (buzzfeedArticles) {
      expect(buzzfeedArticles).to.be.an.array
      done()
    })
  })
})
