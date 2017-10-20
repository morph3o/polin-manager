import React, {Component} from 'react';

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

class IngresarEstacion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      tipo: '0',
      ancho: '',
      posiciones: '0',
      descripcion: '',
      diagrama: ''
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
  handleAnchoChange(event) {
    this.setState({ ancho: event.target.value });
  }
  handlePosicionesChange(event) {
    this.setState({ posiciones: event.target.value });
  }
  handleDescripcionChange(event) {
    this.setState({ descripcion: event.target.value });
  }
  handleDiagramaChange(event) {
    this.setState({ diagrama: event.target.value });
  }

  onSubmit() {
    Messenger().post({
      id: 'info',
      type: 'info',
      message: `El proveedor fue ingresado exitosamente!<br/>
        id: ${this.state.id} <br/>
        tipo: ${this.state.tipo} <br/>
        ancho: ${this.state.ancho} <br/>
        posiciones: ${this.state.posiciones} <br/>
        descripcion: ${this.state.descripcion}
      `,
      showCloseButton: true
    });
    ::this.clearForm();
  }

  clearForm() {
    this.setState({
      id: '',
      tipo: '0',
      ancho: '',
      diametro: '',
      eje: '',
      descripcion: '',
      diagrama: ''
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
                  <h3>Ingresar Estación</h3>
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
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   onChange={::this.handleTipoChange}
                                   value={this.state.tipo}>
                        <option value='0'>Selecciona el tipo de estación...</option>
                        <option value='CARGA'>CARGA</option>
                        <option value='RETORNO'>RETORNO</option>
                        <option value='POLEA'>POLEA</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='ancho'>
                      <ControlLabel>Ancho</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar ancho de la estación'
                                   onChange={::this.handleAnchoChange}
                                   value={this.state.ancho} />
                      <FormControl.Feedback />
                      <HelpBlock>El ancho es en mm</HelpBlock>
                    </FormGroup>
                    <FormGroup controlId='posiciones'>
                      <ControlLabel>Posiciones</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar posiciones de la estación'
                                   onChange={::this.handlePosicionesChange}
                                   value={this.state.posiciones} />
                      <FormControl.Feedback />
                      <HelpBlock>El ancho es en mm</HelpBlock>
                    </FormGroup>
                    <FormGroup controlId='descripcion'>
                      <ControlLabel>Descripción</ControlLabel>
                      <FormControl componentClass='textarea'
                                   rows='3'
                                   placeholder='Ingresar description de la estación'
                                   onChange={::this.handleDescripcionChange}
                                   value={this.state.descripcion} />
                    </FormGroup>
                    <FormGroup controlId="formControlsFile">
                      <ControlLabel>Diagrama</ControlLabel>
                      <FormControl type="file" />
                      <HelpBlock>Ingresar diagrama de la estación</HelpBlock>
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

export default IngresarEstacion;