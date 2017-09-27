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

export default class Estacion extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <PageHeader>Estación T3</PageHeader>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Posición</th>
                        <th>Tipo</th>
                        <th>Polines Compatibles</th>
                        <th>Correas compatibles</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan='3'>8</td>
                        <td rowSpan='3'>ALIMENTADOR</td>
                        <td>POLIN TIPO 1</td>
                        <td>CORREA TIPO 1</td>
                        <td rowSpan='3'>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>POLIN TIPO 2</td>
                        <td>CORREA TIPO 2</td>
                      </tr>
                      <tr>
                        <td>POLIN TIPO 3</td>
                        <td>CORREA TIPO 3</td>
                      </tr>
                      <tr>
                        <td rowSpan='3'>9</td>
                        <td rowSpan='3'>ALIMENTADOR</td>
                        <td>POLIN TIPO 1</td>
                        <td>CORREA TIPO 1</td>
                        <td rowSpan='3'>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>POLIN TIPO 2</td>
                        <td>CORREA TIPO 2</td>
                      </tr>
                      <tr>
                        <td>POLIN TIPO 3</td>
                        <td>CORREA TIPO 3</td>
                      </tr>
                      <tr>
                        <td rowSpan='3'>10</td>
                        <td rowSpan='3'>ALIMENTADOR</td>
                        <td>POLIN TIPO 1</td>
                        <td>CORREA TIPO 1</td>
                        <td rowSpan='3'>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>POLIN TIPO 2</td>
                        <td>CORREA TIPO 2</td>
                      </tr>
                      <tr>
                        <td>POLIN TIPO 3</td>
                        <td>CORREA TIPO 3</td>
                      </tr>
                      <tr>
                        <td rowSpan='3'>11</td>
                        <td rowSpan='3'>ALIMENTADOR</td>
                        <td>POLIN TIPO 1</td>
                        <td>CORREA TIPO 1</td>
                        <td rowSpan='3'>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>POLIN TIPO 2</td>
                        <td>CORREA TIPO 2</td>
                      </tr>
                      <tr>
                        <td>POLIN TIPO 3</td>
                        <td>CORREA TIPO 3</td>
                      </tr>
                      <tr>
                        <td rowSpan='2'>12</td>
                        <td rowSpan='2'>ALIMENTADOR</td>
                        <td>POLIN TIPO 1</td>
                        <td>CORREA TIPO 1</td>
                        <td rowSpan='3'>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>POLIN TIPO 2</td>
                        <td>CORREA TIPO 2</td>
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
