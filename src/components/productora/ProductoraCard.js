import React from "react";
import { Link } from 'react-router-dom';
import { deleteProductora } from "../../services/productoraService";
import Swal from 'sweetalert2'

export const ProductoraCard = (props) => {
       const { productora } = props;
       const redirect = () => {
              const url = '/productora';
              {window.location.href = url;}
       }

       const handleDelete = async () => {
              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: 'Loading....'
                     });
                     const { data } = await deleteProductora(productora._id);
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
              <div className="col">
                     <div className="card">
                            <div className="card-header">
                                   <h5>{productora.nombre}</h5>
                            </div>
                            <div className="card-body">
                                   <p className="card-textr">{`Slogan ${productora.slogan}`}</p>
                                   <p className="card-text">{`Descripcion: ${productora.descripcion}`}</p>
                                   <p className="card-text">{`Estado: ${productora.estado}`}</p>
                                   <p className="card-text">{`Fecha de Creacion: ${productora.fechaCreacion}`}</p>
                                   <p className="card-text">{`Fecha de Actualizacion: ${productora.fechaActualizacion}`}</p>
                            </div>
                            <div className="modal-footer m-3">
                                   <Link to={`productora/put/${productora._id}`} className="btn btn-outline-dark">Actualizar</Link>
                                   <button onClick={handleDelete}  className='btn btn-outline-danger ms-2'>Eliminar</button>
                            </div>
                     </div>
              </div>
       )
}