import React from "react";
import { Link } from 'react-router-dom';

export const MediaCard = (props) => {
       const { media } = props;
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
                                   <p className="card-text">{`Genero principal: ${media.generoPrincipal}`}</p>
                                   <p className="card-text">{`Director principal: ${media.directorPrincipal}`}</p>
                                   <p className="card-text">{`Productora: ${media.productora}`}</p>
                                   <p className="card-text">{`Tipo: ${media.tipo}`}</p>
                            </div>
                     </div>
              </div>

       )
}
