import React, { useEffect, useState } from 'react';
import { getDirectors } from '../../services/directorService';
import { DirectorCard } from './DirectorCard';
import { DirectorNew } from './DirectorNew';


export const DirectorView = () => {
       const [directores, setDirectores] = useState([]);
       const [openModel, setOpenModel] = useState(false);

       const listarDirectores = async () => {
              try {
                     const { data } = await getDirectors();
                     console.log(data);
                     setDirectores(data);
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
              listarDirectores();
       }, []);

       // Hacemos la negacion de openModel
       const handleOpenModal = () => {
              setOpenModel(!openModel);
       }


       return (
              <div className='container'>
                     <div className="mt-2 mb-2 row row-cols-md-3 g-4">
                            {
                                   directores.map((director) => {
                                          return <DirectorCard key={director._id} director={director} />
                                   })
                            }
                     </div>
                     {
                            openModel ? <DirectorNew
                                   handleOpenModal={handleOpenModal} 
                                   listarDirectores={listarDirectores} /> : 
                                   <button className='btn btn-primary btn-add' onClick={handleOpenModal}>
                                          <i className='bi bi-plus '></i>
                                   </button>
                     }
              </div>
       );
};