import React from 'react';
import Botonovaladopeq from '../components/botones/Botonovaladopeq';
import Footer from '../components/Footer';
// import Logout from '../components/Logout';
import logoluzon from '../images/logoluzon.svg';
import wifi from '../images/wifi.svg';
import { useHistory } from 'react-router-dom';
import botondonar from '../images/botondonar.svg'




import '../styles/_luzon.scss'

const Luzon = () => {
  let history = useHistory();
  const sendonedonation = () => {
    history.push("/onedonation");
  }


  return (
    <div>
      <div className="encabezadocomun1" >
        <img className="encabezadocomun1-wifi" src={wifi} alt="wifi" />

        <div className="encabezadocomun1-img" >
          <img className="encabezadocomun1-img-1" src={logoluzon} alt="" />
        </div>

        <div className="encabezadocomun1-btn">
          <Botonovaladopeq color='btn-peq-white' texto='La Fundación' />
          <Botonovaladopeq color='btn-peq-green' texto='Noticias' />
        </div>

      </div>
      {/*   
      <Logout /> */}

      <div className="footerhome">
        <img onClick={sendonedonation} className="footerhome-img" src={botondonar} alt="" />
        <Footer />
      </div>


    </div>
  )
}

export default Luzon