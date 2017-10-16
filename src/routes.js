import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './common/sidebar';
import Header from './common/header';
import Footer from './common/footer';

/* Pages */

import Home from './routes/Home';
import Proyecto from './routes/Proyecto'
import Proyectos from './routes/Proyectos';
import Polines from './routes/Polines';
import Correas from './routes/Correas';
import Estaciones from './routes/Estaciones';
import Estacion from './routes/Estacion';
import IngresarPolin from './routes/IngresarPolin';
import IngresarUsuario from './routes/IngresarUsuario';
import IngresarPolinProveedor from './routes/IngresarPolinProveedor';

class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/proyectos' component={Proyectos} />
    <Route path='/proyecto' component={Proyecto} />
    <Route path='/polines' component={Polines} />
    <Route path='/ingresar-polin' component={IngresarPolin} />
    <Route path='/correas' component={Correas} />
    <Route path='/estaciones' component={Estaciones} />
    <Route path='/estacion' component={Estacion} />
    <Route path='/ingresar-usuario' component={IngresarUsuario} />
    <Route path='/ingresar-polin-proveedor' component={IngresarPolinProveedor} />
  </Route>
);

export default routes;
