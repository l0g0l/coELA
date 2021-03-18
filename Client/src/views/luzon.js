import React from 'react';
import Footer from '../components/Footer';
import { useHistory } from 'react-router-dom';
import botondonar from '../images/botondonar.svg'
import wifi from '../images/wifi.svg';
import comonosfinanciamos from '../images/comonosfinanciamos.svg';
import comosedistr from '../images/comosedistr.svg';
import acreditacion from '../images/acreditacion.svg';



import '../styles/_luzon.scss'

const Luzon = () => {
  let history = useHistory();
  const sendluzonews = () => {
    history.push("/luzonews");
  }
  let history1 = useHistory();
  const sendluzonsocio = () => {
    history1.push("https://ffluzon.org/colabora-ela/hazte-socio/");
  }
  let history2 = useHistory();
  const sendluzonreto = () => {
    history2.push("https://ffluzon.org/colabora-ela/crea-tu-reto-ela/");
  }
  let history3 = useHistory();
  const sendluzonvoluntario = () => {
    history3.push("https://ffluzon.org/colabora-ela/hazte-voluntario/");
  }
  let history4 = useHistory();
  const sendluzoncelebracion = () => {
    history4.push("https://ffluzon.org/colabora-ela/celebraciones-solidarias/");
  }



  return (
    <div>
      <div className="encabezadocomun1" >
        <img className="encabezadocomun1-wifi" src={wifi} alt="wifi" />

        <div className="encabezadocomun1txt" >
          <p className="encabezadocomun1txt-1">Fundación Luzón</p>
        </div>

        <div className="encabezadocomun1txt2">
          <p className="encabezadocomun1txt2-2">La Fundación</p>
          <p className="encabezadocomun1txt2-1">Noticias</p>
        </div>
      </div>
      <p className="txt">Otras formas de colaborar</p>

      <div className="botonesdonaciones">
        {/* <button type="text" className="botonesdonaciones-1" ><a href="https://ffluzon.org/colabora-ela/hazte-socio/"></a>Hazte socio</button> */}
        <a href="https://ffluzon.org/colabora-ela/hazte-socio/"><p className="botonesdonaciones-1">Hazte socio</p></a>
        <button type="text" className="botonesdonaciones-2" pulsar={sendluzonreto}>Crea tu reto por la ELA</button>
        <button type="text" className="botonesdonaciones-3" >Hazte Voluntario</button>
        <button type="text" className="botonesdonaciones-4">Celebración solidaria</button>
       
      </div>

      <p className="txt">Transparencia</p>  
      <p className="txtxs">Saber más</p>

      <div>
        <img src={comonosfinanciamos} alt=""/>
      </div>

      <div>
        <img src={comosedistr} alt=""/>
      </div>

      <div className="acreditacion">
        <img  src={acreditacion} alt=""/>
      </div>



      {/*   
      <Logout /> */}

      <div className="footerhome">
        <img onClick={sendluzonews} className="footerhome-img" src={botondonar} alt="" />
        <Footer />
      </div>


    </div>
  )
}

export default Luzon