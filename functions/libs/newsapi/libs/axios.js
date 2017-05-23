// oracle/functions/libs/newsapi/libs/axios.js
// in this module we define the instance of
// axios for interfacing with NewsApi
// docs on instantiation with axios: https://github.com/mzabriskie/axios#creating-an-instance
const axios = require('axios')
const config = require('config')

module.exports = axios.create({
  baseURL: config.get('newsApi.baseURL'),
  headers: { 'X-Api-Key' : config.get('newsApi.key') }
})
