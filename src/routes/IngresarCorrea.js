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
  PanelBody,
  FormGroup,
  PanelHeader,
  FormControl,
  PanelFooter,
  ControlLabel,
  PanelContainer,
} from '@sketchpixy/rubix';

class IngresarCorrea extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      id: '',
      idProyecto: '',
      secuencia: '',
      coordenadas: '',
      informacion: '',
      idTerreno: '',
      idEstacion: ''
    };
  }

  componentDidMount() {
    Messenger.options = {
      extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
      theme: 'flat'
    };
  }

  handleIdProyectoChange(event) {
    this.setState({ idProyecto: event.target.value });
  }
  handleSecuenciaChange(event) {
    this.setState({ secuencia: event.target.value });
  }
  handleCoordenadasChange(event) {
    this.setState({ coordenadas: event.target.value });
  }
  handleInformacionChange(event) {
    this.setState({ informacion: event.target.value });
  }
  handleIdTerrenoChange(event) {
    this.setState({ idTerreno: event.target.value });
  }
  handleIdEstacionChange(event) {
    this.setState({ idEstacion: event.target.value });
  }

  onSubmit() {
    Messenger().post({
      id: 'info',
      type: 'info',
      message: `El proyecto fue ingresado exitosamente!<br/>
        id: ${this.state.id} <br/>
        proyecto: ${this.state.idProyecto} <br/>
        secuencia: ${this.state.secuencia} <br/>
        coordenadas: ${this.state.coordenadas} <br/>
        informacion: ${this.state.informacion} <br/>
        idTerreno: ${this.state.idTerreno} <br/>
        idEstacion: ${this.state.idEstacion}
      `,
      showCloseButton: true
    });
    ::this.clearForm();
  }

  clearForm() {
    this.setState({
      id: '',
      idProyecto: '',
      secuencia: '',
      coordenadas: '',
      informacion: '',
      idTerreno: '',
      idEstacion: ''
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
                  <h3>Ingresar Correa</h3>
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
                      <ControlLabel>ID Correa</ControlLabel>
                      <FormControl readOnly type='text' placeholder='Este id es autogenerado' />
                    </FormGroup>
                    <FormGroup controlId='idProyecto'>
                      <ControlLabel>Proyecto</ControlLabel>
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   onChange={::this.handleIdProyectoChange}
                                   value={this.state.idProyecto}>
                        <option value='0'>Selecciona el proyecto al que corresponde la correa...</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='secuencia'>
                      <ControlLabel>Secuencia</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar secuencia de la correa'
                                   onChange={::this.handleSecuenciaChange}
                                   value={this.state.secuencia} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='coordenada'>
                      <ControlLabel>Coordenada</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar las coordenadas de la correa'
                                   onChange={::this.handleCoordenadasChange}
                                   value={this.state.coordenadas} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='informacion'>
                      <ControlLabel>Información</ControlLabel>
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   onChange={::this.handleInformacionChange}
                                   value={this.state.informacion}>
                        <option value='0'>Selecciona el mandante...</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='idTerreno'>
                      <ControlLabel>Terreno</ControlLabel>
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   onChange={::this.handleIdTerrenoChange}
                                   value={this.state.idTerreno}>
                        <option value='0'>Selecciona el terreno...</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='idEstacion'>
                      <ControlLabel>Estación</ControlLabel>
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   onChange={::this.handleIdEstacionChange}
                                   value={this.state.idEstacion}>
                        <option value='0'>Selecciona la definición de estación...</option>
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

IngresarCorrea.propTypes = {};

export default IngresarCorrea;
