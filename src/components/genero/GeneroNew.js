import React from "react";
import styleModal from '../../styles/styleModal.css'

export const GeneroNew = ({ handleOpenModal }) => {
       return (
              <div className="container-modal">
                     <div className="container-header">
                            <div className='sidebar-header d-flex justify-content-between'>
                                   <h3>Nuevo Genero</h3>
                                   <button className='btn btn-danger' onClick={handleOpenModal}>
                                          <i class="bi bi-x"></i>
                                   </button>
                            </div>
                            <form action="" className='form'>
                                   <div class="mb-3">
                                          <label for="nombreGenero" class="form-label">Nombre Genero</label>
                                          <input type="text" name='nombre' class="form-control" id="nombreGenero" placeholder='Escribe el nombre aqui' required />
                                   </div>
                                   <div className="row mb-3">
                                          <div class="col">
                                                 <label for="estadoGenero" class="form-label">Estado Genero</label>
                                                 <select id="estadoGenero" class="form-select">
                                                        <option value="1">True</option>
                                                        <option value="0">False</option>
                                                 </select>
                                          </div>

                                          <div class="col">
                                                 <label for="fechaCreacion" class="form-label">Fecha de Creacion</label>
                                                 <input type="Date" name='fechaCreacion' class="form-control" id="fechaCreacion" placeholder='AAAA-MM-DD' required />
                                          </div>
                                          <div class="col">
                                                 <label for="fechaActualizacion" class="form-label">Fecha de actualizacion</label>
                                                 <input type="Date" name='fechaActualizacion' class="form-control" id="fechaActualizacion" placeholder='AAAA-MM-DD' required />
                                          </div>
                                   </div>
                                   <div class="mb-3">
                                          <label for="descripcionGenero" class="form-label">Descripcion Genero</label>
                                          <textarea type="" name='descripcion' class="form-control" id="descripcionGenero" placeholder='Escribe el nombre aqui' required />
                                   </div>
                                   <div class="modal-footer">
                                          <button type="button" class="btn btn-success" data-bs-dismiss="modal">Guardar</button>
                                   </div>
                            </form>
                     </div>
              </div>
       )
}