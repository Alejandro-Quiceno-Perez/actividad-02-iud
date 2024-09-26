import React, { useState, useEffect } from 'react'
import styleModal from '../../styles/styleModal.css'
import { postDirector } from '../../services/directorService';

import Swal from 'sweetalert2';

export const DirectorNew = ({ handleOpenModal, listarDirectores }) => {

       const [valoresForm, setValoresForm] = useState([]);
       const {
              nombres = '',
              estado = 0,
              fechaCreacion = '',
              fechaActualizacion = ''
       } = valoresForm;

       const handleOnChange = async  ({ target }) => {
              const { name, value } = target;
              setValoresForm({
                     ...valoresForm,
                     [name]: value
              });
              
       }

       const handleOnSubmit = async (e) => {
              e.preventDefault();
              const director = {
                     nombres,
                     estado,
                     fechaCreacion,
                     fechaActualizacion
              }
              console.log(director)
              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: "Loading...."
                     });
                     Swal.showLoading();
                     const { data } = await postDirector(director);
                     handleOpenModal();
                     listarDirectores();
                     Swal.close();
                     listarDirectores();
              } catch (error) {
                     console.log(error.message);
                     Swal.close();
              }
       }
       return (
              <div className="container-modal">
                     <div className="container-header">
                            <div className='sidebar-header d-flex justify-content-between'>
                                   <h3>Nuevo Director</h3>
                                   <button className='btn btn-danger' onClick={handleOpenModal}>
                                          <i className="bi bi-x"></i>
                                   </button>
                            </div>
                            <form className='form' onSubmit={(e) => handleOnSubmit(e)}>
                                   <div className="mb-3">
                                          <label htmlFor="nombreDirector" className="form-label">Nombre Director</label>
                                          <input type="text" name='nombres' className="form-control" id="nombreDirector" placeholder='Escribe el nombre aqui' required value={nombres} onChange={e => handleOnChange(e)} />
                                   </div>
                                   <div className="mb-3">
                                          <label htmlFor="estadoDirector" className="form-label">Estado Director</label>
                                          <select id="estadoDirector" className="form-select" name='estado' value={estado} onChange={e => handleOnChange(e)}>
                                                 <option value="1">True</option>
                                                 <option value="0">False</option>
                                          </select>
                                   </div>
                                   <div className="mb-3">
                                          <label htmlFor="fechaCreacion" className="form-label">Fecha de Creacion</label>
                                          <input type="Date" name='fechaCreacion' className="form-control" id="fechaCreacion" placeholder='AAAA-MM-DD' required  value={fechaCreacion} onChange={e => handleOnChange(e)}/>
                                   </div>
                                   <div className="mb-3">
                                          <label htmlFor="fechaActualizacion" className="form-label">Fecha de Actualizacion</label>
                                          <input type="Date" name='fechaActualizacion' className="form-control" id="fechaActualizacion" placeholder='AAAA-MM-DD' required value={fechaActualizacion} onChange={e => handleOnChange(e)}/>
                                   </div>
                                   <div className="modal-footer">
                                          <button className="btn btn-success">Guardar</button>
                                   </div>
                            </form>
                     </div>
              </div>
       )
}
