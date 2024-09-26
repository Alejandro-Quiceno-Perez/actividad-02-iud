import React from "react";
import styleModal from '../../styles/styleModal.css';

const TipoNew = ({ handleOpenModal }) => {
       <div className="container-modal">
                     <div className="container-header">
                            <div className='sidebar-header d-flex justify-content-between'>
                                   <h3>Nuevo Tipo</h3>
                                   <button className='btn btn-danger' onClick={handleOpenModal}>
                                          <i class="bi bi-x"></i>
                                   </button>
                            </div>
                            <form action="" className='form'>
                                   <div class="mb-3">
                                          <label for="nombreTipo" class="form-label">Tipo</label>
                                          <input type="text" name='nombre' class="form-control" id="nombreTipo" placeholder='Escribe el nombre aqui' required />
                                   </div>
                                   <div className="row mb-3">
                                          <div class="col">
                                                 <label for="fechaCreacion" class="form-label">Fecha de Creacion</label>
                                                 <input type="Date" name='fechaCreacion' class="form-control" id="fechaCreacion" placeholder='AAAA-MM-DD' required />
                                          </div>
                                          <div class="col">
                                                 <label for="fechaActualizacion" class="form-label">Fecha de Actualizacion</label>
                                                 <input type="Date" name='fechaActualizacion' class="form-control" id="fechaActualizacion" placeholder='AAAA-MM-DD' required />
                                          </div>
                                   </div>
                                   <div class="mb-3">
                                          <label for="descripcionProductora" class="form-label">Descripcion Tipo</label>
                                          <textarea type="text" name='descripcion' class="form-control" id="descripcionProductora" placeholder='Escribe el nombre aqui' required />
                                   </div>

                                   <div class="modal-footer">
                                          <button type="button" class="btn btn-success" data-bs-dismiss="modal">Guardar</button>
                                   </div>
                            </form>
                     </div>
              </div>
}

export {
       TipoNew
}