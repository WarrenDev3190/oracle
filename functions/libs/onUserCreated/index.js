/*
* NewsCartß Firebase Auth Function
* docs:
*  https://firebase.google.com/docs/functions/auth-events
* examples:
*  https://github.com/firebase/functions-samples/blob/master/user-data-cleanup/functions/index.js
*
**/

module.exports = function onUserCreatedHandler (admin) {
  /**
   * [onUserCreate listens for event on user creation
   * and sets initialization properties]
   * @param  {Object} event [Firebase User Auth Event]
   * @return {Promise}      [Firebase Ref Setting Promise, required by all firebase functions]
   */
  return function onUserCreated (event) {
    const user = event.data
    return admin.database().ref(`/users/${user.uid}`).set({
      initialized: false
    })
  }
}
