const functions = require('firebase-functions');
const getNews = require('./libs/newsapi')

exports.getNews = functions.https.onRequest(getNews);
