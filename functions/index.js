const functions = require('firebase-functions');
const admin = require('firebase-admin')
const getNews = require('./libs/newsapi')
const onUserCreated = require('./libs/onUserCreated')
const initializeUser = require('./libs/initializeUser')

// Initialize Firebase Connection
admin.initializeApp(functions.config().firebase)

exports.getNews = functions.https.onRequest(getNews)
exports.onUserCreated = functions.auth.user().onCreate(onUserCreated(admin))
exports.initializeUser = functions.database.ref('users/{userId}').onWrite(initializeUser)
