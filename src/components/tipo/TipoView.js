import React, { useState, useEffect } from 'react'
import { getTipos } from '../../services/tipoService'
import { TipoCard } from './TipoCard'
import { TipoNew } from './TipoNew'

export const TipoView = () => {
       const [ tipos, setTipos ] = useState([]);
       const [ openModel, setOpenModel ] = useState(false);

       const listTipos = async () => {
              try {
                     const { data } = await getTipos();
                     console.log(data);
                     setTipos(data);
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
              listTipos();
       },[]);

       const handleOpenModal = () => {
              setOpenModel(!openModel)
       }
       return (
              <div className='container'>
                     <div className="mt-2 mb-2 row row-cols-md-3 g-4">
                            {
                                   tipos.map((tipo) => {
                                          return <TipoCard key={tipo._id} tipo={tipo} />
                                   })
                            }
                     </div>
                     {
                            openModel ? <TipoNew handleOpenModal={handleOpenModal} listTipos={listTipos} /> :
                                   <button className='btn btn-primary btn-add' onClick={handleOpenModal}>
                                          <i className='bi bi-plus '></i>
                                   </button>
                     }
              </div>
       )
}