import React from 'react';
import Footer from '../components/Footer';
import Encabezadocomun from '../components/Encabezadocomun';
// import Logout from '../components/Logout';
import { useHistory } from 'react-router-dom';
import Botoncuadradopeq from '../components/botones/Botoncuadradopeq';
import Botonrect from '../components/botones/Botonrect.js';
import DesplegableOptions from '../components/DesplegableOptions';
import Botonovalado from '../components/botones/Botonovalado';
import porcentajeblanco from '../images/porcentajeblanco.svg';


import '../styles/_percent.scss'


const Percent = () => {

  let history1 = useHistory();
  const sendhome = () => {
    history1.push("/home");
  }
  let history2 = useHistory();
  const sendhome2 = () => {
    history2.push("/home");
  }


  return (
    <div>
      <Encabezadocomun texto={'Porcentaje de la nómina'} src={porcentajeblanco} />
      <div className="porcentaje">
        <p className="porcentaje-txt"> Acelerador de solidaridad</p>
      </div>

      <div className="porcentaje-btnmed">
        <Botoncuadradopeq valor={'0,5%'} />
        <Botoncuadradopeq valor={'1%'} />
        <Botoncuadradopeq valor={'2%'} />
      </div>
      <div className="porcentaje-btnrect">
        <Botonrect texto={'Otro porcentaje'} />
      </div>

      <div className="porcentaje-txt-2">
        <p>Ejemplo: Si configuras el 0,5% y tienes una nómina de 1000€, donarás 5€</p>
      </div>
       <div >
        <p className="porcentaje-txt">Tipo de donación</p>
        </div>

        <div className="desplegable">
        <DesplegableOptions />

      </div>
      <div className="btnguardar">

        <div className="btnguardar-1">
          <Botonovalado pulsar={sendhome} texto={'Guardar'} color='btn-ovalado-pink' />

        </div>

        <div className="btnguardar-1">
          <Botonovalado pulsar={sendhome2} texto={'Desactivar'} color='btn-ovalado-white' />

        </div>
      </div>

      {/* <Logout /> */}
      <Footer />

    </div>
  )
}
export default Percent