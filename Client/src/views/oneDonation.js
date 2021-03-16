import React from 'react'
import Footer from '../components/Footer'
import Botonovalado from '../components/botones/Botonovalado'
// import Logout from '../components/Logout'
import Flecha from '../components/Flecha';
import { useHistory } from 'react-router-dom';
import Botoncuadradogr from '../components/botones/Botoncuadradogr';
import Botoncuadradomed from '../components/botones/Botoncuadradomed';
import Botondespleg from '../components/botones/Botondespleg';
import Botonrect from '../components/botones/Botonrect.js';
import informacion from '../images/informacion.svg';
import wifi from '../images/wifi.svg';
import flor1 from '../images/flor1.svg';
import flor2 from '../images/flor2.svg';
import flor3 from '../images/flor3.svg';
import tarjeta from '../images/tarjeta.svg';
import paypal from '../images/paypal.svg';
import bitcoin from '../images/bitcoin.svg';

import '../styles/_oneDonation.scss'



const OneDonation = () => {


  let history = useHistory();
  const send = () => {
    history.push("/roundup");
  }
  let history2 = useHistory();
  const sendcreditcard = () => {
    history2.push("/payment");
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
        <img src={informacion} alt="icono de información" />
      </div>

      <div className="screen1">
        <div className="screen2">
         
            <Botoncuadradogr valor={'5€'} imagen={flor1} pulsar={send}/>
            <Botoncuadradogr valor={'25€'} imagen={flor2} pulsar={send}/>
            <Botoncuadradogr valor={'50€'} imagen={flor3} pulsar={send}/>
        </div>
    
       <div className="screen-btnrect">
          <Botonrect texto={'Otra cantidad'}/>
        </div>


      </div>

      <div className="txt-2">
        <p>Elige el método de donación</p>
      </div>
      <div className="screen-3">
       
          <Botoncuadradomed imagen={tarjeta} texto={'Tarjeta'} pulsar={sendcreditcard}/>
          <Botoncuadradomed imagen={paypal} texto={'Paypal'}  />
          <Botoncuadradomed imagen={bitcoin}  texto={'Bitcoin'} />


      </div>
      <div className="transferencia">
        <p className="txt-3">Transferencia bancaria</p>
        <Botondespleg />
      </div>



      <div className="btn-ovalado">
        <Botonovalado pulsar={send} texto="Siguiente" color="btn-ovalado-pink" />
      </div>

      {/* <Logout /> */}
      <Footer />

    </div>
  )
}


export default OneDonation