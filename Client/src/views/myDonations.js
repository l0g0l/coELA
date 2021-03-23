import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer';
import ruedecita from '../images/ruedecita.svg';
import fotoperfil from '../images/fotoperfil.svg';
import informacion from '../images/informacion.svg';
import wifi from '../images/wifi.svg';
import popupok from '../images/popupok.png';
import botondonar from '../images/botondonar.png'
import Botonovalado from '../components/botones/Botonovalado'
import Switch from '@material-ui/core/Switch';
import grafico from '../images/misdonaciones/grafico.svg';
import calendario from '../images/misdonaciones/calendario.svg';
import movimientosbanco from '../images/misdonaciones/movimientosbanco.svg';
import { useHistory } from 'react-router-dom';
import Modal from '../components/Modal'
import axios from 'axios';



import '../styles/_popup.scss'
import '../styles/_mydonations.scss'

const baseurl = 'http://localhost:4000/api/user/info';
const axios_jwt = {
  headers: {
     Authorization: "Bearer " + localStorage.getItem('currentJWT')
  }
}




const MyDonations = () => {
  let history1 = useHistory();
  const sendhome = () => {
    history1.push("/home");
  }
  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  const [userdata,setUserData] = useState({});

  useEffect(() => {
    getUserData();
    console.log(userdata)
  }, []);


  const getUserData = async () => {
    const response = await axios.post(baseurl, { user: localStorage.getItem('currentUser')}, axios_jwt)
    setUserData(response.data)
  }



  return (
    <div className="containerencandonation">

      <div className="encabezadoperfil" >
        <img src={wifi} alt="" />
        <div className="encabezadoperfil-01">
          <div className="encabezadocomun1txt" >
            <p className="encabezadocomun1txt-01">Mis Donaciones</p>
          
            <img className="ruedecita" src={ruedecita} alt="icono rudecita configuración" />

            </div>
        </div>
        <div className="encabezadoperfil-2">

          <div className="encabezadoperfil-3">
            <img className="encabezadoperfil-img" src={fotoperfil} alt="foto perfil" />
            <div className="usuarioluzones">
              <p className="encabezadoperfil-txt-1">@{userdata.user}</p>
              <div className="encabezadoperfil-3-3_1">
                <p className="encabezadoperfil-txt-02">{userdata.luzonesTotal || 0} Luzones</p>
                <button className="modalbtn" onClick={toggle}><img src={informacion} alt="" /></button>
                <Modal  close={true} active={active} toggle={toggle}>

                  <img className="imgpopup" src={popupok} alt="" />
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div className="encabezadoperfil-barra">
          <p className="encabezadoperfil-txt-3">Anónimas</p>
          <Switch
            defaultChecked
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }} />
          <p className="encabezadoperfil-txt-3">Públicas</p>

        </div>


      </div>
      <div className="desgravacion">
        <Botonovalado texto={'Conoce tu desgravación de IRPF'} color='btn-ovalado-green ' />
      </div>
      <div className="grafico">
        <img src={grafico} alt="" />
      </div>

      <div className="calendario">
        <img src={calendario} alt="" />
      </div>

      <p className="donaciones-txt"> Últimas donaciones</p>

      <div className="movimientos">
        <img src={movimientosbanco} alt="" />
      </div>


      <div className="footerhome">
        <div className="footerhome-1">
          <img onClick={sendhome} className="footerhome-img" src={botondonar} alt="" />

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default MyDonations