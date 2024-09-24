import axios from 'axios';

const axiosInstance = axios.create({
       baseURL: 'http://localhost:9000/api',
       timeout: 1000,
       headers: { 'Content-Type': 'application/json' }
})

export { axiosInstance };