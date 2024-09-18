import { axiosInstance } from "../helper/axios-config";

const getDirector = () => {
       return axiosInstance.get('director', {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

const postDirector = (data) => {
       return axiosInstance.post('director', {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

const putDirector = (data) => {
       return axiosInstance.put('director', {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

export {
       getDirector,
       postDirector,
       putDirector
}