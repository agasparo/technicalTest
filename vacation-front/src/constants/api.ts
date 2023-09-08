import axios from 'axios'

const apiUrl = 'http://localhost:5000'

export const API = axios.create({ baseURL: apiUrl })
