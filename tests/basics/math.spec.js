import { expect } from 'chai'

/**
 * Defacto Example Test using Mocha + Chai
 * some notes on how to use mocha: https://mochajs.org/
 * some notes on chai and expect: http://chaijs.com/api/bdd/
 */

describe('Math', () => {
  it('should still work', () => {
    expect(1 + 1).to.eql(2)
  })
})
