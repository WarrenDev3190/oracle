/**
 * @Author: warrensadler
 * @Date:   2017-10-21T22:55:40-05:00
 * @Email:  warren.sadler@hcahealthcare.com
 * @Filename: index.js
 * @Last modified by:   warrensadler
 * @Last modified time: 2017-10-21T22:58:57-05:00
 */

import axios from 'axios'

// Local Url
// baseURL: 'http://localhost:5003/projectoracle-b9c0e/us-central1'
// Prod Url
// baseURL: 'https://us-central1-projectoracle-b9c0e.cloudfunctions.net'
// const cloudfunctions = axios.create({
//   baseURL: 'https://us-central1-projectoracle-b9c0e.cloudfunctions.net'
// })

const cloudfunctions = axios.create({
  baseURL: 'https://us-central1-projectoracle-b9c0e.cloudfunctions.net'
})
export default cloudfunctions
