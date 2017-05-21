import {expect} from 'chai'
import sinon from 'sinon'
import router from '../../client/router'
import routerBeforeEach from '../../client/router/libs/beforeEach' // renamed to avoid collision with mocha.beforeEach

describe('Oracle Router', () => {
  it('should exist', () => {
    expect(router).to.be.defined
  })

  describe('Router `beforeEach`', () => {
    let to = sinon.spy()
    let from = sinon.spy()
    let next = sinon.spy()

    beforeEach(() => {
      sinon.spy(next)
    })

    it('should exist', () => {
      expect(routerBeforeEach).to.be.defined
    })

    it('should call `next` to continue routing', () => {
      routerBeforeEach(to, from, next)
      expect(next.calledOnce).to.be.true
    })

  })
})
