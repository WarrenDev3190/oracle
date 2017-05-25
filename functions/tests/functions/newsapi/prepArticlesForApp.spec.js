const expect = require('chai').expect
const prepArticlesForApp = require('../../../libs/newsapi/libs/prepArticlesForApp')


describe('NewsApi prepArticlesForApp', function () {
  it('should add index and selected flag to given article object', function () {
    expect(prepArticlesForApp({name: 'dude'}, 1)).to.eql({
      name: 'dude',
      index: 1,
      selected: false
    })
  })
})
