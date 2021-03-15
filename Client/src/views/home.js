import React from 'react'
import Footer from '../components/Footer'
import ruedecita from '../images/ruedecita.svg';
import fotoperfil from '../images/fotoperfil.svg';
import informacion from '../images/informacion.svg';
import wifi from '../images/wifi.svg';
import imagen1carr from '../images/carrusel/imagen1carr.svg';
import puntos from '../images/carrusel/puntos.svg';
import insignias from '../images/insignias.svg'
import periodica from '../images/botones_config_donac/periodica.svg';
import porcentaje from '../images/botones_config_donac/porcentaje.svg';
import redondeo from '../images/botones_config_donac/redondeo.svg';
import { Link } from 'react-router-dom';






// import Logout from '../components/Logout'

import '../styles/_home.scss'


const Home = () => {


  return (
    <div >
      <div className="encabezadoperfil" >
        <img src={wifi} alt="" />
        <div className="encabezadoperfil-1">

          <img className="encabezado-1-ruedecita" src={ruedecita} alt="icono rudecita configuración" />
        </div>
        <div className="encabezadoperfil-2">
          <p className="encabezadoperfil-txt-1">¡Hola Clara! </p>
          <img className="encabezadoperfil-img" src={fotoperfil} alt="foto perfil" />
        </div>
        <div className="encabezadoperfil-3">
          <p className="encabezadoperfil-txt-2">5.000 Luzones</p>
          <img src={informacion} alt="" />
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
        <Link to="/roundup">
          <button className="configdonaciones-btn" type="text">
            <img className="configdonaciones-btn-1" src={redondeo} alt=""></img>
          </button>
        </Link>

        <Link to="/percent">
          <button className="configdonaciones-btn" type="text">
            <img className="configdonaciones-btn-2" src={porcentaje} alt=""></img></button>
        </Link>

        <Link to="/periodic">
          <button className="configdonaciones-btn" type="text">
            <img className="configdonaciones-btn-3" src={periodica} alt=""></img></button>
        </Link>

      </div>

      {/* <Logout /> */}

      <Footer />

    </div>
  )
}


export default Home