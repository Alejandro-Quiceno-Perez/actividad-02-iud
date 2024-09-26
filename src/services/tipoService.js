import { axiosInstance } from "../helper/axios-config";

const getTipos =  () => {
       return axiosInstance.get('/tipo', {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

export {
       getTipos
}