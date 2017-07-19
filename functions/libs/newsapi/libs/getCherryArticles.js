// oracle/functions/libs/newsapi/libs/getCherryArticles.js
// This function allows for retrieving all cherry picked articles
// sources from firebase
const Promise = require('bluebird')
const admin = require("firebase-admin");

module.exports = function getCherryArticles(company) {
    return new Promise((resolve, reject) => {
      if(company != undefined && company != ""){
        admin.database().ref(`/${company}`).once('value')
        .then(snapshot => {
          var cherryArticles = []
          snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            cherryArticles.push(childData)
          });
          resolve(cherryArticles)
        })
        .catch(getUserPropertiesError => reject(getUserPropertiesError))
      }
      else{
        resolve([])
      }
    })
}
