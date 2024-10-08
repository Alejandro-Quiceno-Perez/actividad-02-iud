import { axiosInstance } from "../helper/axios-config";

const getTipos =  () => {
       return axiosInstance.get('/tipo', {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

const postTipo = (data) => {
       return axiosInstance.post('/tipo', data, {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}
export {
       getTipos,
       postTipo
}