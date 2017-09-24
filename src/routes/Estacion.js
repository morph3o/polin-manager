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
                  <PageHeader>Estación A</PageHeader>
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
                        <td rowSpan='3'>1</td>
                        <td rowSpan='3'>Table cell</td>
                        <td>Polin 1</td>
                        <td>Correa 1</td>
                        <td rowSpan='3'>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>Polin 2</td>
                        <td>Correa 2</td>
                      </tr>
                      <tr>
                        <td>Polin 3</td>
                        <td>Correa 3</td>
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
