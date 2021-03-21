import React, { Component } from 'react'
import Footer from '../components/Footer';
import Encabezadocomun from '../components/Encabezadocomun';
import { useHistory } from 'react-router-dom';
import Botoncuadradopeq from '../components/botones/Botoncuadradopeq';
import Botonrect from '../components/botones/Botonrect.js';
import DesplegableOptions from '../components/DesplegableOptions';
import Botonovalado from '../components/botones/Botonovalado';
import porcentajeblanco from '../images/porcentajeblanco.svg';
import Desplegableporcentaje from '../components/Desplegableporcentaje';



import '../styles/_percent.scss'

export class Percent extends Component {
  constructor(props) {
    super(props);

    this.updateBotonesMultiplicador = this.updateBotonesMultiplicador.bind(this);
    this.send = this.send.bind(this);

    this.state = {
        botones_multiplicador: {},
        siguiente_disabled: true
    }
  }

  updateBotonesMultiplicador(newBotones) {
    console.log('NEW BOTONES')
    console.log(newBotones)
    this.setState({botones_multiplicador: newBotones});
    console.log(this.state.multiplicador)
    console.log('NEW BOTONES END')

  }
  
  send = () => {
    this.props.history.push('/home');
  }

  render () {
    let multiplicadorpulsado = false
    let siguiente_disabled = this.state.siguiente_disabled
    for (const btn in this.state.botones_multiplicador) {
      if (this.state.botones_multiplicador[btn].clicked == true) {
        multiplicadorpulsado = true
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


      <Desplegableporcentaje />

      <div >
        <p className="porcentaje-txt">Tipo de donación</p>
      </div>

      <div className="desplegable">
        <DesplegableOptions />

      </div>
      <div className="btnguardar">

        <div className="btnguardar-1">
          <Botonovalado pulsar={this.send} texto={'Guardar'} color='btn-ovalado-pink' disabled={siguiente_disabled}/>

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