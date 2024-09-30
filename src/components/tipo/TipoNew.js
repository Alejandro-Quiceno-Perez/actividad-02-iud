import React, { useState, useEffect } from "react";
import styleModal from '../../styles/styleModal.css';
import { postTipo } from '../../services/tipoService';
import Swal from "sweetalert2";

export const TipoNew = ({ handleOpenModal, listTipos }) => {

       const [valoresForm, setValoresForm] = useState([])
       const {
              nombre = '',
              fechaCreacion = '',
              fechaActualizacion = '',
              descripcion = ''
       } = valoresForm;

       const handleOnChange = async ({ target }) => {
              const { name, value } = target;
              setValoresForm({
                     ...valoresForm,
                     [name]: value
              })
       }

       const handleOnSubmit = async (e) => {
              e.preventDefault();

              const tipo = {
                     nombre,
                     fechaCreacion,
                     fechaActualizacion,
                     descripcion
              }
              console.log(tipo);
              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: "Loading..."
                     });
                     Swal.showLoading();
                     const { data } = await postTipo(tipo);
                     handleOpenModal();
                     listTipos();
                     Swal.close();
                     listTipos();
              } catch (error) {
                     console.log(error.message);
                     Swal.close();
              }
       }
       return (
              <div className="container-modal" >
                     <div className="container-header">
                            <div className='sidebar-header d-flex justify-content-between'>
                                   <h3>Nuevo Tipo</h3>
                                   <button className='btn btn-danger' onClick={handleOpenModal}>
                                          <i className="bi bi-x"></i>
                                   </button>
                            </div>
                            <form className='form' onSubmit={(e) => handleOnSubmit(e)}>
                                   <div className="mb-3">
                                          <label htmlFor="nombreTipo" className="form-label">Tipo</label>
                                          <input type="text" name='nombre' className="form-control" id="nombreTipo" placeholder='Escribe el nombre aqui' required value={nombre} onChange={e => handleOnChange(e)} />
                                   </div>
                                   <div className="row mb-3">
                                          <div className="col">
                                                 <label htmlFor="fechaCreacion" className="form-label">Fecha de Creacion</label>
                                                 <input type="Date" name='fechaCreacion' className="form-control" id="fechaCreacion" placeholder='AAAA-MM-DD' required value={fechaCreacion} onChange={e => handleOnChange(e)}/>
                                          </div>
                                          <div className="col">
                                                 <label htmlFor="fechaActualizacion" className="form-label">Fecha de Actualizacion</label>
                                                 <input type="Date" name='fechaActualizacion' className="form-control" id="fechaActualizacion" placeholder='AAAA-MM-DD' required value={fechaActualizacion} onChange={e => handleOnChange(e)} />
                                          </div>
                                   </div>
                                   <div className="mb-3">
                                          <label htmlFor="descripcionProductora" className="form-label">Descripcion Tipo</label>
                                          <textarea type="text" name='descripcion' className="form-control" id="descripcionProductora" placeholder='Escribe el nombre aqui' required value={descripcion} onChange={e => handleOnChange(e)} />
                                   </div>

                                   <div className="modal-footer">
                                          <button className="btn btn-success">Guardar</button>
                                   </div>
                            </form>
                     </div>
              </div>
       )
}