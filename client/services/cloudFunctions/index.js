import axios from 'axios'

const cloudfunctions = axios.create({
  baseURL: 'https://us-central1-projectoracle-b9c0e.cloudfunctions.net'
})

export default cloudfunctions
