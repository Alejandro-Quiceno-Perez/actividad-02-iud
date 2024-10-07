import React, { useEffect, useState } from 'react';
import { getMedias } from '../../services/mediaService';
import { MediaCard } from './MediaCard';
import { MediaNew } from './MediaNew'

export const MediaView = () => {
       const [medias, setMedias] = useState([]);
       const [openModel, setOpenModel] = useState(false);

       const listMedias = async () => {
              try {
                     const { data } = await getMedias();
                     console.log(data);
                     setMedias(data);
              } catch (error) {
                     if (error.response) {
                            // El servidor respondió con un código de estado fuera del rango 2xx
                            console.error('Error en la respuesta del servidor:', error.response.data);
                     } else if (error.request) {
                            // La solicitud fue hecha pero no se recibió respuesta
                            console.error('No se recibió respuesta del servidor:', error.request);
                     } else {
                            // Algo sucedió al configurar la solicitud
                            console.error('Error al configurar la solicitud:', error.message);
                     }
              }
       }

       useEffect(() => {
              listMedias();
       }, []);

       const handleOpenModal = () => {
              setOpenModel(!openModel);
       }
       return (
              <div className='container'>
                     <div className="mt-2 mb-2 row row-cols-md-3 g-4">
                            {
                                   medias.map((media) => {
                                          return <MediaCard key={media._id} media={media} />
                                   })
                            }
                     </div>
                     {
                            openModel ? <MediaNew handleOpenModal={handleOpenModal} listMedias={listMedias} /> :
                                   <button className='btn btn-primary btn-add' onClick={handleOpenModal}>
                                          <i className='bi bi-plus '></i>
                                   </button>
                     }
              </div>
       )
}