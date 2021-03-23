import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Footer from '../components/Footer'
import fotoperfil from '../images/fotoperfil.svg';
import informacion from '../images/informacion.svg';
import wifi from '../images/wifi.svg';
import popupok from '../images/popupok.png';
import imagen1carr from '../images/carrusel/imagen1carr.svg';
import imagen2carr from '../images/carrusel/imagen2carr.svg';
import imagen3carr from '../images/carrusel/imagen3carr.svg';
import insignias from '../images/insignias.svg'
import botondonar from '../images/botondonar.png'
import boton1 from '../images/boton1.png';
import boton2ok from '../images/boton2ok.png';
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

const baseurl = 'http://localhost:4000/api/user/info';
const axios_jwt = {
  headers: {
     Authorization: "Bearer " + localStorage.getItem('currentJWT')
  }
}

const Home = () => {

  const [userdata,setUserData] = useState({});

  useEffect(() => {
    getUserData();
    // console.log(userdata)
  }, []);


  const getUserData = async () => {
    const response = await axios.post(baseurl, { user: localStorage.getItem('currentUser')}, axios_jwt)
    setUserData(response.data)
  }



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

  const [active, setActive] = useState(false)
 
  const toggle = () => {
    setActive(!active)
  }

  return (
    <div >
      <div className="encabezadoperfil" >
        <img src={wifi} alt="" />
        <div className="encabezadoperfil-1">

        </div>
        <div className="encabezadoperfil-2">

          <div className="encabezadoperfil-3">
            <img className="encabezadoperfil-img" src={fotoperfil} alt="foto perfil" />
            <div className="usuarioluzones">
              <p className="encabezadoperfil-txt-11">¡Hola {userdata.name}! </p>
              <div className="encabezadoperfil-3-3_1">
                <p className="encabezadoperfil-txt-02">{userdata.luzonesTotal || 0} Luzones</p>
                <button className="modalbtn" onClick={toggle}><img src={informacion} alt="información" /></button>
                <Modal close={true} active={active} toggle={toggle}>

                  <img className="imgpopup" src={popupok} alt="" />
                </Modal>

              </div>

            </div>


          </div>

        </div>


      </div>

      <div>

        <Carousel breakPoints={breakPoints} showArrows={false}>
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
        <img onClick={sendpercent} className="configdonaciones-btn-1" src={boton2ok} alt="" />
        <img onClick={sendperiodic} className="configdonaciones-btn-1" src={boton3} alt=""/>


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