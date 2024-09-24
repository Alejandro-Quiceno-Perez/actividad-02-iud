import { axiosInstance } from "../helper/axios-config";

const getProductoras =  () => {
       return axiosInstance.get('/productora', {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
};


export {
       getProductoras
}