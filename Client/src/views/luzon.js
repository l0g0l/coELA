import React from 'react';
import Footer from '../components/Footer';
import { useHistory } from 'react-router-dom';
import botondonar from '../images/botondonar.png'
import wifi from '../images/wifi.svg';
import comonosfinanciamos from '../images/comonosfinanciamos.svg';
import comosedistr from '../images/comosedistr.svg';
import acreditacion from '../images/acreditacion.svg';


import '../styles/_luzon.scss'

const Luzon = () => {
  let history = useHistory();
  const sendonedonation = () => {
    history.push("/onedonation");
  }


  return (
    <div className="containerluzon">
      <div className="encabezadocomun1" >
        <img className="encabezadocomun1-wifi" src={wifi} alt="wifi" />

        <div className="encabezadocomun1com" >
          <p className="encabezadocomun1txt-1">Fundación Luzón</p>
        </div>

        <div className="encabezadocomun1txt2">
        <a href="./luzon"  className="encabezadocomun1txt2-2"><p>La Fundación</p></a>
        <a href="./luzonews"  className="encabezadocomun1txt2-1"><p>Noticias</p></a>
        </div>


      </div>
      <p className="txt">Otras formas de colaborar</p>

      <div className="botonesdonaciones">

        <a href="https://ffluzon.org/colabora-ela/hazte-socio/" target="_blank">
          <div className="botondonaciones">
            <p className="botonesdonaciones-1">Hazte socio</p>
          </div>

        </a>


        <a href="https://ffluzon.org/colabora-ela/crea-tu-reto-ela/" target="_blank">
          <div className="botondonaciones">
            <p className="botonesdonaciones-1">Crea tu reto por la ELA</p>
          </div>

        </a>


        <a href="https://ffluzon.org/colabora-ela/hazte-voluntario/" target="_blank">
          <div className="botondonaciones">
            <p className="botonesdonaciones-1">Hazte voluntario</p>
          </div>

        </a>


        <a href="https://ffluzon.org/colabora-ela/celebraciones-solidarias/" target="_blank">
          <div className="botondonaciones">
            <p className="botonesdonaciones-1">Celebraciones solidarias</p>
          </div>

          </a>


          {/* <button type="text" className="botonesdonaciones-2" pulsar={sendluzonreto}>Crea tu reto por la ELA</button>
        <button type="text" className="botonesdonaciones-3" >Hazte Voluntario</button>
        <button type="text" className="botonesdonaciones-4">Celebración solidaria</button>
        */}
      </div>

        <p className="txt">Transparencia</p>
        <p className="txtxs">Saber más</p>

        <div>
          <img src={comonosfinanciamos} alt="" />
        </div>

        <div>
          <img src={comosedistr} alt="" />
        </div>

        <div className="acreditacion">
          <img src={acreditacion} alt="" />
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

export default Luzon