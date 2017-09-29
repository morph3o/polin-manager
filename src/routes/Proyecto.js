import React from 'react';

import { Link, withRouter } from 'react-router';

import {
  Row,
  Col,
  Grid,
  Panel,
  Image,
  Table,
  PanelBody,
  PageHeader,
  PanelContainer,
} from '@sketchpixy/rubix';

@withRouter
export default class Proyecto extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <PageHeader>Proyecto Collahuasi</PageHeader>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Table striped bordered>
                    <tbody>
                    <tr>
                      <td>Nombre</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>Collahuasi</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Mandante</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>CONSORCIO ANGLO AMERICAN</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Cliente</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>MINETRUS</a>
                      </td>
                    </tr>
                    <tr>
                      <td>RUT Mandante</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>11.111.111-1</a>
                      </td>
                    </tr>
                    <tr>
                      <td>RUT Cliente</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>22.222.222-2</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Dirección</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>DIRECCIÓN 1</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Ciudad</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>CALAMA</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Region</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>ANTOFAGASTA</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Dirección Cliente</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>DIRECCIÓN CLIENTE</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Ciudad Cliente</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>IQUIQUE</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Region Cliente</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>TARAPACÁ</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Contacto Cliente</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>NOMBRE CONTACTO</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Teléfono Cliente</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>+56 9 12345678</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Correo Cliente</td>
                      <td>
                        <a href='#' className='xeditable' data-type='text' data-title='Nombre Proyecto'>cliente@gmail.com</a>
                      </td>
                    </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
