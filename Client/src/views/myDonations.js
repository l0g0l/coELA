import React from 'react';
import Footer from '../components/Footer';
// import Logout from '../components/Logout';
import ruedecita from '../images/ruedecita.svg';
import fotoperfil from '../images/fotoperfil.svg';
import informacion from '../images/informacion.svg';
import wifi from '../images/wifi.svg';
import botondonar from '../images/botondonar.svg';
import Botonovalado from '../components/botones/Botonovalado'
import Switch from '@material-ui/core/Switch';
import grafico from '../images/misdonaciones/grafico.svg';
import calendario from '../images/misdonaciones/calendario.svg';
// import wifi from '../images/misdonaciones/grafico.svg';
import movimientosbanco from '../images/misdonaciones/movimientosbanco.svg';
import { useHistory } from 'react-router-dom';



import '../styles/_mydonations.scss'

const MyDonations = () => {
  let history1 = useHistory();
  const sendhome = () => {
    history1.push("/home");
  }

  return (
    <div>

      <div className="encabezadoperfil" >
        <img src={wifi} alt="" />
        <div className="encabezadoperfil-1">

          <img className="encabezado-1-ruedecita" src={ruedecita} alt="icono rudecita configuración" />
        </div>
        <div className="encabezadoperfil-2">

          <div className="encabezadoperfil-3">
            <p className="encabezadoperfil-txt-1">¡Hola Clara! </p>
            <div className="encabezadoperfil-3-3_1">
              <p className="encabezadoperfil-txt-2">5.000 Luzones</p>
              <img src={informacion} alt="" />

            </div>

          </div>
          <img className="encabezadoperfil-img" src={fotoperfil} alt="foto perfil" />
        </div>
        <div className="encabezadoperfil-barra">
          <p className="encabezadoperfil-txt-3">Anónimas</p>
          <Switch
            defaultChecked
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }} />
          <p className="encabezadoperfil-txt-3">Anónimas</p>

        </div>


      </div>
      <div className="desgravacion">
        <Botonovalado texto={'Conoce tu desgravación de IRPF'} color='btn-ovalado-green ' />
      </div>
      <div className="grafico">
        <img src={grafico} alt=""/>
      </div>

    <div className="calendario">
    <img src={calendario} alt=""/>
    </div>

    <p className="donaciones-txt"> Últimas donaciones</p>

    <div className="movimientos">
    <img src={movimientosbanco} alt=""/>
    </div>


      {/* <Logout /> */}
      <div className="footerhome">
        <img onClick={sendhome} className="footerhome-img" src={botondonar} alt=""/>
      <Footer />
      </div>
    </div>
  )
}

export default MyDonations