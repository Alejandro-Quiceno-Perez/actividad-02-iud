import React, { useEffect, useState } from 'react'
import { getProductoras } from '../../services/productoraService'
import { ProductoraCard } from './ProductoraCard'
import { ProductoraNew } from './ProductoraNew'

export const ProductoraView = () => {
       const [productoras, setProductoras] = useState([]);
       const [openModel, setOpenModel] = useState(false);

       const listarProductoras = async () => {
              try {
                     const { data } = await getProductoras();
                     console.log(data);
                     setProductoras(data);
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
              listarProductoras();
       }, []);

       const handleOpenModal = () => {
              setOpenModel(!openModel);
       }

       return (
              <div className="container">
                     <div className="mt-2 mb-2 row row-cols-md-4 g-4">
                            {
                                   productoras.map((productora) => {
                                          return <ProductoraCard key={productora._id} productora={productora} />
                                   })
                            }
                     </div>
                     {
                            openModel ? <ProductoraNew
                                   handleOpenModal={handleOpenModal}
                                   listarProductoras={listarProductoras} /> :
                                   <button className='btn btn-primary btn-add' onClick={handleOpenModal}>
                                          <i className='bi bi-plus '></i>
                                   </button>
                     }
              </div>
       )
}