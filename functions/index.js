const functions = require('firebase-functions');
const admin = require('firebase-admin')
const getNews = require('./libs/newsapi')
const sendTemplate = require('./libs/sendTemplate')
const onUserCreated = require('./libs/onUserCreated')
const initializeUser = require('./libs/initializeUser')
const htmlToImage = require('./libs/htmlToImage')

// Initialize Firebase Connection
admin.initializeApp(functions.config().firebase)

exports.getNews = functions.https.onRequest(getNews)
exports.sendTemplate = functions.https.onRequest(sendTemplate)
exports.htmlToImage = functions.https.onRequest(htmlToImage)
exports.onUserCreated = functions.auth.user().onCreate(onUserCreated(admin))
exports.initializeUser = functions.database.ref('users/{userId}').onWrite(initializeUser)
