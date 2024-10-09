import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDirectorById, putDirector } from '../../services/directorService';
import Swal from 'sweetalert2';

export const DirectorUpdate = () => {
       const url = '/director';
       const { directorId = '' } = useParams();
       const [director, setDirector] = useState();
       const [valoresForm, setValoresForm] = useState([]);

       const {
              nombres = '',
              estado = '',
              fechaCreacion = '',
              fechaActualizacion = ''
       } = valoresForm;


       const getDirector = async () => {
              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: 'Loading....'
                     });
                     Swal.showLoading();
                     const { data } = await getDirectorById(directorId);
                     console.log(data);
                     setDirector(data);
                     Swal.close();
              } catch (error) {
                     console.log(error.message);
                     Swal.close();
              }
       }

       useEffect(() => {
              getDirector();
       }, [directorId]);

       useEffect(() => {
              if (director) {
                     setValoresForm({
                            nombres: director.nombres,
                            estado: director.estado,
                            fechaCreacion: director.fechaCreacion,
                            fechaActualizacion: director.fechaActualizacion
                     })
              }
       }, [director]);

       const handleOnChange = ({ target }) => {
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
              console.log(director);
              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: 'Loading....'
                     });
                     Swal.showLoading();
                     const { data } = await putDirector(directorId, director)
                     console.log(data);
                     Swal.close();
              } catch (error) {
                     console.log(error.message);
                     Swal.close();
                     let mensaje;
                     if (error && error.response && error.response.data) {
                            mensaje = error.response.data;
                     } else {
                            mensaje = "Ocurrio un error, intente nuevamente";
                     }
                     Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: mensaje
                     })
              }
              return (
                     <div className="container-modal">
                            <div className="container-header">
                                   <div className='sidebar-header d-flex justify-content-between'>
                                          <h3>Actualizar Director</h3>
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
                                                 <input type="Date" name='fechaCreacion' className="form-control" id="fechaCreacion" placeholder='AAAA-MM-DD' required value={fechaCreacion} onChange={e => handleOnChange(e)} />
                                          </div>
                                          <div className="mb-3">
                                                 <label htmlFor="fechaActualizacion" className="form-label">Fecha de Actualizacion</label>
                                                 <input type="Date" name='fechaActualizacion' className="form-control" id="fechaActualizacion" placeholder='AAAA-MM-DD' required value={fechaActualizacion} onChange={e => handleOnChange(e)} />
                                          </div>
                                          <div className="modal-footer">
                                                 <button onClick={() => {window.location.href = url;}} className="btn btn-success" >Guardar</button>
                                          </div>
                                   </form>
                            </div>
                     </div>
              )
       }

}