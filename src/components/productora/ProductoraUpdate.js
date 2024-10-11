import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductoraById, putProductora } from '../../services/productoraService'
import Swal from 'sweetalert2'

export const ProductoraUpdate = () => {
       const url = '/productora';
       const { productoraId = '' } = useParams();
       const [productora, setProductora] = useState();
       const [valoresForm, setValoresForm] = useState([]);
       const {
              nombre = '',
              slogan = '',
              descripcion = '',
              estado = '',
              fechaCreacion = '',
              fechaActualizacion = ''
       } = valoresForm;

       const getProductora = async () => {
              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: 'Loading....'
                     });
                     Swal.showLoading();
                     const { data } = await getProductoraById(productoraId);
                     console.log(data);
                     setProductora(data);
                     Swal.close();
              } catch (error) {
                     console.log(error.message);
                     Swal.close();
              }
       }

       useEffect(() => {
              getProductora();
       }, [productoraId]);

       useEffect(() => {
              if (productora) {
                     setValoresForm({
                            nombre: productora.nombre,
                            slogan: productora.slogan,
                            descripcion: productora.descripcion,
                            estado: productora.estado,
                            fechaCreacion: productora.fechaCreacion,
                            fechaActualizacion: productora.fechaActualizacion
                     })
              }
       }, [productora]);

       const handleOnChange = ({ target }) => {
              const { name, value } = target;
              setValoresForm({
                     ...valoresForm,
                     [name]: value
              });
       }

       const handleOnSubmit = async (e) => {
              e.preventDefault();
              const productora = {
                     nombre,
                     slogan,
                     descripcion,
                     estado,
                     fechaCreacion,
                     fechaActualizacion
              }
              console.log(productora);

              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: "Loading...."
                     });
                     Swal.showLoading();
                     const { data } = await putProductora(productoraId, productora);
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
                                   <h3>Actualizar Productora</h3>
                                   <button className='btn btn-danger' onClick={() => { window.location.href = url; }}>
                                          <i className="bi bi-x"></i>
                                   </button>
                            </div>
                            <form className='form' onSubmit={(e) => handleOnSubmit(e)}>
                                   <div className="mb-3">
                                          <label htmlFor="nombreProductora" className="form-label">Nombre Productora</label>
                                          <input type="text" name='nombre' className="form-control" id="nombreProductora" placeholder='Escribe el nombre aqui' required value={nombre} onChange={e => handleOnChange(e)} />
                                   </div>
                                   <div className="mb-3">
                                          <label htmlFor="sloganProductora" className="form-label">Slogan Productora</label>
                                          <input type="text" name='slogan' className="form-control" id="sloganProductora" placeholder='Escribe el nombre aqui' required value={slogan} onChange={e => handleOnChange(e)} />
                                   </div>
                                   <div className="row mb-3">
                                          <div className="col">
                                                 <label htmlFor="estadoDirector" className="form-label">Estado Productora</label>
                                                 <select id="estadoDirector" className="form-select" name='estado' value={estado} onChange={e => handleOnChange(e)}>
                                                        <option value="1">True</option>
                                                        <option value="0">False</option>
                                                 </select>
                                          </div>
                                          <div className="col">
                                                 <label htmlFor="fechaCreacion" className="form-label">Fecha de Creacion</label>
                                                 <input type="Date" name='fechaCreacion' className="form-control" id="fechaCreacion" required value={fechaCreacion} onChange={e => handleOnChange(e)} />
                                          </div>
                                          <div className="col">
                                                 <label htmlFor="fechaActualizacion" className="form-label">Fecha de Actualizacion</label>
                                                 <input type="Date" name='fechaActualizacion' className="form-control" id="fechaActualizacion" required value={fechaActualizacion} onChange={e => handleOnChange(e)} />
                                          </div>
                                   </div>
                                   <div className="mb-3">
                                          <label htmlFor="descripcionProductora" className="form-label">Descripcion Productora</label>
                                          <textarea type="text" name='descripcion' className="form-control" id="descripcionProductora" placeholder='Escribe el nombre aqui' required value={descripcion} onChange={e => handleOnChange(e)} />
                                   </div>

                                   <div className="modal-footer">
                                          <button onClick={() => {window.location.href = url;}} className="btn btn-success" >Guardar</button>
                                   </div>
                            </form>
                     </div>
              </div>
       )
}


