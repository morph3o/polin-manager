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
                      <th>Descripción</th>
                      <th>Tipo</th>
                      <th>Ancho</th>
                      <th>Posiciones</th>
                      <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>ESTACION CARGA FIJA OVERLAND 35°, 1800mm, 3 POLINES IGUALES 600mm, TIPO FMC 1095050</td>
                      <td>CARGA</td>
                      <td>1800</td>
                      <td>3</td>
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
                      <td>ESTACION CARGA ANGULO AJUSTABLE OVERLAND, 1800mm, 3 POLINES IGUALES 600mm, TIPO FMC 1095051</td>
                      <td>CARGA</td>
                      <td>1800</td>
                      <td>3</td>
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
                      <td>ESTACION CARGA AUTOALINEANTE OVERLAND, 1800mm, 3 POLINES IGUALES 600mm, TIPO FMC 1095052</td>
                      <td>CARGA</td>
                      <td>1800</td>
                      <td>3</td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
                        {' | '}
                        <span className='icon-fontello-eye-1'/>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>ESTACION RETORNO FIJA 15°, 1800mm, 2 POLINES IGUALES 1000mm, TIPO FMC 1095060</td>
                      <td>RETORNO</td>
                      <td>1800</td>
                      <td>2</td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
                        {' | '}
                        <span className='icon-fontello-eye-1'/>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>BASE POLEA APERTURA 2000mm</td>
                      <td>POLEA</td>
                      <td>2000</td>
                      <td>1</td>
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
