import React, {useState} from 'react'
import Footer from '../components/Footer'
import fotoperfil from '../images/fotoperfil.svg';
import informacion from '../images/informacion.svg';
import wifi from '../images/wifi.svg';
import popup from '../images/popup.svg';
import imagen1carr from '../images/carrusel/imagen1carr.svg';
import imagen2carr from '../images/carrusel/imagen2carr.svg';
import imagen3carr from '../images/carrusel/imagen3carr.svg';
import insignias from '../images/insignias.svg'
import botondonar from '../images/botondonar.png'
import boton1 from '../images/boton1.png';
import minomina from '../images/minomina.png';
import boton3 from '../images/boton3.png';
import { useHistory } from 'react-router-dom';
import Carousel from "react-elastic-carousel";

import Modal from '../components/Modal'

import '../styles/_popup.scss'
import '../styles/_home.scss'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },

];

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

  const [active,setActive]= useState(false)
  const toggle = () => {
      setActive (!active)
  }



  return (
    <div >
      <div className="encabezadoperfil" >
        <img src={wifi} alt="" />
        <div className="encabezadoperfil-1">

          {/* <img className="encabezado-1-ruedecita" src={ruedecita} alt="icono rudecita configuración" /> */}
        </div>
        <div className="encabezadoperfil-2">

          <div className="encabezadoperfil-3">
            <p className="encabezadoperfil-txt-1">¡Hola Clara! </p>
            <div className="encabezadoperfil-3-3_1">
              <p className="encabezadoperfil-txt-02">5.000 Luzones</p>
              <button className="modalbtn" onClick= {toggle}><img src={informacion} alt="" /></button>
              <Modal active ={active} toggle={toggle}>

              <img src={popup} alt=""/>
              </Modal>

            </div>

          </div>
          <img className="encabezadoperfil-img" src={fotoperfil} alt="foto perfil" />
        </div>


      </div>

      <div>

        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={imagen1carr} alt="" /></div>
          <div className="item"><img src={imagen2carr} alt="" /></div>
          <div className="item"><img src={imagen3carr} alt="" /></div>

        </Carousel>
      </div>

      <div className="insignias">
        <img className="insignias-1" src={insignias} alt="insignias" />
      </div>

      <div className="txthome">
        <p className="txthome-1">Configurar mis métodos de donación</p>
      </div>

      <div className="configdonaciones">

        <img onClick={sendroundup} className="configdonaciones-btn-1" src={boton1} alt="" />
        <img onClick={sendpercent} className="configdonaciones-btn-1" src={minomina} alt="" />
        <img onClick={sendperiodic} className="configdonaciones-btn-1" src={boton3} />


      </div>


      <div className="footerhome">
        <div className="footerhome-1">
          <img onClick={sendonedonation} className="footerhome-img" src={botondonar} alt="" />

        </div>

      </div>

      <Footer />

    </div>
  )
}


export default Home