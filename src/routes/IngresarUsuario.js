import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {format} from 'rut.js';

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

class IngresarUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      rut: '',
      nombre: '',
      telefonoFijo: '',
      telefonoMovil: '',
      direccion: '',
      email: '',
      empresa: ''
    };
  }

  componentDidMount() {
    Messenger.options = {
      extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
      theme: 'flat'
    };
  }

  handleRutOnChange(event) {
    this.setState({ rut: format(event.target.value) });
  }
  handleNombreOnChange(event) {
    this.setState({ nombre: event.target.value });
  }
  handleTelefonoFijoOnChange(event) {
    this.setState({ telefonoFijo: event.target.value });
  }
  handleTelefonoMovilOnChange(event) {
    this.setState({ telefonoMovil: event.target.value });
  }
  handleDireccionOnChange(event) {
    this.setState({ direccion: event.target.value });
  }
  handleEmailOnChange(event) {
    this.setState({ email: event.target.value });
  }
  handleEmpresaOnChange(event) {
    this.setState({ empresa: event.target.value });
  }

  onSubmit() {
    Messenger().post({
      id: 'info',
      type: 'info',
      message: `El nuevo usuario fue ingresado exitosamente!<br/><br/>
        id: ${this.state.id} <br/>
        rut: ${this.state.rut} <br/>
        nombre: ${this.state.nombre} <br/>
        telefonoFijo: ${this.state.telefonoFijo} <br/>
        telefonoMovil: ${this.state.telefonoMovil} <br/>
        dirección: ${this.state.direccion} <br/>
        email: ${this.state.email} <br/>
        empresa: ${this.state.empresa}
      `,
      showCloseButton: true
    });
    ::this.clearForm();
  }

  clearForm() {
    this.setState({
      id: '',
      rut: '',
      nombre: '',
      telefonoFijo: '',
      telefonoMovil: '',
      direccion: '',
      email: '',
      empresa: ''
    })
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
                      <ControlLabel>ID Usuario</ControlLabel>
                      <FormControl readOnly type='text' placeholder='Este id es autogenerado' />
                    </FormGroup>
                    <FormGroup controlId='rut'>
                      <ControlLabel>RUT</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar rut del nuevo usuario'
                                   onChange={::this.handleRutOnChange}
                                   value={this.state.rut} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='nombre'>
                      <ControlLabel>Nombre</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar nombre completo del nuevo usuario'
                                   onChange={::this.handleNombreOnChange}
                                   value={this.state.nombre} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='telefonoFijo'>
                      <ControlLabel>Telefono Fijo</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar el telefono fijo del nuevo usuario'
                                   onChange={::this.handleTelefonoFijoOnChange}
                                   value={this.state.telefonoFijo} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='telefonoMovil'>
                      <ControlLabel>Telefono Movil</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar el telefono movil del nuevo usuario'
                                   onChange={::this.handleTelefonoMovilOnChange}
                                   value={this.state.telefonoMovil} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='direccion'>
                      <ControlLabel>Dirección</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar la dirección del nuevo usuario'
                                   onChange={::this.handleDireccionOnChange}
                                   value={this.state.direccion} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='email'>
                      <ControlLabel>Email</ControlLabel>
                      <FormControl type='email'
                                   placeholder='Ingresar correo electrónico del nuevo usuario'
                                   onChange={::this.handleEmailOnChange}
                                   value={this.state.email} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='empresa'>
                      <ControlLabel>Empresa</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar nombre de la empresa del nuevo usuario'
                                   onChange={::this.handleEmpresaOnChange}
                                   value={this.state.empresa} />
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

IngresarUsuario.propTypes = {
  id: PropTypes.string,
  rut: PropTypes.string,
  nombre: PropTypes.string,
  telefonoFijo: PropTypes.string,
  telefonoMovil: PropTypes.string,
  direccion: PropTypes.string,
  email: PropTypes.string,
  empresa: PropTypes.string
};

export default IngresarUsuario;