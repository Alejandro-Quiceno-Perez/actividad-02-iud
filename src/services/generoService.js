import { axiosInstance } from "../helper/axios-config"

const getGeneros = () => {
       return axiosInstance.get('/generos', {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
};

const postGenero = (data) => {
       return axiosInstance.post('/generos', data, {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

export {
       getGeneros,
       postGenero
}
