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
              </Switch>
       </Router>
}