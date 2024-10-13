import React from 'react'
import { axiosInstance } from "../helper/axios-config";

const getMedias = () => {
       return axiosInstance.get('/media', {
              headers: {
                     'Content-Type': 'application/json'
              }
       });
}

const postMedia = (data) => {
       return axiosInstance.post('/media', data, {
              header: {
                     'Content-Type': 'application/json'
              }
       });
}

const putMedia = (mediaId, data) => {
       return axiosInstance.put(`/media/${mediaId}`, data, {
              header: {
                     'Content-Type': 'application/json'
              }
       });
}

const getMediaById = (mediaId, data) => {
       return axiosInstance.get(`/media/${mediaId}`, data, {
              header: {
                     'Content-Type': 'application/json'
              }
       });
}

const deleteMedia = (mediaId, data) => {
       return axiosInstance.delete(`/media/${mediaId}`, data, {
              header: {
                     'Content-Type': 'application/json'
              }
       });
}
export {
       getMedias,
       postMedia,
       putMedia,
       getMediaById,
       deleteMedia
}
