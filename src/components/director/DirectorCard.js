import React from "react";
import { Link } from 'react-router-dom';

export const DirectorCard = ( props ) => {
       const { director } = props;
       return (
              <div className="col">
                     <div className="card">
                            <div className="card-header">
                                   <h5>{director.nombres}</h5>
                            </div>
                            <div className="card-body">
                                   <p className="card-text">{`Estado: ${director.estado}`}</p>
                                   <p className="card-text">{`Fecha de Creacion: ${director.fechaCreacion}`}</p>
                                   <p className="card-text">{`Fecha de Actualizacion: ${director.fechaActualizacion}`}</p>
                            </div>
                            <div className=""></div>
                     </div>
              </div>
       )
}