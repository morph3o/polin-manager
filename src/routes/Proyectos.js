import React from 'react';

import { Link, withRouter } from 'react-router';

import {
  Row,
  Col,
  Grid,
  Panel,
  Icon,
  PanelBody,
  PageHeader,
  Table,
  PanelContainer,
} from '@sketchpixy/rubix';

@withRouter
export default class Proyectos extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <PageHeader>Proyectos</PageHeader>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Mandante</th>
                      <th>Cliente</th>
                      <th>RUT Mandante</th>
                      <th>RUT Cliente</th>
                      <th>Dirección</th>
                      <th>Ciudad</th>
                      <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>Collahuasi</td>
                      <td>CONSORCIO ANGLO AMERICAN</td>
                      <td>MINETRUST</td>
                      <td>11.111.111-1</td>
                      <td>22.222.222-2</td>
                      <td>DIRECCION 1</td>
                      <td>SANTIAGO</td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
                        {' | '}
                        <Link to={'/proyecto'}><span className='icon-fontello-eye-1'/></Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>GABY-AREA 100-300</td>
                      <td>CODELCO</td>
                      <td>REVESOL</td>
                      <td>33.333.333-3</td>
                      <td>44.444.444-4</td>
                      <td>DIRECCIÓN 2</td>
                      <td>CALAMA</td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
                        {' | '}
                        <span className='icon-fontello-eye-1'/>
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
