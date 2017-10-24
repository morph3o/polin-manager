import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Row,
  Col,
  Grid,
  Form,
  Panel,
  Button,
  HelpBlock,
  PanelBody,
  FormGroup,
  PanelHeader,
  FormControl,
  PanelFooter,
  ControlLabel,
  PanelContainer,
} from '@sketchpixy/rubix';

class IngresarProyecto extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      id: '',
      nombre: '',
      contrato: '',
      idMandante: '',
      idCliente: '',
      idMandanteRep: '',
      idClienteRep: ''
    };
  }

  componentDidMount() {
    Messenger.options = {
      extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
      theme: 'flat'
    };
  }

  handleNombreChange(event) {
    this.setState({ nombre: event.target.value });
  }
  handleContratoChange(event) {
    this.setState({ contrato: event.target.value });
  }
  handleIdMandanteChange(event) {
    this.setState({ idMandante: event.target.value });
  }
  handleIdClienteChange(event) {
    this.setState({ idCliente: event.target.value });
  }
  handleIdMandanteRepChange(event) {
    this.setState({ idMandanteRep: event.target.value });
  }
  handleIdClienteRepChange(event) {
    this.setState({ idClienteRep: event.target.value });
  }

  onSubmit() {
    Messenger().post({
      id: 'info',
      type: 'info',
      message: `El royecto fue ingresado exitosamente!<br/>
        id: ${this.state.id} <br/>
        nombre: ${this.state.nombre} <br/>
        contrato: ${this.state.contrato} <br/>
        idMandante: ${this.state.idMandante} <br/>
        idCliente: ${this.state.idCliente} <br/>
        idMandanteRep: ${this.state.idMandanteRep} <br/>
        idClienteRep: ${this.state.idClienteRep}
      `,
      showCloseButton: true
    });
    ::this.clearForm();
  }

  clearForm() {
    this.setState({
      id: '',
      nombre: '',
      contrato: '',
      idMandante: '',
      idCliente: '',
      idMandanteRep: '',
      idClienteRep: ''
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
                  <h3>Ingresar Proyecto</h3>
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
                      <ControlLabel>ID Proyecto</ControlLabel>
                      <FormControl readOnly type='text' placeholder='Este id es autogenerado' />
                    </FormGroup>
                    <FormGroup controlId='nombre'>
                      <ControlLabel>Nombre</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar nombre del proyecto'
                                   onChange={::this.handleNombreChange}
                                   value={this.state.nombre} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='contrato'>
                      <ControlLabel>Contrato</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar contrato del proyecto'
                                   onChange={::this.handleContratoChange}
                                   value={this.state.contrato} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='idMandante'>
                      <ControlLabel>Mandante</ControlLabel>
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   onChange={::this.handleIdMandanteChange}
                                   value={this.state.idMandante}>
                        <option value='0'>Selecciona el mandante...</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='idCliente'>
                      <ControlLabel>Cliente</ControlLabel>
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   onChange={::this.handleIdClienteChange}
                                   value={this.state.idCliente}>
                        <option value='0'>Selecciona el cliente...</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='idMandanteRep'>
                      <ControlLabel>Representante del mandante</ControlLabel>
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   onChange={::this.handleIdMandanteRepChange}
                                   value={this.state.idMandanteRep}>
                        <option value='0'>Selecciona el representante del mandante...</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='idClienteRep'>
                      <ControlLabel>Representante del cliente</ControlLabel>
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   onChange={::this.handleIdClienteRepChange}
                                   value={this.state.idClienteRep}>
                        <option value='0'>Selecciona el representante del cliente...</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </FormControl>
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

IngresarProyecto.propTypes = {};

export default IngresarProyecto;
