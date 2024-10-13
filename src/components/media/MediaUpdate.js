import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMediaById, putMedia } from '../../services/mediaService'
import { getTipos } from '../../services/tipoService';
import { getProductoras } from '../../services/productoraService';
import { getDirectors } from '../../services/directorService';
import { getGeneros } from '../../services/generoService';
import Swal from 'sweetalert2';

export const MediaUpdate = () => {
       const urlMedia = '/media'
       const { mediaId = '' } = useParams();
       const [media, setMedia] = useState();
       const [ tipos, setTipos] = useState([]);
       const [productoras, setProductoras] = useState([]);
       const [directores, setDirectores] = useState([]);
       const [generos, setGeneros] = useState([]);
       const [valoresForm, setValoresForm] = useState([]);
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

       const {
              titulo = '',
              descripcion = '',
              estado = '',
              fechaCreacion = '',
              fechaActualizacion = '',
              tipo = '',
              productora = '',
              directorPrincipal = '',
              generoPrincipal = '',
              url = '',
              serial = '',
              sinopsis = '',
              imagenPortada = '',
              añoEstreno = ''
       } = valoresForm;

       const getMedia = async () => {
              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: 'Loading....'
                     });
                     Swal.showLoading();
                     const { data } = await getMediaById(mediaId);
                     console.log(data);
                     setMedia(data);
                     Swal.close();
              } catch (error) {
                     console.log(error.message);
                     Swal.close();
              }
       }

       useEffect(() => {
              getMedia();
       }, [mediaId]);

       useEffect(() => {
              if (media) {
                     setValoresForm({
                            titulo: media.titulo,
                            descripcion: media.descripcion,
                            estado: media.estado,
                            fechaCreacion: media.fechaCreacion,
                            fechaActualizacion: media.fechaActualizacion,
                            tipo: media.tipo,
                            productora: media.productora,
                            directorPrincipal: media.directorPrincipal,
                            generoPrincipal: media.generoPrincipal,
                            url: media.url,
                            serial: media.serial,
                            sinopsis: media.sinopsis,
                            imagenPortada: media.imagenPortada,
                            añoEstreno: media.añoEstreno
                     })
              }
       }, [media]);

       const handleOnChange = ({ target }) => {
              const { name, value } = target;
              setValoresForm({
                     ...valoresForm,
                     [name]: value
              });
       }


       const handleOnSubmit = async (e) => {
              e.preventDefault();
              const media = {
                     titulo,
                     descripcion,
                     estado,
                     fechaCreacion,
                     fechaActualizacion,
                     tipo: {
                            _id: tipo
                     },
                     productora:{
                            _id: productora
                     },
                     directorPrincipal: {
                            _id: directorPrincipal
                     },
                     generoPrincipal: {
                            _id: generoPrincipal
                     },
                     url,
                     serial,
                     sinopsis,
                     imagenPortada,
                     añoEstreno
              }
              console.log(media);
              try {
                     Swal.fire({
                            allowOutsideClick: false,
                            text: 'Loading....'
                     });
                     Swal.showLoading();
                     const { data } = await putMedia(mediaId, media);
                     console.log(data);
                     Swal.close();
                     Swal.fire({
                            icon: 'success',
                            title: 'Exito',
                            text: 'Media actualizada correctamente'
                     });
              } catch (error) {
                     console.log(error.message);
                     Swal.close();
                     let mensaje;
                     if (error && error.response && error.response.data) {
                            mensaje = error.response.data.message;
                     } else {
                            mensaje = "Ocurrio un error, intente nuevamente";
                     }
                     Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: mensaje
                     });
              }
       }

       return (
              <div className='container-modal'>
                     <div className="container-header">
                            <div className='sidebar-header d-flex justify-content-between'>
                                   <h3>Nuevo recurso</h3>
                                   <button className='btn btn-danger' onClick={() => { window.location.href = urlMedia; }}>
                                          <i className="bi bi-x"></i>
                                   </button>
                            </div>
                            <form onSubmit={(e) => handleOnSubmit(e)}>
                                   <div className="mb-3">
                                          <label htmlFor="titulo" className="form-label">Titulo</label>
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
                                                 <input type="number" name='añoEstreno' className="form-control" id="añoEstreno" placeholder='Escribe el añoEstreno aqui' required value={añoEstreno} onChange={e => handleOnChange(e)} />
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
                                          <button onClick={() => { window.location.href = urlMedia; }} className="btn btn-success" >Guardar</button>
                                   </div>
                            </form>
                     </div>
              </div>
       )
}