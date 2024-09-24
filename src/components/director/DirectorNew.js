import React from 'react'
import styleModal from '../../styles/styleModal.css'

export const DirectorNew = ({ handleOpenModal }) => {
       return (
              <div className="container-modal">
                     <div className="container-header">
                            <div className='sidebar-header d-flex justify-content-between'>
                                   <h3>Nuevo Director</h3>
                                   <button className='btn btn-danger' onClick={handleOpenModal}>
                                          <i class="bi bi-x"></i>
                                   </button>
                            </div>
                            <form action="" className='form'>
                                   <div class="mb-3">
                                          <label for="nombreDirector" class="form-label">Nombre Director</label>
                                          <input type="text" name='nombres' class="form-control" id="nombreDirector" placeholder='Escribe el nombre aqui' required />
                                   </div>
                                   <div class="mb-3">
                                          <label for="estadoDirector" class="form-label">Estado Director</label>
                                          <select id="estadoDirector" class="form-select">
                                                 <option disabled>selecciona una opcion</option>
                                                 <option value="1">True</option>
                                                 <option value="0">False</option>
                                          </select>
                                   </div>
                                   <div class="mb-3">
                                          <label for="fechaCreacion" class="form-label">Fecha de Creacion</label>
                                          <input type="Date" name='fechaCreacion' class="form-control" id="fechaCreacion" placeholder='AAAA-MM-DD' required />
                                   </div>
                                   <div class="mb-3">
                                          <label for="fechaActualizacion" class="form-label">Fecha de Actualizacion</label>
                                          <input type="Date" name='fechaActualizacion' class="form-control" id="fechaActualizacion" placeholder='AAAA-MM-DD' required />
                                   </div>
                                   <div class="modal-footer">
                                          <button type="button" class="btn btn-success" data-bs-dismiss="modal">Guardar</button>
                                   </div>
                            </form>
                     </div>
              </div>
       )
}
