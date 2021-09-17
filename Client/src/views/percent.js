import React, { Component } from 'react'
import Footer from '../components/Footer';
import Encabezadocomun from '../components/Encabezadocomun';
import Botoncuadradopeq from '../components/botones/Botoncuadradopeq';
import Botonrect from '../components/botones/Botonrect.js';
import DesplegableOptions from '../components/DesplegableOptions';
import Botonovalado from '../components/botones/Botonovalado';
import porcentajeblanco from '../images/porcentajeblanco.svg';
import Desplegableporcentaje from '../components/Desplegableporcentaje';
import Modal from '../components/Modal'
import { Link } from 'react-router-dom';

import '../styles/_percent.scss'



export class Percent extends Component {
  constructor(props) {
    super(props);

    this.updateBotonesMultiplicador = this.updateBotonesMultiplicador.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
        botones_multiplicador: {},
        siguiente_disabled: true,
        active: false
    }
  }
 
  toggle() {
    this.setState({ active: !this.state.active })
    // this.props.history.push('/roundup');
  }

// actualiza el state de percent, newBotones es la linea 35 del componente (boton-states)
  updateBotonesMultiplicador(newBotones) {
    // console.log('NEW BOTONES')
    console.log(newBotones)
    this.setState({botones_multiplicador: newBotones});
    
    // console.log('NEW BOTONES END')

  }
  
 


  render () {
    let multiplicadorpulsado = false
    let multiplicador = {
      1: 0.5,
      2: 1,
      3: 2
    }
    let multiplicador_aplicado = null
    let siguiente_disabled = this.state.siguiente_disabled
    for (const btn in this.state.botones_multiplicador) {
      // eslint-disable-next-line
      if (this.state.botones_multiplicador[btn].clicked == true) {
        multiplicadorpulsado = true
        multiplicador_aplicado =  multiplicador[btn]
      }
    }
    if (multiplicadorpulsado) {
      siguiente_disabled = false
    }
    return (
    <div className="containerporcentaje">
      <Encabezadocomun texto={'Porcentaje de la nómina'} src={porcentajeblanco} />
      <div className="porcentaje">
        <p className="porcentaje-txt"> Acelerador de solidaridad</p>
      </div>

      <div className="porcentaje-btnmed">
        <Botoncuadradopeq valor={'0,5%'} state={this.state.botones_multiplicador} set_state={this.updateBotonesMultiplicador} btn_id={1}/>
        <Botoncuadradopeq valor={'1%'} state={this.state.botones_multiplicador} set_state={this.updateBotonesMultiplicador} btn_id={2}/>
        <Botoncuadradopeq valor={'2%'} state={this.state.botones_multiplicador} set_state={this.updateBotonesMultiplicador} btn_id={3}/>
      </div>
      <div className="porcentaje-btnrect">
        <Botonrect texto={'Otro porcentaje'} />
      </div>

      <div className="porcentaje-txt-2">
        <p>Ejemplo: Si configuras el 0,5% y tienes una nómina de 1000€, donarás 5€</p>
      </div>


      <Desplegableporcentaje multiplicador_value={multiplicador_aplicado}/>

      <div >
        <p className="porcentaje-txt">Tipo de donación</p>
      </div>

      <div className="desplegable">
        <DesplegableOptions />

      </div>
      <div className="btnguardar">

        <div className="btnguardar-1">
          <Botonovalado func={this.toggle} texto={'Guardar'} color='btn-ovalado-pink' disabled={siguiente_disabled}/>
          <Modal active={this.state.active} toggle={this.toggle}>
              <div className="modalconfig">
              <p className="popupmsg">Tu configuración se ha guardado y <span>activado</span> correctamente</p>
              <Link to='/home'><button>Ir a inicio</button></Link>

              </div>
          </Modal>
        </div>

        <div >
          <button className="btndesactivar">Desactivar</button>
        </div>

      </div>


      <Footer />

    </div>
    )
  }
}
export default Percent