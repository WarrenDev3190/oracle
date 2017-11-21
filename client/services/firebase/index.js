/**
 * @Author: warrensadler
 * @Date:   2017-10-24T16:01:40-05:00
 * @Email:  warren.sadler@hcahealthcare.com
 * @Filename: index.js
 * @Last modified by:   warrensadler
 * @Last modified time: 2017-10-24T16:10:13-05:00
 */

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
  signup (email, password) {
    return new Promise((resolve, reject) => {
      auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        resolve(user)
      })
      .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          reject(errorMessage)
      })
    })
  },
  forgotPassword (email) {
    return new Promise((resolve, reject) => {
      auth.sendPasswordResetEmail(email)
        .then(() => { 
          // Email sent.
          resolve('SUCCESSFULLY SENT RECOVERY EMAIL')
      }).catch((forgotPasswordError) => {
        // An error happened.
        reject(forgotPasswordError)
      })
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
        .then(() => router.push({ path: '/stories' }))
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
  },
  deleteTemplate ({ userId, templateId }) {
    return new Promise((resolve, reject) => {
      db.ref(`users/${userId}/templates/time-template/${templateId}`).remove()
      .then(() => resolve())
      .catch((err) => reject(err))
    })
  }
}
export default firebaseService
