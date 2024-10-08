import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getGeneroById, deleteGenero } from '../../services/generoService';
import Swal from 'sweetalert2';

export const GeneroCard = (props) => {
       const { genero } = props;
       const redirect = () => {
              const url = '/genero';
              {window.location.href = url;}
       }
       

       const handleDelete = async () => {
              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: 'Loading....'
                     });
                     Swal.showLoading();
                     const { data } = await deleteGenero(genero._id);
                     console.log(data);
                     redirect();
              } catch (error) {
                     console.log(error.message);
                     Swal.close();
                     let mensaje;
                     if (error && error.response && error.response.data) {
                            mensaje = error.response.data.message;
                     } else {
                            mensaje = "Ocurrio un error, intente nuevamente";
                     }
                     Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: mensaje
                     });
              }
       }

       return (
              <div className='col'>
                     <div className="card">
                            <div className="card-header">
                                   <h5>{genero.nombre}</h5>
                            </div>
                            <div className="card-body">
                                   <p className="card-text">{`Estado: ${genero.estado}`}</p>
                                   <p className="card-text">{`Descripcion: ${genero.descripcion}`}</p>
                                   <p className="card-text">{`Fecha de Creacion: ${genero.fechaCreacion}`}</p>
                                   <p className="card-text">{`Fecha de Actualizacion: ${genero.fechaActualizacion}`}</p>
                            </div>
                            <div className="modal-footer m-3">
                                   <Link to={`genero/put/${genero._id}`} className="btn btn-outline-dark">Actualizar</Link>
                                   <button onClick={handleDelete}  className='btn btn-outline-danger ms-2'>Eliminar</button>
                            </div>
                     </div>
              </div>
       )
}