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

export default class Polines extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <PageHeader>Polines</PageHeader>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Marca</th>
                        <th>Estación</th>
                        <th>Posicion</th>
                        <th>Garantia</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
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
