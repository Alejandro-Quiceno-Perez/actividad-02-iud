import { axiosInstance } from "../helper/axios-config";

const getProductoras =  () => {
       return axiosInstance.get('/productora', {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
};

const postProductora = (data) => {
       return axiosInstance.post('/productora', data, {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

const putProductora = (productoraId, data) => {
       return axiosInstance.put(`/productora/${productoraId}`, data, {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

const getProductoraById = (productoraId) =>{
       return axiosInstance.get(`/productora/${productoraId}`, {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

const deleteProductora = (productoraId, data) => {
       return axiosInstance.delete(`/productora/${productoraId}`, data, {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}


export {
       getProductoras,
       postProductora,
       putProductora,
       getProductoraById,
       deleteProductora
}