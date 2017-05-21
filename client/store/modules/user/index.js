// client/store/modules/user/index.js

const state = {
  user: null,
  properties: null
}

const getters = {
  /**
   * [isUserLoggedOut description]
   * @param  {[type]}  state [description]
   * @return {Boolean}       [description]
   */
  isUserLoggedOut (state) {
    return !!state.user
  },
  /**
   * [currentUser description]
   * @param  {[type]} state [description]
   * @return {[type]}       [description]
   */
  currentUser (state) {
    return state.user
  }
}

export default {
  state,
  getters
}
