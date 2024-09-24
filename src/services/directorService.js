import { axiosInstance } from "../helper/axios-config";

const getDirectors =  () => {
       const prueba =  axiosInstance.get('/director', {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
       console.log(prueba);
       return prueba;
}

const postDirector = (data) => {
       return axiosInstance.post('/director', data, {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

const putDirector = (data) => {
       return axiosInstance.put('/director', {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

export {
       getDirectors
}