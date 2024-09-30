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

export {
       getMedias,
       postMedia
}
