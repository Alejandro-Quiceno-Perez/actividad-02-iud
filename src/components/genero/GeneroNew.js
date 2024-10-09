import React, { useState } from "react";
import styleModal from '../../styles/styleModal.css'
import { postGenero } from '../../services/generoService';
import Swal from "sweetalert2";

const GeneroNew = ({ handleOpenModal, listarGeneros }) => {
       const [valoresFrom, setValoresForm] = useState([]);

       const {
              nombre = '',
              estado = 0,
              fechaCreacion = '',
              fechaActualizacion = '',
              descripcion = ''
       } = valoresFrom;

       const handleOnChange = async ({ target }) => {
              const { name, value } = target;
              setValoresForm({
                     ...valoresFrom,
                     [name]: value
              });
       }

       const handleOnSubmit = async (e) => {
              e.preventDefault();
              const genero = {
                     nombre,
                     estado,
                     fechaCreacion,
                     fechaActualizacion,
                     descripcion
              }
              console.log(genero)
              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: "Loading...."
                     });
                     Swal.showLoading();
                     const { data } = await postGenero(genero);
                     console.log(data);
                     handleOpenModal();
                     listarGeneros();
                     Swal.close();
                     listarGeneros();
              } catch (error) {
                     console.log(error.message);
                     Swal.close();
              }
       }

       return (
              <div className="container-modal">
                     <div className="container-header">
                            <div className='sidebar-header d-flex justify-content-between'>
                                   <h3>Nuevo Genero</h3>
                                   <button className='btn btn-danger' onClick={handleOpenModal}>
                                          <i className="bi bi-x"></i>
                                   </button>
                            </div>
                            <form className='form' onSubmit={(e) => handleOnSubmit(e)}>
                                   <div className="mb-3">
                                          <label htmlFor="nombreGenero" className="form-label">Nombre Genero</label>
                                          <input type="text" name='nombre' className="form-control" id="nombreGenero" placeholder='Escribe el nombre aqui' required value={nombre} onChange={e => handleOnChange(e)} />
                                   </div>
                                   <div className="row mb-3">
                                          <div className="col">
                                                 <label htmlFor="estadoGenero" className="form-label">Estado Genero</label>
                                                 <select id="estadoGenero" className="form-select" name="estado" value={estado} onChange={e => handleOnChange(e)}>
                                                        <option value="1">True</option>
                                                        <option value="0">False</option>
                                                 </select>
                                          </div>

                                          <div className="col">
                                                 <label htmlFor="fechaCreacion" className="form-label">Fecha de Creacion</label>
                                                 <input type="Date" name='fechaCreacion' className="form-control" id="fechaCreacion" placeholder='AAAA-MM-DD' required value={fechaCreacion} onChange={e => handleOnChange(e)} />
                                          </div>
                                          <div className="col">
                                                 <label htmlFor="fechaActualizacion" className="form-label">Fecha de actualizacion</label>
                                                 <input type="Date" name='fechaActualizacion' className="form-control" id="fechaActualizacion" placeholder='AAAA-MM-DD' required value={fechaActualizacion} onChange={e => handleOnChange(e)} />
                                          </div>
                                   </div>
                                   <div className="mb-3">
                                          <label htmlFor="descripcionGenero" className="form-label">Descripcion Genero</label>
                                          <textarea type="" name='descripcion' className="form-control" id="descripcionGenero" placeholder='Escribe el nombre aqui' required value={descripcion} onChange={e => handleOnChange(e)} />
                                   </div>
                                   <div className="modal-footer">
                                          <button className="btn btn-success">Guardar</button>
                                   </div>
                            </form>
                     </div>
              </div>
       )
}

export {GeneroNew}