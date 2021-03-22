import React, {useState, useEffect, Component} from 'react'
import Footer from '../components/Footer'
import Flecha from '../components/Flecha';
import { useHistory } from 'react-router-dom';
import Botoncuadradogr from '../components/botones/Botoncuadradogr';
import Botonovalado from '../components/botones/Botonovalado';
import Botoncuadradomed from '../components/botones/Botoncuadradomed';
import Botondespleg from '../components/botones/Botondespleg';
import Botonrect from '../components/botones/Botonrect.js';
import wifi from '../images/wifi.svg';
import flor1 from '../images/flor1.svg';
import flor2 from '../images/flor2.svg';
import flor3 from '../images/flor3.svg';
import tarjeta from '../images/tarjeta.svg';
import paypal from '../images/paypal.svg';
import bitcoin from '../images/bitcoin.svg';

import '../styles/_oneDonation.scss'


export class OneDonation extends Component {
  constructor(props) {
    super(props);

    this.updateBotonesDinero = this.updateBotonesDinero.bind(this);
    this.updateBotonesMetodo = this.updateBotonesMetodo.bind(this);
    this.send = this.send.bind(this);
    this.sendcreditcard = this.sendcreditcard.bind(this);

    this.state = {
        botones_dinero: {},
        botones_metodo: {},
        siguiente_disabled: true
    }
  }

  updateBotonesDinero(newBotones) {
    // console.log('NEW BOTONES')
    // console.log(newBotones)
    this.setState({botones_dinero: newBotones});
    // console.log(this.state.botones_dinero)
    // console.log('NEW BOTONES END')

  }

  updateBotonesMetodo(newBotones) {
    console.log('NEW BOTONES METODO')
    console.log(newBotones)
    this.setState({botones_metodo: newBotones});
    console.log(this.state.botones_metodo)
    console.log('NEW BOTONES METODO END')

  }

  componentDidUpdate(prevProps) {
    // console.log(`COMPONENTDIDUPDATE ONEDONATION`)

  }
    

  
  sendcreditcard = () => {
    this.props.history.push('/payment');
  }
  send = () => {
    this.props.history.push('/payment');
  }

  render () {
    let dineropulsado = false
    let metodopulsado = false
    let siguiente_disabled = this.state.siguiente_disabled
    for (const btn in this.state.botones_dinero) {
      if (this.state.botones_dinero[btn].clicked == true) {
        dineropulsado = true
      }
    }
    for (const btn in this.state.botones_metodo) {
      if (this.state.botones_metodo[btn].clicked == true) {
        metodopulsado = true
      }
    }
    if (dineropulsado && metodopulsado) {
      siguiente_disabled = false
    }
    return (
      <div>

        <div className="encabezado" >

          <img className="encabezado-wifi" src={wifi} alt="" />

          <div className="encabezado-2">
            <Flecha />
            <p className="encabezado-txt-1">Hacer una donación ahora</p>
          </div>
        </div>


        <div className="txt">
          <p className="txt-1">Indica la cantidad</p>
        </div>

        <div className="screen1">
          <div className="screen2">

            <Botoncuadradogr valor={'5€'} imagen={flor1} state={this.state.botones_dinero} set_state={this.updateBotonesDinero} btn_id={1} />
            <Botoncuadradogr valor={'25€'} imagen={flor2} state={this.state.botones_dinero} set_state={this.updateBotonesDinero} btn_id={2} />
            <Botoncuadradogr valor={'50€'} imagen={flor3} state={this.state.botones_dinero} set_state={this.updateBotonesDinero} btn_id={3} />
          </div>

          <div className="screen-btnrect">
            <Botonrect texto={'Otra cantidad'} />
          </div>


        </div>

        <div className="txt-2">
          <p>Elige el método de donación</p>
        </div>
        <div className="screen-3">

          <Botoncuadradomed imagen={tarjeta} texto={'Tarjeta'} state={this.state.botones_metodo} set_state={this.updateBotonesMetodo} btn_id={1}/>
          <Botoncuadradomed imagen={paypal} texto={'Paypal'}  state={this.state.botones_metodo} set_state={this.updateBotonesMetodo} btn_id={2}/>
          <Botoncuadradomed imagen={bitcoin} texto={'Bitcoin'}  state={this.state.botones_metodo} set_state={this.updateBotonesMetodo} btn_id={3}/>


        </div>
        <div className="transferencia">
          <p className="txt-3">Transferencia bancaria</p>
          <Botondespleg />
        </div>


        <div className="btn-ovalado">
          <Botonovalado func={this.send} texto="Siguiente" color="btn-ovalado-pink" disabled={siguiente_disabled} />
        </div>



        <Footer />

      </div>
    )

  }
}


export default OneDonation