import React from 'react'
import Footer from '../components/Footer'
import Botonovalado from '../components/botones/Botonovalado'
// import Logout from '../components/Logout'
import Flecha from '../components/Flecha';
import { useHistory } from 'react-router-dom';
import '../styles/_oneDonation.scss'


const OneDonation = () => {

  let history = useHistory();
  const send = () => {
    history.push("/roundup");
  }

  return (
    <div>
      <div className="encabezado" >
        <Flecha />
        <p className="encabezado-txt-1">Hacer una donación ahora</p>
      </div>

      <div className="screen">
        <p className="screen-txt-1">Indica la cantidad</p>

        <div className="screen-btn">


        </div>





      </div>

      {/* <Botonovalado pulsar={send} valor="Siguiente" color="btn-ovalado-pink" /> */}

      {/* <Logout /> */}
      <Footer />

    </div>
  )
}


export default OneDonation