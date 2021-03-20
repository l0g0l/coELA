import React from 'react';
import Footer from '../components/Footer';
import Encabezadocomun from '../components/Encabezadocomun';
import Botoncuadradopeq from '../components/botones/Botoncuadradopeq';
import Desplegableredondeo from '../components/Desplegableredondeo';
import DesplegableOptions from '../components/DesplegableOptions';
import Botonovalado from '../components/botones/Botonovalado';
import { useHistory } from 'react-router-dom';
import quesitoblanco from '../images/quesitoblanco.svg';

import '../styles/_roundup.scss'


const RoundUp = () => {
  

  let history = useHistory();
  const send = () => {
    history.push("/home");
  }

 
  

  return (
    <div className="containerredondeo">
      <Encabezadocomun texto={'Redondeo de mis compras'} src={quesitoblanco}/>
      <div className="redondeo">
        <p className="redondeo-txt"> Acelerador de solidaridad</p>
      </div>

      <div className="redondeo-btnmed">
        <Botoncuadradopeq valor={'x1'} />
        <Botoncuadradopeq valor={'x2'} />
        <Botoncuadradopeq valor={'x3'} />
      </div>
      <div className="redondeo-txt-2">
        <p>Ejemplo: Si escoges x1 y compras un café de 0,80€ donarás 0,20€</p>
      </div>
  

        <Desplegableredondeo />

      <div >
        <p className="redondeo-txt">Tipo de donación</p>
        </div>

        <div className="desplegable1">
        <DesplegableOptions />

      </div>
      <div className="btnend">
      <Botonovalado  pulsar={send} texto={'Guardar'} color="btn-ovalado-pink" />

      </div>


   
      <Footer />

    </div>
  )
}
export default RoundUp