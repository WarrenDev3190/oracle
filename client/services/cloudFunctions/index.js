import axios from 'axios'

//Local Url
//baseURL: 'http://localhost:5003/projectoracle-b9c0e/us-central1'
//Prod Url
//baseURL: 'https://us-central1-projectoracle-b9c0e.cloudfunctions.net'
// const cloudfunctions = axios.create({
//   baseURL: 'https://us-central1-projectoracle-b9c0e.cloudfunctions.net'
// })

const cloudfunctions = axios.create({
  baseURL: 'https://us-central1-projectoracle-b9c0e.cloudfunctions.net'
})
export default cloudfunctions
