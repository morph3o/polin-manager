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
                        <td>POLIN001</td>
                        <td>T1</td>
                        <td>P1</td>
                        <td>2 AÑOS</td>
                        <td>FUNCIONAMIENTO</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>POLIN002</td>
                        <td>T2</td>
                        <td>P2</td>
                        <td>2 AÑOS</td>
                        <td>FUNCIONAMIENTO</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>POLIN003</td>
                        <td>T2</td>
                        <td>P3</td>
                        <td>2 AÑOS</td>
                        <td>FUNCIONAMIENTO</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>POLIN004</td>
                        <td>T2</td>
                        <td>P4</td>
                        <td>2 AÑOS</td>
                        <td>FUNCIONAMIENTO</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>POLIN005</td>
                        <td>T2</td>
                        <td>P5</td>
                        <td>2 AÑOS</td>
                        <td>FUNCIONAMIENTO</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>POLIN006</td>
                        <td>T2</td>
                        <td>P6</td>
                        <td>2 AÑOS</td>
                        <td>FUNCIONAMIENTO</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>POLIN007</td>
                        <td>T4</td>
                        <td>P7</td>
                        <td>2 AÑOS</td>
                        <td>FUNCIONAMIENTO</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>POLIN008</td>
                        <td>T3</td>
                        <td>P8</td>
                        <td>2 AÑOS</td>
                        <td>FUNCIONAMIENTO</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>POLIN009</td>
                        <td>T3</td>
                        <td>P9</td>
                        <td>2 AÑOS</td>
                        <td>FUNCIONAMIENTO</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>POLIN010</td>
                        <td>T3</td>
                        <td>P10</td>
                        <td>2 AÑOS</td>
                        <td>FUNCIONAMIENTO</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>POLIN011</td>
                        <td>T3</td>
                        <td>P11</td>
                        <td>2 AÑOS</td>
                        <td>FUNCIONAMIENTO</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>POLIN012</td>
                        <td>T3</td>
                        <td>P12</td>
                        <td>2 AÑOS</td>
                        <td>FUNCIONAMIENTO</td>
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
