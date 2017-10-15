import React, {Component} from 'react';

import {
  Row,
  Col,
  Grid,
  Icon,
  Form,
  Panel,
  Radio,
  Button,
  Checkbox,
  HelpBlock,
  PanelBody,
  FormGroup,
  InputGroup,
  PanelHeader,
  FormControl,
  PanelFooter,
  ControlLabel,
  PanelContainer,
} from '@sketchpixy/rubix';

class IngresarPolin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelHeader className='bg-green fg-white'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h3>Ingresar Polin</h3>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Form>
                    <FormGroup controlId='id'>
                      <ControlLabel>ID Polin</ControlLabel>
                      <FormControl readOnly type='text' placeholder='Este id es autogenerado' />
                    </FormGroup>
                    <FormGroup controlId='tipo'>
                      <ControlLabel>Tipo de Polin</ControlLabel>
                      <FormControl componentClass="select" placeholder="select">
                        <option value='1'>CARGA</option>
                        <option value='2'>RETORNO</option>
                        <option value='3'>POLEA</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='ancho'>
                      <ControlLabel>Ancho</ControlLabel>
                      <FormControl type='number' placeholder='Ingresar ancho del polin' />
                    </FormGroup>
                    <FormGroup controlId='diametro'>
                      <ControlLabel>Diametro</ControlLabel>
                      <FormControl type='number' placeholder='Ingresar diametro del polin' />
                    </FormGroup>
                    <FormGroup controlId='eje'>
                      <ControlLabel>Eje</ControlLabel>
                      <FormControl type='number' placeholder='Ingresar eje del polin' />
                    </FormGroup>
                    <FormGroup controlId='conector'>
                      <ControlLabel>Conector</ControlLabel>
                      <FormControl componentClass="select" placeholder="select">
                        <option value='1'>Ranura 32mm</option>
                        <option value='2'>Ranura 28mm</option>
                        <option value='3'>FALKEN</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='descripcion'>
                      <ControlLabel>Descripción</ControlLabel>
                      <FormControl componentClass='textarea' rows='3' placeholder='Ingresar description del polin' />
                    </FormGroup>
                    <FormGroup controlId="formControlsFile">
                      <ControlLabel>Diagrama</ControlLabel>
                      <FormControl type="file" />
                      <HelpBlock>Ingresar diagrama del polin</HelpBlock>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
          <PanelFooter className='bg-darkgreen45 text-right'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <br/>
                  <div>
                    <Button outlined bsStyle='lightgreen'>cancel</Button>{' '}
                    <Button outlined bsStyle='lightgreen'>Ingresar</Button>
                  </div>
                  <br/>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
        </Panel>
      </PanelContainer>
    );
  }
}

export default IngresarPolin;