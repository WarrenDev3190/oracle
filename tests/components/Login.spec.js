import { expect } from 'chai'
import Login from '../../client/components/Login.vue'

describe('Oracle Login Component', () => {
  it('should exist', () => {
    expect(Login).to.be.defined
  })

  describe('Login Component Defaults', () => {
    it('should have a data property', () => {
      expect(Login.data).to.be.defined
    })

    it('should have an email and password property', () => {
      const defaultLoginData = Login.data()
      expect(defaultLoginData).to.have.ownProperty('email')
      expect(defaultLoginData).to.have.ownProperty('password')
    })

  })
})
