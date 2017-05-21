import {expect} from 'chai'
import {clone} from 'ramda'
import user from '../../client/store/modules/user'

describe('Oracle User Store', () => {
  it('should exist', () => {
    expect(user).to.be.defined
  })

  describe('default user properties', () => {

    it('should contain a property called `user` which is `null`', () => {
      expect(user.state).to.have.ownProperty('user')
      expect(user.state.user).to.be.null
    })

    it('should contain a property called `properties` which is `null`', () => {
      expect(user.state).to.have.ownProperty('properties')
      expect(user.state.properties).to.be.null
    })
  })
})
