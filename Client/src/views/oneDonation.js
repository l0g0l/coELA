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


import '../styles/_oneDonation.scss'



const OneDonation = () => {


  let history = useHistory();
  const send = () => {
    history.push("/roundup");
  }

  return (

    <div>
     
      <div className="encabezado" >
     
        <img className="encabezado-wifi" src={wifi} alt=""/>
       
        <div className="encabezado-2">
        <Flecha />
        <p className="encabezado-txt-1">Hacer una donación ahora</p>
        </div>
      </div>


      <div className="txt">
        <p className="txt-1">Indica la cantidad</p>
        <img src={informacion} alt="icono de información"/>
      </div>

      <div className="screen1">
        <div className="screen2">
          <div className="screen-btnrgr">
            <Botoncuadradogr />

          </div>

          <div className="screen-btnrgr">
            <Botoncuadradogr />

          </div>

          <div className="screen-btnrgr">
            <Botoncuadradogr />
          </div>

        </div>
        <div className="screen-btnrect"> 
          <Botonrect /> 
        </div>
      </div>

      <div className="txt-2">
        <p>Elige el método de donación</p>
      </div>
        <div className="screen-3">
          <div >
            <Botoncuadradomed />

          </div>

          <div>
            <Botoncuadradomed />

          </div>

          <div>
            <Botoncuadradomed />

          </div>

        </div>
        <div className="transferencia">
          <p className="txt-3">Transferencia bancaria</p>
          <Botondespleg/>
        </div>

   

      <div className="btn-ovalado">
        <Botonovalado pulsar={send} valor="Siguiente" color="btn-ovalado-pink" />
      </div>

      {/* <Logout /> */}
      <Footer />

    </div>
  )
}


export default OneDonation