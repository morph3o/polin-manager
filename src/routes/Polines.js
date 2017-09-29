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
                        <th>Descripción</th>
                        <th>Tipo</th>
                        <th>Ancho</th>
                        <th>Diametro</th>
                        <th>Eje</th>
                        <th>Conector</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>POLIN DE CARGA, MANTO METALICO, 600mm X 6", EJE 40mm CON CORTE A 32mm ENTRE CARAS</td>
                        <td>CARGA</td>
                        <td>600</td>
                        <td>152</td>
                        <td>40</td>
                        <td>RANURA 32mm</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>POLIN DE CARGA, MANTO METALICO, 450mm X 6", EJE 40mm CON CORTE A 32mm ENTRE CARAS</td>
                        <td>CARGA</td>
                        <td>450</td>
                        <td>152</td>
                        <td>40</td>
                        <td>RANURA 32mm</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>POLIN DE RETORNO, MANTO METALICO, 1000mm X 7", EJE 32mm CON CORTE A 28mm ENTRE CARAS</td>
                        <td>RETORNO</td>
                        <td>1000</td>
                        <td>178</td>
                        <td>32</td>
                        <td>RANURA 28mm</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>POLEA MOTRIZ REVESTIDA GOMA "V" 25mm, PARA CORREA 1800mm, 1200mm DIAMETRO</td>
                        <td>POLEA</td>
                        <td>2000</td>
                        <td>1200</td>
                        <td>240</td>
                        <td>FALKEN</td>
                        <td>
                          <span className='icon-fontello-pencil-1'/>
                          {' | '}
                          <span className='icon-fontello-trash-8'/>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>POLEA CONDUCIDA REVESTIDA GOMA LISA 20mm, PARA CORREA 1800mm, 1200mm DIAMETRO</td>
                        <td>POLEA</td>
                        <td>2000</td>
                        <td>1200</td>
                        <td>180</td>
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
