/**
 *
 * NewsCartß Firebase Function
 *
 * docs:
 *  https://firebase.google.com/docs/functions/database-events
 * example:
 *  https://github.com/firebase/functions-samples/blob/master/text-moderation/functions/index.js
 *
 **/

const defaultUserProperties = require('./libs/defaultUserProperties')

/**
 * [initializeUser when user is created, set initial application related user properties]
 */
module.exports = function initializeUser (event) {
  const user = event.data.val()
  /* eslint-disable */
  console.log('User to initialize', event.params.userId, user)
  /* eslint-enable */
  if (user.initialized) {
    /* eslint-disable */
    console.log(user + ' already indexed')
    /* eslint-enable */
    return
  }
  // Set user initialized flag to avoid loop
  user.initialized = true
  user.userProperties = defaultUserProperties
  /* eslint-disable */
  console.log('User initialized', user)
  /* eslint-enable */
  return event.data.adminRef.set(user)
}
