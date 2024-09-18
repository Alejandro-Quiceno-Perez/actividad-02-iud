import React, { useEffect, useState } from 'react';
import { getDirector } from '../../services/directorService';
import { DirectorCard } from './DirectorCard';


export const DirectorView = () => {
       const [directores, setDirectores] = useState([]);
       const listarDirectores = async () => {
              try {
                     const { data } = await getDirector();
                     console.log(data);
                     setDirectores(data);
              } catch (error) {
                     console.log(error.message);
              }
       }


       useEffect(() => {
              listarDirectores();
       }, []);

       return (
              <div className='container'>
                     <div className="mt-2 mb-2 row row-cols-md-4 g-4">
                            {
                                   directores.map((director) => {
                                          return <DirectorCard key={director._id} director={director} />
                                   })
                            }
                     </div>
              </div>
       )
}