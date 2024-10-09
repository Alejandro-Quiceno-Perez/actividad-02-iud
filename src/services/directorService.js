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

const putDirector = (directorId, data) => {
       return axiosInstance.put(`/director/${directorId}`,data, {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

const getDirectorById = (directorId, data) => {
       return axiosInstance.get(`/director/${directorId}`,data, {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

const deleteDirector = (directorId, data) => {
       return axiosInstance.delete(`/director/${directorId}`,data, {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

export {
       getDirectors,
       postDirector,
       putDirector,
       getDirectorById,
       deleteDirector
}