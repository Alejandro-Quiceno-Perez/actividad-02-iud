import React from 'react'
import { Link } from 'react-router-dom';

export const GeneroCard = (props) => {
       const { genero } = props;
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
                                   </div>
                     </div>
              </div>
       )
}