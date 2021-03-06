import React from 'react';

import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider
} from '@sketchpixy/rubix';

import { Link, withRouter } from 'react-router';

@withRouter
class ApplicationSidebar extends React.Component {
  handleChange(e) {
    this._nav.search(e.target.value);
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <FormControl type='text' placeholder='Search...' onChange={::this.handleChange} className='sidebar-search' style={{border: 'none', background: 'none', margin: '10px 0 0 0', borderBottom: '1px solid #666', color: 'white'}} />
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}} ref={(c) => this._nav = c}>

                  { /** Pages Section */ }
                  <div className='sidebar-header'>Menu</div>

                  <SidebarNavItem glyph='icon-fontello-gauge' name='Dashboard' href='/' />
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Proyectos'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-fontello-list-1' name='Ver Proyectos' href='/proyectos' />
                      <SidebarNavItem glyph='icon-fontello-plus-squared-1' name='Ingresar Proyecto' href='/ingresar-proyecto' />
                      <SidebarNavItem glyph='icon-fontello-plus-squared-1' name='Ingresar Correa Proyecto' href='/ingresar-correa-proyecto' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Estaciones'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-fontello-list-1' name='Ver Estaciones' href='/estaciones' />
                      <SidebarNavItem glyph='icon-fontello-plus-squared-1' name='Ingresar Estación' href='/ingresar-estacion' />
                      <SidebarNavItem glyph='icon-fontello-plus-squared-1' name='Ingresar Proveedor' href='/ingresar-estacion-proveedor' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Polines'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-fontello-list-1' name='Ver Polines' href='/polines' />
                      <SidebarNavItem glyph='icon-fontello-plus-squared-1' name='Ingresar Polin' href='/ingresar-polin' />
                      <SidebarNavItem glyph='icon-fontello-plus-squared-1' name='Ingresar Proveedor' href='/ingresar-polin-proveedor' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Correas'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-fontello-list-1' name='Ver Correas' href='/correas' />
                      <SidebarNavItem glyph='icon-fontello-plus-squared-1' name='Ingresar Correa' href='/ingresar-correa' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Acciones'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-fontello-gauge' name='Ingresar Usuario' href='/ingresar-usuario' />
                      <SidebarNavItem glyph='icon-fontello-gauge' name='Cambiar Polin' href='' />
                      <SidebarNavItem glyph='icon-fontello-gauge' name='Cambiar Estacion' href='' />
                      <SidebarNavItem glyph='icon-fontello-gauge' name='Inspeccionar Polin' href='' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Reportes'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-fontello-gauge' name='Cambios'>
                        <SidebarNav>
                          <SidebarNavItem glyph='icon-fontello-gauge' name='Por correa' href='' />
                          <SidebarNavItem glyph='icon-fontello-gauge' name='Por posición' href='' />
                          <SidebarNavItem glyph='icon-fontello-gauge' name='Por tipo de polín' href='' />
                        </SidebarNav>
                      </SidebarNavItem>
                      <SidebarNavItem glyph='icon-fontello-gauge' name='Duración polines por área' href='' />
                    </SidebarNav>
                  </SidebarNavItem>
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class DummySidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DUMMY SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
}

@withRouter
export default class SidebarContainer extends React.Component {
  render() {
    return (
      <div id='sidebar'>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/app/avatars/avatar0.png' width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>Anna Sanchez</div>
                <div>
                  <Progress id='demo-progress' value={30} color='#ffffff'/>
                  <a href='#'>
                    <Icon id='demo-icon' bundle='fontello' glyph='lock-5' />
                  </a>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <SidebarControls>
          <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />
          <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1} />
          <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2} />
          <SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3} />
          <SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4} />
        </SidebarControls>
        <div id='sidebar-container'>
          <Sidebar sidebar={0}>
            <ApplicationSidebar />
          </Sidebar>
          <Sidebar sidebar={1}>
            <DummySidebar />
          </Sidebar>
          <Sidebar sidebar={2}>
            <DummySidebar />
          </Sidebar>
          <Sidebar sidebar={3}>
            <DummySidebar />
          </Sidebar>
          <Sidebar sidebar={4}>
            <DummySidebar />
          </Sidebar>
        </div>
      </div>
    );
  }
}
