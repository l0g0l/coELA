import React from 'react';
import Footer from '../components/Footer';
import Logout from '../components/Logout';
import logoluzon from '../images/logoluzon.svg';
import wifi from '../images/wifi.svg';


import '../styles/style.scss'

const Luzon = () => {


  return (
    <div>
      <div className="encabezadocomun" >
        <img className="encabezado-wifi" src={wifi} alt="wifi" />
       
        <div className="encabezadocomun-img" >
          <img className="encabezadocomun-img-1" src={logoluzon} alt="" />
        </div>

      </div>



{/*   
      <Logout /> */}
      <Footer />

    </div>
  )
}

export default Luzon