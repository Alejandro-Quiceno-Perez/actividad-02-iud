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

const putGenero = (generoId, data) => {
       return axiosInstance.put(`/generos/${generoId}`, data, {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

const getGeneroById = (generoId) => {
       return axiosInstance.get(`/generos/${generoId}`, {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

const deleteGenero = (generoId, data) => {
       return axiosInstance.delete(`/generos/${generoId}`, data, {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

export {
       getGeneros,
       postGenero,
       putGenero,
       getGeneroById,
       deleteGenero
}
