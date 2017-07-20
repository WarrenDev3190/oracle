import axios from 'axios'

//baseURL: 'https://us-central1-projectoracle-b9c0e.cloudfunctions.net'
const cloudfunctions = axios.create({
  baseURL: 'https://us-central1-projectoracle-b9c0e.cloudfunctions.net'
})

export default cloudfunctions
