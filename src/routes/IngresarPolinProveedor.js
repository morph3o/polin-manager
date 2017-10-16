import React, {Component} from 'react';

import {
  Row,
  Col,
  Grid,
  Form,
  Panel,
  Button,
  PanelBody,
  FormGroup,
  PanelHeader,
  FormControl,
  PanelFooter,
  ControlLabel,
  PanelContainer,
} from '@sketchpixy/rubix';

class IngresarPolinProveedor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      tipo: '',
      descripcion: '',
      marca: '',
      modelo: '',
      color: '',
      peso: '',
      code1: '',
      code2: '',
      garantiaTon: '',
      garantiaMes: '',
      garantiaInicio: '',
      garantiaFin: '',
      garantiaCaduca: ''
    };
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
                      <ControlLabel>ID Polin Proveedor</ControlLabel>
                      <FormControl readOnly type='text' placeholder='Este id es autogenerado' />
                    </FormGroup>
                    <FormGroup controlId='idTipoPolin'>
                      <ControlLabel>Tipo de Polin</ControlLabel>
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   value={this.state.tipo}>
                        <option value='0'>Selecciona el tipo de polin que ofrece el proveedor...</option>
                        <option value='CARGA'>CARGA</option>
                        <option value='RETORNO'>RETORNO</option>
                        <option value='POLEA'>POLEA</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='descripcion'>
                      <ControlLabel>Descripción</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar descripción del nuevo proveedor'
                                   value={this.state.descripcion} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='idMarca'>
                      <ControlLabel>Marca</ControlLabel>
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   value={this.state.marca}>
                        <option value='0'>Selecciona el tipo de marca del proveedor...</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='modelo'>
                      <ControlLabel>Modelo</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar el modelo del polin que ofrece el proveedor'
                                   value={this.state.modelo} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='color'>
                      <ControlLabel>Color</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar el color del polin'
                                   value={this.state.color} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='peso'>
                      <ControlLabel>Peso</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar el peso del nuevo polin'
                                   value={this.state.peso} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='code1'>
                      <ControlLabel>Code 1</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar code 1 del polin'
                                   value={this.state.code1} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='code2'>
                      <ControlLabel>Code 2</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar code 2 del polin'
                                   value={this.state.code2} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='garantiaTon'>
                      <ControlLabel>Garantia Ton</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar garantia ton'
                                   value={this.state.garantiaTon} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='garantiaMes'>
                      <ControlLabel>Garantia Meses</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar garantia meses'
                                   value={this.state.garantiaMes} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='garantiaInicio'>
                      <ControlLabel>Garantia Inicio</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar garantia inicio'
                                   value={this.state.garantiaInicio} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='garantiaFin'>
                      <ControlLabel>Garantia Fin</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar garantia fin'
                                   value={this.state.garantiaFin} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='garantiaCaduca'>
                      <ControlLabel>Garantia Caduca</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar garantia caduca'
                                   value={this.state.garantiaCaduca} />
                      <FormControl.Feedback />
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

export default IngresarPolinProveedor;