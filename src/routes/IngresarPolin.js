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

class IngresarPolin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      tipo: '0',
      ancho: '',
      diametro: '',
      eje: '',
      conector: '0',
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

  handleIDChange(event) {
    this.setState({ id: event.target.value });
  }
  handleTipoChange(event) {
    this.setState({ tipo: event.target.value });
  }
  handleAnchoChange(event) {
    this.setState({ ancho: event.target.value });
  }
  handleDiametroChange(event) {
    this.setState({ diametro: event.target.value });
  }
  handleEjeChange(event) {
    this.setState({ eje: event.target.value });
  }
  handleConectorChange(event) {
    this.setState({ conector: event.target.value });
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
      message: `El polin fue ingresado exitosamente!<br/>
        id: ${this.state.id} <br/>
        tipo: ${this.state.tipo} <br/>
        ancho: ${this.state.ancho} <br/>
        diametro: ${this.state.diametro} <br/>
        eje: ${this.state.eje} <br/>
        conector: ${this.state.conector} <br/>
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
      conector: '0',
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
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   onChange={::this.handleTipoChange}
                                   value={this.state.tipo}>
                        <option value='0'>Selecciona el tipo de polin...</option>
                        <option value='CARGA'>CARGA</option>
                        <option value='RETORNO'>RETORNO</option>
                        <option value='POLEA'>POLEA</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='ancho'>
                      <ControlLabel>Ancho</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar ancho del polin'
                                   onChange={::this.handleAnchoChange}
                                   value={this.state.ancho} />
                      <FormControl.Feedback />
                      <HelpBlock>El ancho es en mm</HelpBlock>
                    </FormGroup>
                    <FormGroup controlId='diametro'>
                      <ControlLabel>Diametro</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar diametro del polin'
                                   onChange={::this.handleDiametroChange}
                                   value={this.state.diametro} />
                      <FormControl.Feedback />
                      <HelpBlock>El ancho es en mm</HelpBlock>
                    </FormGroup>
                    <FormGroup controlId='eje'>
                      <ControlLabel>Eje</ControlLabel>
                      <FormControl type='number'
                                   placeholder='Ingresar eje del polin'
                                   onChange={::this.handleEjeChange}
                                   value={this.state.eje} />
                      <FormControl.Feedback />
                      <HelpBlock>El ancho es en mm</HelpBlock>
                    </FormGroup>
                    <FormGroup controlId='conector'>
                      <ControlLabel>Conector</ControlLabel>
                      <FormControl componentClass="select"
                                   placeholder="select"
                                   onChange={::this.handleConectorChange}
                                   value={this.state.conector}>
                        <option value='0'>Selecciona el conector del polin...</option>
                        <option value='1'>Ranura 32mm</option>
                        <option value='2'>Ranura 28mm</option>
                        <option value='3'>FALKEN</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId='descripcion'>
                      <ControlLabel>Descripción</ControlLabel>
                      <FormControl componentClass='textarea'
                                   rows='3'
                                   placeholder='Ingresar description del polin'
                                   onChange={::this.handleDescripcionChange}
                                   value={this.state.descripcion} />
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

export default IngresarPolin;