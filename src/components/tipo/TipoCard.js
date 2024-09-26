import React from "react";
import { Link } from 'react-router-dom';

export const TipoCard = (props) => {
       const { tipo } = props;
       return (
              <div className="col">
                     <div className="card">
                            <div className="card-header">
                                   <h5>{tipo.nombre}</h5>
                            </div>
                            <div className="card-body">
                                   <p className="card-text">{`Descripcion: ${tipo.descripcion}`}</p>
                                   <p className="card-text">{`Fecha de Creacion: ${tipo.fechaCreacion}`}</p>
                                   <p className="card-text">{`Fecha de Actualizacion: ${tipo.fechaActualizacion}`}</p>
                            </div>
                     </div>
              </div>
       )
}