import React from "react";
import { Link } from 'react-router-dom';
import { deleteMedia } from "../../services/mediaService";
import Swal from 'sweetalert2';

export const MediaCard = (props) => {
       const redirect = () => {
              const url = '/media';
              {window.location.href = url}
       }
       const { media } = props;

       const handleDelete = async () => {
              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: 'Loading....'
                     });
                     Swal.showLoading();
                     const { data } = await deleteMedia(media._id);
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
                                   <h5>{media.titulo}</h5>
                            </div>
                            <div className="card-body">
                                   <p className="card-text">{`Descripcion: ${media.serial}`}</p>
                                   <p className="card-text">{`Sinopsis: ${media.sinopsis}`}</p>
                                   <p className="card-text">{`URL: ${media.url}`}</p>
                                   <p className="card-text">{`Año de estreno: ${media.añoEstreno}`}</p>
                                   <p className="card-text">{`Genero principal: ${media.generoPrincipal ? media.generoPrincipal.nombre : 'N/A'}`}</p>
                                   <p className="card-text">{`Director principal: ${media.directorPrincipal ? media.directorPrincipal.nombres : 'N/A'}`}</p>
                                   <p className="card-text">{`Productora: ${media.productora ? media.productora.nombre : 'N/A'}`}</p>
                                   <p className="card-text">{`Tipo: ${media.tipo ? media.tipo.nombre : 'N/A'}`}</p>
                            </div>

                            <div className="modal-footer m-3">
                                   <Link to={`media/put/${media._id}`} className="btn btn-outline-dark">Actualizar</Link>
                                   <button onClick={handleDelete}  className='btn btn-outline-danger ms-2'>Eliminar</button>
                            </div>
                     </div>
              </div>

       )
}
