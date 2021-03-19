import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
// import Logout from '../components/Logout';
import doshojitas from '../images/doshojitas.svg'
import cientificos from '../images/cientificos.svg'
import wifi from '../images/wifi.svg';

import '../styles/_thanks.scss'

const Thanks = () => {
  let history = useHistory();
  const send = () => {
    history.push("/home");
  }

  //   componentDidMount() {
  //     if (!cookies.get('username')) {
  //         window.location.href = "/login"
  //     }
  // }
  return (


    <div className="thanks">
      <img className="encabezado-wifi" src={wifi} alt="" />
      <div className="thanks-fondo">
        <div className="thanks-hojitas">
          <img className="thanks-hojitas-img" src={doshojitas} alt="" />
        </div>

        <p className="thanks-txt-1"> ¡Clara muchas gracias por tu donación y por lo que nos ayudas a conseguir!</p>
        <p className="thanks-txt-2">+100 Luzones</p>

        <div className="thanks-cientificos-img">
          <img src={cientificos} alt="" />
          </div>
          <button className="thanks-fondo-btn" type="submit" onClick={send}>Cerrar</button>
          
      </div>  


      {/* <Logout /> */}
      <Footer />

    </div>
  )
}
export default Thanks