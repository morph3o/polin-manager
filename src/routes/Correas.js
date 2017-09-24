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
                      <th>Nombre</th>
                      <th>Ancho</th>
                      <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
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
