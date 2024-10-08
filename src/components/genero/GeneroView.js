import React, { useEffect, useState } from 'react'
import { getGeneros } from '../../services/generoService'
import { GeneroCard } from './GeneroCard'
import { GeneroNew } from './GeneroNew'

export const GeneroView = () => {
       const [generos, setGeneros] = useState([]);
       const [openModal, setOpenModal] = useState(false)

       const listarGeneros = async () => {
              try {
                     const { data } = await getGeneros();
                     console.log(data);
                     setGeneros(data);
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
              listarGeneros();
       }, []);

       const handleOpenModal = () => {
              setOpenModal(!openModal);
       }

       return (
              <div className="container">
                     <div className="mt-2 mb-2 row row-cols-md-3 g-4">
                            {
                                   generos.map((genero) => {
                                          return <GeneroCard key={genero._id} genero={genero} />
                                   })
                            }
                     </div>
                     {
                            openModal ? <GeneroNew
                                   handleOpenModal={handleOpenModal}
                                   listarDirectores={listarGeneros} /> :
                                   <button className='btn btn-primary btn-add' onClick={handleOpenModal}>
                                          <i className='bi bi-plus '></i>
                                   </button>
                     }
              </div>
       );
}