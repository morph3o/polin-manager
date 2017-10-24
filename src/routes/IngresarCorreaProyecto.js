import React, {Component} from 'react';
import ProtTypes from 'prop-types';

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

class IngresarCorreaProyecto extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      id: '',
      idProyecto: '',
      descripcion: '',
      nombreCorrea: '',
      tag: '',
      ancho: '',
      totalPosiciones: '',
      totalPoleas: '',
      coordenadasCabeza: '',
      coordenadasCola: ''
    };
  }

  handleIdProyectoChange(event) {
    this.setState({ idProyecto: event.target.value });
  }
  handleDescripcionChange(event) {
    this.setState({ descripcion: event.target.value });
  }
  handleNombreCorrea(event) {
    this.setState({ nombreCorrea: event.target.value });
  }
  handleTagChange(event) {
    this.setState({ tag: event.target.value });
  }
  handleAnchoChange(event) {
    this.setState({ ancho: event.target.value });
  }
  handleTotalPosicionesChange(event) {
    this.setState({ totalPosiciones: event.target.value });
  }
  handleTotalPoleasChange(event) {
    this.setState({ totalPoleas: event.target.value });
  }
  handleCoordenadasCabezaChange(event) {
    this.setState({ coordenadasCabeza: event.target.value });
  }
  handleCoordenadasColaChange(event) {
    this.setState({ coordenadasCola: event.target.value });
  }

  onSubmit() {
    Messenger().post({
      id: 'info',
      type: 'info',
      message: `La correa del proyecto fue ingresado exitosamente!<br/>
        id: ${this.state.id} <br/>
        idProyecto: ${this.state.idProyecto} <br/>
        descripcion: ${this.state.descripcion} <br/>
        nombreCorrea: ${this.state.nombreCorrea} <br/>
        tag: ${this.state.tag} <br/>
        ancho: ${this.state.ancho} <br/>
        totalPosiciones: ${this.state.totalPosiciones} <br/>
        totalPoleas: ${this.state.totalPoleas} <br/>
        coordenadasCabeza: ${this.state.coordenadasCabeza} <br/>
        coordenadasCola: ${this.state.coordenadasCola}
      `,
      showCloseButton: true
    });
    ::this.clearForm();
  }

  clearForm() {
    this.setState({
      id: '',
      idProyecto: '',
      descripcion: '',
      nombreCorrea: '',
      tag: '',
      ancho: '',
      totalPosiciones: '',
      totalPoleas: '',
      coordenadasCabeza: '',
      coordenadasCola: ''
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
                      <ControlLabel>ID Correa Proyecto</ControlLabel>
                      <FormControl readOnly type='text' placeholder='Este id es autogenerado' />
                    </FormGroup>
                    <FormGroup controlId='idProyecto'>
                      <ControlLabel>Mandante</ControlLabel>
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   onChange={::this.handleIdProyectoChange}
                                   value={this.state.idProyecto}>
                        <option value='0'>Selecciona el proyecto...</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='descripcion'>
                      <ControlLabel>Descripción</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar descripción de correa'
                                   onChange={::this.handleDescripcionChange}
                                   value={this.state.descripcion} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='nombreCorrea'>
                      <ControlLabel>Contrato</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar nombre de correa'
                                   onChange={::this.handleNombreCorrea}
                                   value={this.state.nombreCorrea} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='tag'>
                      <ControlLabel>Contrato</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar tag de correa'
                                   onChange={::this.handleTagChange}
                                   value={this.state.tag} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='ancho'>
                      <ControlLabel>Ancho</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar ancho de correa'
                                   onChange={::this.handleAnchoChange}
                                   value={this.state.ancho} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='totalPosiciones'>
                      <ControlLabel>Total Posiciones</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar total posiciones de correa'
                                   onChange={::this.handleTotalPosicionesChange}
                                   value={this.state.totalPosiciones} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='totalPoleas'>
                      <ControlLabel>Total Poleas</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar total poleas de correa'
                                   onChange={::this.handleTotalPoleasChange}
                                   value={this.state.totalPoleas} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='coordenadasCabeza'>
                      <ControlLabel>Coordenadas Cabeza</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar coordenadas de la cabeza de la correa'
                                   onChange={::this.handleCoordenadasCabezaChange}
                                   value={this.state.coordenadasCabeza} />
                      <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId='coordenadasCola'>
                      <ControlLabel>Coordenadas Cabeza</ControlLabel>
                      <FormControl type='text'
                                   placeholder='Ingresar coordenadas de la cola de la correa'
                                   onChange={::this.handleCoordenadasColaChange}
                                   value={this.state.coordenadasCola} />
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

IngresarCorreaProyecto.propTypes = {};

export default IngresarCorreaProyecto;