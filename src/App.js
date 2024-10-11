import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/ui/Header';
import { DirectorView } from './components/director/DirectorView';
import { GeneroView } from './components/genero/GeneroView';
import { MediaView } from './components/media/MediaView';
import { ProductoraView } from './components/productora/ProductoraView';
import { TipoView } from './components/tipo/TipoView';
import { GeneroUpdate } from './components/genero/GeneroUpdate';
import { DirectorUpdate } from './components/director/DirectorUpdate'
import { ProductoraUpdate } from './components/productora/ProductoraUpdate';
import { TipoUpdate } from './components/tipo/TipoUpdate'



export const App = () => {
       return <Router>
              <Header />
              <Switch>
                     <Route exact path='/director' component={DirectorView} />
                     <Route exact path='/genero' component={GeneroView} />
                     <Route exact path='/media' component={MediaView} />
                     <Route exact path='/productora' component={ProductoraView} />
                     <Route exact path='/tipo' component={TipoView} />
                     <Route exact path='/genero/put/:generoId' component={GeneroUpdate} />
                     <Route exact path='/director/put/:directorId' component={DirectorUpdate} />
                     <Route exact path='/productora/put/:productoraId' component={ProductoraUpdate} />
                     <Route exact path='/tipo/put/:tipoId' component={TipoUpdate} />
              </Switch>
       </Router>
}