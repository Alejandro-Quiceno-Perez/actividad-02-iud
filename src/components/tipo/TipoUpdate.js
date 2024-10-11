import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getTipoById, putTipo } from '../../services/tipoService'
import Swal from 'sweetalert2'

export const TipoUpdate = () => {
       const url = '/tipo';
       const { tipoId = '' } = useParams();
       const [tipo, setTipo] = useState();
       const [valoresFrom, setValoresForm] = useState([]);

       const {
              nombre = '',
              fechaCreacion = '',
              fechaActualizacion = '',
              descripcion = ''
       } = valoresFrom;

       const getTipo = async () => {
              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: 'Loading....'
                     });
                     Swal.showLoading();
                     const { data } = await getTipoById(tipoId);
                     console.log(data);
                     setTipo(data);
                     Swal.close();
              } catch (error) {
                     console.log(error.message);
                     Swal.close();
              }
       }

       useEffect(() => {
              getTipo();
       }, [tipoId]);

       useEffect(() => {
              if (tipo) {
                     setValoresForm({
                            nombre: tipo.nombre,
                            fechaCreacion: tipo.fechaCreacion,
                            fechaActualizacion: tipo.fechaActualizacion,
                            descripcion: tipo.descripcion
                     })
              }
       }, [tipo]);

       const handleOnChange = ({ target }) => {
              const { name, value } = target;
              setValoresForm({
                     ...valoresFrom,
                     [name]: value
              });
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
                            text: 'Loading....'
                     });
                     const { data } = await putTipo(tipoId, tipo);
                     console.log(data);
                     Swal.close();
              } catch (error) {
                     console.log(error.message);
                     Swal.close();
                     let mensaje;
                     if (error && error.response && error.response.data) {
                            mensaje = error.response.data;
                     } else {
                            mensaje = 'Ocurrio un error, intente nuevamente';
                     }
                     Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: mensaje
                     });
              }
       }





       return (
              <div className="container-modal" >
                     <div className="container-header">
                            <div className='sidebar-header d-flex justify-content-between'>
                                   <h3>Actualizar Tipo</h3>
                                   <button className='btn btn-danger' onClick={() => {window.location.href = url }}>
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
                                                 <input type="Date" name='fechaCreacion' className="form-control" id="fechaCreacion" placeholder='AAAA-MM-DD' required value={fechaCreacion} onChange={e => handleOnChange(e)} />
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
                                          <button onClick={() => {window.location.href = url }} className="btn btn-success">Guardar</button>
                                   </div>
                            </form>
                     </div>
              </div>
       )
}


