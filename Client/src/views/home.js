import React from 'react'
import Footer from '../components/Footer'
import ruedecita from '../images/ruedecita.svg';
import fotoperfil from '../images/fotoperfil.svg';
import informacion from '../images/informacion.svg';
import wifi from '../images/wifi.svg';
import imagen1carr from '../images/carrusel/imagen1carr.svg';
import puntos from '../images/carrusel/puntos.svg';
import insignias from '../images/insignias.svg'
import botondonar from '../images/botondonar.svg'
import periodica from '../images/botones_config_donac/periodica.svg';
import porcentaje from '../images/botones_config_donac/porcentaje.svg';
import redondeo from '../images/botones_config_donac/redondeo.svg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// import Logout from '../components/Logout'

import '../styles/_home.scss'


const Home = () => {
  let history1 = useHistory();
  const sendperiodic = () => {
    history1.push("/periodic");
  }
  let history2 = useHistory();
  const sendpercent = () => {
    history2.push("/percent");
  }
  let history3 = useHistory();
  const sendroundup = () => {
    history3.push("/roundup");
  }
  let history4 = useHistory();
  const sendonedonation = () => {
    history4.push("/onedonation");
  }



  return (
    <div >
      <div className="encabezadoperfil" >
        <img src={wifi} alt="" />
        <div className="encabezadoperfil-1">

          <img className="encabezado-1-ruedecita" src={ruedecita} alt="icono rudecita configuración" />
        </div>
        <div className="encabezadoperfil-2">
         
          <div className="encabezadoperfil-3">
          <p className="encabezadoperfil-txt-1">¡Hola Clara! </p>
          <div className="encabezadoperfil-3-3_1">
          <p className="encabezadoperfil-txt-2">5.000 Luzones</p>
          <img src={informacion} alt="" />

          </div>
        
        </div>
          <img className="encabezadoperfil-img" src={fotoperfil} alt="foto perfil" />
        </div>

       
      </div>

      <div className="carrusel">
        <img className="carrusel-1" src={imagen1carr} alt="imagen carrusel" />
        <img className="carrusel-2" src={puntos} alt="imagen carrusel" />


      </div>

      <div className="insignias">
        <img className="insignias-1" src={insignias} alt="insignias" />
      </div>

      <div className="txthome">
        <p className="txthome-1">Configurar mis métodos de donación</p>
      </div>

      <div className="configdonaciones">

     
          <img onClick={sendroundup} className="configdonaciones-btn-1" src={redondeo} alt=""></img>
       

          <img onClick={sendpercent}  className="configdonaciones-btn-1" src={redondeo} alt=""></img>

          <img onClick={sendperiodic} className="configdonaciones-btn-1" src={redondeo} alt=""></img>

  

      </div>

      {/* <Logout /> */}
      <div className="footerhome">
        <img onClick={sendonedonation}className="footerhome-img" src={botondonar} alt=""/>
      <Footer />
      </div>

     

    </div>
  )
}


export default Home