import React from 'react';

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

export default class Correas extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <PageHeader>Correas</PageHeader>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>Descripción</th>
                      <th>ID Proyecto</th>
                      <th>Nombre Correa</th>
                      <th>TAG</th>
                      <th>Total Posiciones</th>
                      <th>Total Poleas</th>
                      <th>Ancho Correa</th>
                      <th>Coordenadas Cabeza</th>
                      <th>Coordenadas Cola</th>
                      <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>CORREA ALIMENTACION SAG 1</td>
                      <td>1</td>
                      <td>CV-101</td>
                      <td>CH-1200-20-CV-101</td>
                      <td>200</td>
                      <td>4</td>
                      <td>1800</td>
                      <td></td>
                      <td></td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>CORREA ALIMENTACION SAG 2</td>
                      <td>1</td>
                      <td>CV-102</td>
                      <td>CH-1200-20-CV-102</td>
                      <td>200</td>
                      <td>4</td>
                      <td>1800</td>
                      <td></td>
                      <td></td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>CORREA DESCARGA SAG 1</td>
                      <td>1</td>
                      <td>CV-201</td>
                      <td>CH-2200-20-CV-201</td>
                      <td>600</td>
                      <td>5</td>
                      <td>1600</td>
                      <td></td>
                      <td></td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>CORREA DESCARGA SAG 2</td>
                      <td>1</td>
                      <td>CV-202</td>
                      <td>CH-2200-20-CV-202</td>
                      <td>600</td>
                      <td>5</td>
                      <td>1600</td>
                      <td></td>
                      <td></td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>CORREA SOBRE TAMAÑO MOLINO BOLAS 1</td>
                      <td>1</td>
                      <td>CV-405</td>
                      <td>CH-4000-20-CV-405</td>
                      <td>100</td>
                      <td>3</td>
                      <td>1200</td>
                      <td></td>
                      <td></td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>CORREA OVERLAND 5KM</td>
                      <td>2</td>
                      <td>CV-107</td>
                      <td></td>
                      <td>2500</td>
                      <td>6</td>
                      <td>1600</td>
                      <td></td>
                      <td></td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>CORREA OVERLAND 3.5KM</td>
                      <td>2</td>
                      <td>CV-108</td>
                      <td></td>
                      <td>2000</td>
                      <td>6</td>
                      <td>1600</td>
                      <td></td>
                      <td></td>
                      <td>
                        <span className='icon-fontello-pencil-1'/>
                        {' | '}
                        <span className='icon-fontello-trash-8'/>
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
