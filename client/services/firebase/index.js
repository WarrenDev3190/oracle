// oracle/client/services/firebase/index.js
// This module serves as our interface with
// firebase
import Promise from 'bluebird'
import { auth, db } from '../../constants/fb'

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
   * @return {Promise} [a Promise returning either a user or null ]
   */
  listenForAuthStateChanged () {
    return Promise((resolve, reject) => {
      auth.onAuthStateChanged()
      .then(user => {
        if (user) {
          return resolve(user)
        }
        return resolve()
      })
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
