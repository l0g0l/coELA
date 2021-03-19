import React from 'react';
import Footer from '../components/Footer';
import Encabezadocomun from '../components/Encabezadocomun';
// import Logout from '../components/Logout';
import { useHistory } from 'react-router-dom';
import Botoncuadradopeq from '../components/botones/Botoncuadradopeq';
import DesplegableOptions from '../components/DesplegableOptions';
import Botonovalado from '../components/botones/Botonovalado';
import euro from '../images/euro.svg';
import Desplegableporcentaje from '../components/Desplegableporcentaje'
import flor1 from '../images/flor1.svg';
import calendarioblanco from '../images/calendarioblanco.svg';



import '../styles/_periodic.scss'


const Periodic = () => {


  let history1 = useHistory();
  const sendhome = () => {
    history1.push("/home");
  }
  let history2 = useHistory();
  const sendhome2 = () => {
    history2.push("/home");
  }

  return (
    <div className="containerperiodica">
      <Encabezadocomun texto={'Donación periódica'} src={calendarioblanco} />

      <div className="periodica">
        <img className="periodica-img" src={flor1} alt="" />
        <input className="periodica-input" type="text" />
        {/* <img className="periodica-img-2" src={euro} alt="" /> */}

      </div>

      <div className="periodica-btnmed">
        <Botoncuadradopeq valor={'Día'} />
        <Botoncuadradopeq valor={'Semana'} />
        <Botoncuadradopeq valor={'Mes'} />
      </div>

      <div className="periodica-txt-2">
        <p>Otros usuarios de la comunidad con tus mismas características donan una media de 1€ al día</p>
      </div>
      <div  className="txt-despleg1">
        <p>Calcula tu desgravación</p>

        </div>

      <Desplegableporcentaje />

      <div >
        <p className="periodica-txt">Tipo de donación</p>
      </div>

      <div className="desplegable2">
        <DesplegableOptions />

      </div>

      <div className="btnguardar">

        <div className="btnguardar-1">
          <Botonovalado pulsar={sendhome} texto={'Guardar'} color='btn-ovalado-pink' />

        </div>

        <div >
          <button className="btndesactivar">Desactivar</button>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Periodic