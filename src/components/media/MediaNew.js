import React, { useState, useEffect } from 'react'
import { getDirectors } from '../../services/directorService'
import { getGeneros } from '../../services/generoService'
import { getProductoras } from '../../services/productoraService'
import { getTipos } from '../../services/tipoService'
import { postMedia } from '../../services/mediaService'
import Swal from 'sweetalert2';

export const MediaNew = ({ handleOpenModal, listMedias }) => {
       const [directores, setDirectores] = useState([]);
       const [generos, setGeneros] = useState([]);
       const [productoras, setProductoras] = useState([]);
       const [valoresForm, setValoresForm] = useState([]);
       const [tipos, setTipos] = useState([]);
       const {
              titulo = '',
              serial = '',
              sinopsis = '',
              url = '',
              fechaActualizacion = '',
              fechaCreacion = '',
              imagenPortada = '',
              añoEstreno = '',
              generoPrincipal = '',
              directorPrincipal = '',
              productora = '',
              tipo = ''
       } = valoresForm;

       const listarGeneros = async () => {
              try {
                     const { data } = await getGeneros();
                     setGeneros(data);
              } catch (error) {
                     console.log(error.message);
              }
       }

       useEffect(() => {
              listarGeneros();
       }, []);

       const listarDirectores = async () => {
              try {
                     const { data } = await getDirectors();
                     setDirectores(data);
              } catch (error) {
                     console.log(error.message);
              }
       }

       useEffect(() => {
              listarDirectores();
       }, []);

       const listarProductoras = async () => {
              try {
                     const { data } = await getProductoras();
                     setProductoras(data);
              } catch (error) {
                     console.log(error.message);
              }
       }

       useEffect(() => {
              listarProductoras();
       }, []);

       const listTipos = async () => {
              try {
                     const { data } = await getTipos();
                     setTipos(data);
              } catch (error) {
                     console.log(error.message);
              }
       }

       useEffect(() => {
              listTipos();
       }, []);

       const handleOnChange = ({ target }) => {
              const { name, value } = target;
              setValoresForm({ ...valoresForm, [name]: value });
       }

       const handleOnSubmit = async (e) => {
              e.preventDefault();
              const media = {
                     titulo,
                     serial,
                     sinopsis,
                     url,
                     imagenPortada,
                     añoEstreno,
                     generoPrincipal: {
                            _id: generoPrincipal
                     },
                     directorPrincipal: {
                            _id: directorPrincipal
                     },
                     productora: {
                            _id: productora
                     },
                     tipo: {
                            _id: tipo
                     }
              }
              console.log(media);

              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: 'Loading...'
                     });
                     Swal.showLoading();
                     const { data } = await postMedia(media);
                     handleOpenModal();
                     listMedias();
                     Swal.close();
              } catch (error) {
                     console.log(error);
                     Swal.close();
              }
       }

       return (
              <div className='container-modal'>
                     <div className="container-header">
                            <div className='sidebar-header d-flex justify-content-between'>
                                   <h3>Nuevo recurso</h3>

                                   <button className='btn btn-danger' onClick={handleOpenModal}>
                                          <i className="bi bi-x"></i>
                                   </button>
                            </div>
                            <form onSubmit={(e) => handleOnSubmit(e)}>
                                   <div className="mb-3">
                                          <label htmlFor="titulo" className="form-label">Nombre</label>
                                          <input type="text" name='titulo' className="form-control" id="titulo" placeholder='Escribe el nombre aqui' required value={titulo} onChange={e => handleOnChange(e)} />
                                   </div>
                                   <div className="row mb-3">
                                          <div className="col">
                                                 <label htmlFor="serial" className="form-label">serial</label>
                                                 <input type="text" name='serial' className="form-control" id="serial" placeholder='Escribe el serial aqui' required value={serial} onChange={e => handleOnChange(e)} />
                                          </div>
                                          <div className="col">
                                                 <label htmlFor="sinopsis" className="form-label">sinopsis</label>
                                                 <input type="text" name='sinopsis' className="form-control" id="sinopsis" placeholder='Escribe el sinopsis aqui' required value={sinopsis} onChange={e => handleOnChange(e)} />
                                          </div>
                                   </div>

                                   <div className="row mb-3">
                                          <div className="col">
                                                 <label htmlFor="url" className="form-label">url</label>
                                                 <input type="text" name='url' className="form-control" id="url" placeholder='Escribe el url aqui' required value={url} onChange={e => handleOnChange(e)} />
                                          </div>
                                          <div className="col">
                                                 <label htmlFor="imagenPortada" className="form-label">Imagen Portada</label>
                                                 <input type="text" name='imagenPortada' className="form-control" id="imagenPortada" placeholder='Escribe el imagenPortada aqui' required value={imagenPortada} onChange={e => handleOnChange(e)} />
                                          </div>
                                   </div>
                                   <div className="row mb-3">
                                          <div className="col">
                                                 <label htmlFor="añoEstreno" className="form-label">añoEstreno</label>
                                                 <input type="text" name='añoEstreno' className="form-control" id="añoEstreno" placeholder='Escribe el añoEstreno aqui' required value={añoEstreno} onChange={e => handleOnChange(e)} />
                                          </div>
                                          <div className="col">
                                                 <label htmlFor="fechaCreacion" className="form-label">Fecha Creacion</label>
                                                 <input type="Date" name='fechaCreacion' className="form-control" id="fechaCreacion" placeholder='Escribe el fechaCreacion aqui' required value={fechaCreacion} onChange={e => handleOnChange(e)} />
                                          </div>
                                          <div className="col">
                                                 <label htmlFor="fechaActualizacion" className="form-label">Fecha Actualizacion</label>
                                                 <input type="Date" name='fechaActualizacion' className="form-control" id="fechaActualizacion" placeholder='Escribe el fechaActualizacion aqui' required value={fechaActualizacion} onChange={e => handleOnChange(e)} />
                                          </div>
                                   </div>
                                   <div className="row mb-3">
                                          <div className="col">
                                                 <label className="form-label">Genero </label>
                                                 <select className='form-select'
                                                        required
                                                        name='generoPrincipal'
                                                        value={generoPrincipal}
                                                        onChange={e => handleOnChange(e)}>
                                                        <option value="">--SELECCIONE--</option>
                                                        {
                                                               generos.map(({ _id, nombre }) => {
                                                                      return <option key={_id} value={_id}>{nombre}</option>
                                                               })
                                                        }
                                                 </select>
                                          </div>
                                          <div className="col">
                                                 <label className="form-label">Director </label>

                                                 <select className='form-select'
                                                        required
                                                        name='directorPrincipal'
                                                        value={directorPrincipal}
                                                        onChange={e => handleOnChange(e)}>
                                                        <option value="">--SELECCIONE--</option>
                                                        {
                                                               directores.map(({ _id, nombres }) => {
                                                                      return <option key={_id} value={_id}>{nombres}</option>
                                                               })
                                                        }
                                                 </select>
                                          </div>
                                          <div className="col">
                                                 <label className="form-label">Productora </label>
                                                 <select className='form-select'
                                                        required
                                                        name='productora'
                                                        value={productora}
                                                        onChange={e => handleOnChange(e)}>
                                                        <option value="">--SELECCIONE--</option>
                                                        {
                                                               productoras.map(({ _id, nombre }) => {
                                                                      return <option key={_id} value={_id}>{nombre}</option>
                                                               })
                                                        }
                                                 </select>
                                          </div>
                                          <div className="col">
                                                 <label className="form-label">Tipo </label>
                                                 <select className='form-select'
                                                        required
                                                        name='tipo'
                                                        value={tipo}
                                                        onChange={e => handleOnChange(e)}>
                                                        <option value="">--SELECCIONE--</option>
                                                        {
                                                               tipos.map(({ _id, nombre }) => {
                                                                      return <option key={_id} value={_id}>{nombre}</option>
                                                               })
                                                        }
                                                 </select>
                                          </div>
                                   </div>
                                   <div className="modal-footer">
                                          <button className='btn btn-success'>Guardar</button>
                                   </div>
                            </form>
                     </div>
              </div>
       )
}
