import React from "react";
import { link } from 'react-router-dom';

export const DirectorCard = ({ props }) => {
       const { director } = props;
       return (
              <div className="col">
                     <div className="card">
                            <img src={foto} className="card-img-top" alt="Img" />
                            <div className="card-body">
                                   <h5 className="card-title">Características</h5>
                                   <hr />
                                   <p className="card-text">{`Serial: ${}`}</p>
                                   <p className="card-text">{`Marca: ${}`}</p>
                                   <p className="card-text">{`Descripcion: ${}`}</p>
                                   <p className="card-text">{`Marca: ${}`}</p>
                                   <p className="card-text">{`Usuario: ${}`}</p>
                                   <p className="card-text">
                                          <a>Ver más...</a>
                                   </p>
                            </div>
                     </div>
              </div>
       )
}