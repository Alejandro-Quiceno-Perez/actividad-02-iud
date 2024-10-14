import axios from 'axios';

const baseUrl = {
       local:"http://localhost:9000/api",
       prod:"https://pelirredia-2.onrender.com/api"
}

const axiosInstance = axios.create({
       baseURL: baseUrl.prod,
       timeout: 10000,
       headers: { 'Content-Type': 'application/json' }
})

export { axiosInstance };