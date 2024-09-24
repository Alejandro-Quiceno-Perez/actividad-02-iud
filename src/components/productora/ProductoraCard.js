import React from "react";
import { Link } from 'react-router-dom';

export const ProductoraCard = (props) => {
       const { productora } = props;
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
                     </div>
              </div>
       )
}