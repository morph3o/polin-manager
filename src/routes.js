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
import Home2 from './routes/Home2';
import Polines from './routes/Polines';
import Correas from './routes/Correas';
import Estaciones from './routes/Estaciones';
import Estacion from './routes/Estacion';

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
    <Route path='/home2' component={Home2} />
    <Route path='/polines' component={Polines} />
    <Route path='/correas' component={Correas} />
    <Route path='/estaciones' component={Estaciones} />
    <Route path='/estaciones/3' component={Estacion} />
  </Route>
);

export default routes;
