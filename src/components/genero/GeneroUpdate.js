import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getGeneroById, putGenero } from '../../services/generoService';
import Swal from 'sweetalert2';

export const GeneroUpdate = () => {
       const url = '/genero';
       const { generoId = '' } = useParams();
       const [genero, setGenero] = useState();
       const [valoresForm, setValoresForm] = useState([]);
       const {
              nombre = '',
              estado = '',
              fechaCreacion = '',
              fechaActualizacion = '',
              descripcion = ''
       } = valoresForm;

       const getGenero = async () => {
              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: 'Loading....'
                     });
                     Swal.showLoading();
                     const { data } = await getGeneroById(generoId);
                     console.log(data);
                     setGenero(data);
                     Swal.close();
              } catch (error) {
                     console.log(error.message);
                     Swal.close();
              }
       }

       useEffect(() => {
              getGenero();
       }, [generoId])

       useEffect(() => {
              if (genero) {
                     setValoresForm({
                            nombre: genero.nombre,
                            estado: genero.estado,
                            fechaCreacion: genero.fechaCreacion,
                            fechaActualizacion: genero.fechaActualizacion,
                            descripcion: genero.descripcion
                     })
              }
       }, [genero]);

       const handleOnChange = ({ target }) => {
              const { name, value } = target;
              setValoresForm({
                     ...valoresForm,
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
              console.log(genero);

              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: 'Loading....'
                     });
                     Swal.showLoading();
                     const { data } = await putGenero(generoId, genero);
                     console.log(data);
                     Swal.close();
              } catch (error) {
                     console.log(error.message);
                     Swal.close();
                     let mensaje;
                     if (error && error.response && error.response.data) {
                            mensaje = error.response.data;
                     } else {
                            mensaje = "Ocurrio un Error, Intente de nuevo!";
                     }
                     Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: mensaje
                     });
              }
       }

       return (
              <div className="container-modal">
                     <div className="container-header">
                            <div className='sidebar-header d-flex justify-content-between'>
                                   <h3>Actualizando Genero</h3>
                            </div>
                            <form className='form' onSubmit={(e) => handleOnSubmit(e)}>
                                   <div className="mb-3">
                                          <label htmlFor="nombreGenero" className="form-label">Nombre Genero</label>
                                          <input type="text" name='nombre' className="form-control" id="nombreGenero" required value={nombre} onChange={e => handleOnChange(e)} />
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
                                                 <input type="Date" name='fechaCreacion' className="form-control" required value={fechaCreacion} onChange={e => handleOnChange(e)} />
                                          </div>
                                          <div className="col">
                                                 <label htmlFor="fechaActualizacion" className="form-label">Fecha de actualizacion</label>
                                                 <input type="Date" name='fechaActualizacion' className="form-control" value={fechaActualizacion} onChange={e => handleOnChange(e)} />
                                          </div>
                                   </div>
                                   <div className="mb-3">
                                          <label htmlFor="descripcionGenero" className="form-label">Descripcion Genero</label>
                                          <textarea type="" name='descripcion' className="form-control" id="descripcionGenero" placeholder='Escribe el nombre aqui' required value={descripcion} onChange={e => handleOnChange(e)} />
                                   </div>
                                   <div className="modal-footer">
                                          <button onClick={() => {window.location.href = url;}} className="btn btn-success" >Guardar</button>
                                   </div>
                            </form>
                     </div>
              </div>
       )
}