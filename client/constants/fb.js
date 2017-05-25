// oracles/client/constants/firebase.js
// Here we initialize our connection to firebase
// Their documentation is actually quite stellar
// check it out here: https://firebase.google.com/docs/web/setup
import * as firebase from 'firebase'

export const fb = firebase.initializeApp(FIREBASE)
export const db = fb.database()
export const auth = fb.auth()
