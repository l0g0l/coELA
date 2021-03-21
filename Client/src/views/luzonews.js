import React from 'react';
import Footer from '../components/Footer';
// import Logout from '../components/Logout';
    import wifi from '../images/wifi.svg';
import noticia1 from '../images/noticias/noticia1.svg';
import noticia2 from '../images/noticias/noticia2.svg';
import noticia3 from '../images/noticias/noticia3.svg';
import noticia4 from '../images/noticias/noticia4.svg';
import noticia5 from '../images/noticias/noticia5.svg';
import noticia6 from '../images/noticias/noticia6.svg';
import { useHistory } from 'react-router-dom';
import botondonar from '../images/botondonar.png'

import '../styles/_luzonews.scss'

const Luzonews = () => {
  let history = useHistory();
  const sendonedonation = () => {
    history.push("/onedonation");
  }


  return (
    <div className="containerluzonews">
      <div className="encabezadocomun1" >
        <img className="encabezadocomun1-wifi" src={wifi} alt="wifi" />

        <div className="encabezadocomun1com" >
          <p className="encabezadocomun1txt-1">Fundación Luzón</p>
        </div>

        <div className="encabezadocomun1txt2">
        <a href="./luzon"  className="encabezadocomun1txt2-1"><p>La Fundación</p></a>
        <a href="./luzonews"  className="encabezadocomun1txt2-2"><p>Noticias</p></a>
        </div>

        </div>

        <div className="noticias">
          <img src={noticia1} alt="" className="noticia1"/>
          <img src={noticia2} alt="" className="noticia2"/>
          <img src={noticia3} alt="" className="noticia3"/>
          <img src={noticia4} alt="" className="noticia4"/>
          <img src={noticia5} alt="" className="noticia5"/>
          <img src={noticia6} alt="" className="noticia6"/>
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

export default Luzonews