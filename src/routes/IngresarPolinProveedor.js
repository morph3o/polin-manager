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
      codeOne: '',
      codeTwo: '',
      garantiaTon: '',
      garantiaMes: '',
      garantiaInicio: '',
      garantiaFin: '',
      garantiaCaduca: ''
    };
  }

  componentDidMount() {
    Messenger.options = {
      extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
      theme: 'flat'
    };
  }

  handleTipoChange(event) {
    this.setState({ tipo: event.target.value });
  }
  handleDescripcionChange(event) {
    this.setState({ descripcion: event.target.value });
  }
  handleMarcaChange(event) {
    this.setState({ marca: event.target.value });
  }
  handleModeloChange(event) {
    this.setState({ modelo: event.target.value });
  }
  handleColorChange(event) {
    this.setState({ color: event.target.value });
  }
  handlePesoChange(event) {
    this.setState({ peso: event.target.value });
  }
  handleCodeOneChange(event) {
    this.setState({ codeOne: event.target.value });
  }
  handleCodeTwoChange(event) {
    this.setState({ codeTwo: event.target.value });
  }
  handleGarantiaTonChange(event) {
    this.setState({ garantiaTon: event.target.value });
  }
  handleGarantiaMesChange(event) {
    this.setState({ garantiaMes: event.target.value });
  }
  handleGarantiaInicio(event) {
    this.setState({ garantiaInicio: event.target.value });
  }
  handleGarantiaFin(event) {
    this.setState({ garantiaFin: event.target.value });
  }
  handleGarantiaCaduca(event) {
    this.setState({ garantiaCaduca: event.target.value });
  }

  onSubmit() {
    Messenger().post({
      id: 'info',
      type: 'info',
      message: `El nuevo polin porveedor fue ingresado exitosamente!<br/><br/>
        id: ${this.state.id} <br/>
        tipo: ${this.state.tipo} <br/>
        descripcion: ${this.state.descripcion} <br/>
        marca: ${this.state.marca} <br/>
        modelo: ${this.state.modelo} <br/>
        color: ${this.state.color} <br/>
        peso: ${this.state.peso} <br/>
        code1: ${this.state.codeOne} <br/>
        code2: ${this.state.codeTwo} <br/>
        garantiaTon: ${this.state.garantiaTon} <br/>
        garantiaMes: ${this.state.garantiaMes} <br/>
        garantiaInicio: ${this.state.garantiaInicio} <br/>
        garantiaFin: ${this.state.garantiaFin} <br/>
        garantiaCaduca: ${this.state.garantiaCaduca} <br/>
      `,
      showCloseButton: true
    });
    ::this.clearForm();
  }

  clearForm() {
    this.setState({
      id: '',
      tipo: '',
      descripcion: '',
      marca: '',
      modelo: '',
      color: '',
      peso: '',
      codeOne: '',
      codeTwo: '',
      garantiaTon: '',
      garantiaMes: '',
      garantiaInicio: '',
      garantiaFin: '',
      garantiaCaduca: ''
    });
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
                                   onChange={::this.handleTipoChange}
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
                                   onChange={::this.handleDescripcionChange}
                                   value={this.state.descripcion} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='idMarca'>
                      <ControlLabel>Marca</ControlLabel>
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   onChange={::this.handleMarcaChange}
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
                                   onChange={::this.handleModeloChange}
                                   value={this.state.modelo} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='color'>
                      <ControlLabel>Color</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar el color del polin'
                                   onChange={::this.handleColorChange}
                                   value={this.state.color} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='peso'>
                      <ControlLabel>Peso</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar el peso del nuevo polin'
                                   onChange={::this.handlePesoChange}
                                   value={this.state.peso} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='code1'>
                      <ControlLabel>Code 1</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar code 1 del polin'
                                   onChange={::this.handleCodeOneChange}
                                   value={this.state.codeOne} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='code2'>
                      <ControlLabel>Code 2</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar code 2 del polin'
                                   onChange={::this.handleCodeTwoChange}
                                   value={this.state.codeTwo} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='garantiaTon'>
                      <ControlLabel>Garantia Ton</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar garantia ton'
                                   onChange={::this.handleGarantiaTonChange}
                                   value={this.state.garantiaTon} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='garantiaMes'>
                      <ControlLabel>Garantia Meses</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar garantia meses'
                                   onChange={::this.handleGarantiaMesChange}
                                   value={this.state.garantiaMes} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='garantiaInicio'>
                      <ControlLabel>Garantia Inicio</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar garantia inicio'
                                   onChange={::this.handleGarantiaInicio}
                                   value={this.state.garantiaInicio} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='garantiaFin'>
                      <ControlLabel>Garantia Fin</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar garantia fin'
                                   onChange={::this.handleGarantiaFin}
                                   value={this.state.garantiaFin} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='garantiaCaduca'>
                      <ControlLabel>Garantia Caduca</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar garantia caduca'
                                   onChange={::this.handleGarantiaCaduca}
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
                    <Button outlined bsStyle='lightgreen' onClick={::this.clearForm}>cancel</Button>{' '}
                    <Button outlined bsStyle='lightgreen' onClick={::this.onSubmit}>Ingresar</Button>
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