/**
 * @Author: warrensadler
 * @Date:   2017-10-24T15:53:39-05:00
 * @Email:  warren.sadler@hcahealthcare.com
 * @Filename: index.js
 * @Last modified by:   warrensadler
 * @Last modified time: 2017-10-24T16:07:11-05:00
 */

import axios from 'axios'

const cloudfunctions = axios.create({
  baseURL: 'https://us-central1-projectoracle-b9c0e.cloudfunctions.net'
})

export default cloudfunctions
