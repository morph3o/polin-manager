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
export default class Estaciones extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <PageHeader>Estaciones</PageHeader>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>Tipo</th>
                      <th>Modelo</th>
                      <th># Posiciones</th>
                      <th>Proveedor</th>
                      <th># Polines Compatibles</th>
                      <th># Correas compatibles</th>
                      <th>Coordenadas</th>
                      <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>T1</td>
                      <td>MODELO-T1</td>
                      <td>1</td>
                      <td>PROVEEDOR</td>
                      <td>1</td>
                      <td>1</td>
                      <td>AREA 1</td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
                        {' | '}
                        <span className='icon-fontello-eye-1'/>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>T2</td>
                      <td>MODELO-T2</td>
                      <td>6</td>
                      <td>PROVEEDOR</td>
                      <td>6</td>
                      <td>1</td>
                      <td>AREA 1</td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
                        {' | '}
                        <span className='icon-fontello-eye-1'/>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>T3</td>
                      <td>MODELO-T3</td>
                      <td>5</td>
                      <td>PROVEEDOR</td>
                      <td>5</td>
                      <td>1</td>
                      <td>AREA 1</td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
                        {' | '}
                        <Link to='/estaciones/3'><span className='icon-fontello-eye-1'/></Link>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>T4</td>
                      <td>MODELO-T4</td>
                      <td>1</td>
                      <td>PROVEEDOR</td>
                      <td>1</td>
                      <td>1</td>
                      <td>AREA 1</td>
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
