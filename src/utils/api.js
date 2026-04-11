import axios from 'axios'

const api = props = axios.create({baseURL:"http://localhost:3000/"})
export default api