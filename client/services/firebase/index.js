// oracle/client/services/firebase/index.js
// This module serves as our interface with
// firebase
import Promise from 'bluebird'
import { auth, db } from '../../constants/fb'
import store from '../../store'
import router from '../../router'

const firebaseService = {
  login (email, password) {
    return new Promise((resolve, reject) => {
      auth.signInWithEmailAndPassword(email, password)
      .then(user => resolve(user))
      .catch(signInError => reject(signInError))
    })
  },
  logout () {
    return new Promise((resolve, reject) => {
      auth.signOut()
      .then(() => resolve())
      .catch(signOutError => reject(signOutError))
    })
  },
  /**
   * [listenForAuthStateChanged fires firebase auth listener
   * docs found here: https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onAuthStateChanged]
   */
  listenForAuthStateChanged () {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        store.commit('user/RECEIVE_USER', user)
        firebaseService.getUserProperties(user.uid)
        .then(properties => store.commit('user/RECEIVE_USER_PROPERTIES', properties))
        .then(() => router.push({ path: '/topics' }))
        .catch(loginError => store.commit('user/LOGIN_ERROR', loginError))
      }
    })
  },
  getUserProperties (userId) {
    return new Promise((resolve, reject) => {
      db.ref(`users/${userId}`).once('value')
      .then(snapshot => resolve(snapshot.val().userProperties))
      .catch(getUserPropertiesError => reject(getUserPropertiesError))
    })
  }
}

export default firebaseService
