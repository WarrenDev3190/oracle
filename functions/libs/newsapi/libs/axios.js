// oracle/functions/libs/newsapi/libs/axios.js
// in this module we define the instance of
// axios for interfacing with NewsApi
// docs on instantiation with axios: https://github.com/mzabriskie/axios#creating-an-instance
const axios = require('axios')
const functions = require('firebase-functions')

module.exports = axios.create({
  baseURL: functions.config().newsapi.baseurl,
  headers: { 'X-Api-Key' : functions.config().newsapi.key }
})
