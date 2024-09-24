import React from 'react'
import styleModal from '../../styles/styleModal.css'

const ProductoraNew = ({ handleOpenModal }) => {
       return (
              <div className="container-modal">
                     <div className="container-header">
                            <div className='sidebar-header d-flex justify-content-between'>
                                   <h3>Nueva Productora</h3>
                                   <button className='btn btn-danger' onClick={handleOpenModal}>
                                          <i class="bi bi-x"></i>
                                   </button>
                            </div>
                            <form action="" className='form'>
                                   <div class="mb-3">
                                          <label for="nombreProductora" class="form-label">Nombre Productora</label>
                                          <input type="text" name='nombre' class="form-control" id="nombreProductora" placeholder='Escribe el nombre aqui' required />
                                   </div>
                                   <div class="mb-3">
                                          <label for="sloganProductora" class="form-label">Slogan Productora</label>
                                          <input type="text" name='slogan' class="form-control" id="sloganProductora" placeholder='Escribe el nombre aqui' required />
                                   </div>
                                   <div className="row mb-3">
                                          <div class="col">
                                                 <label for="estadoDirector" class="form-label">Estado Productora</label>
                                                 <select id="estadoDirector" class="form-select">
                                                        <option disabled>selecciona una opcion</option>
                                                        <option value="1">True</option>
                                                        <option value="0">False</option>
                                                 </select>
                                          </div>
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
                                          <label for="descripcionProductora" class="form-label">Descripcion Productora</label>
                                          <textarea type="text" name='descripcion' class="form-control" id="descripcionProductora" placeholder='Escribe el nombre aqui' required />
                                   </div>

                                   <div class="modal-footer">
                                          <button type="button" class="btn btn-success" data-bs-dismiss="modal">Guardar</button>
                                   </div>
                            </form>
                     </div>
              </div>
       )
}

export { ProductoraNew }
