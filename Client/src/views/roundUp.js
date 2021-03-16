import React from 'react';
import Footer from '../components/Footer';
import Encabezadocomun from '../components/Encabezadocomun';
import Botoncuadradopeq from '../components/botones/Botoncuadradopeq';
import Botondespleg from '../components/botones/Botondespleg';


// import Logout from '../components/Logout';

import '../styles/_roundup.scss'
import Desplegable from '../components/Desplegable';

const RoundUp = () => {

  return (
    <div>
      <Encabezadocomun />
      <div className="redondeo">
        <p className="redondeo-txt"> Acelerador de solidaridad</p>
      </div>

      <div className="redondeo-btnmed">
        <Botoncuadradopeq />
        <Botoncuadradopeq />
        <Botoncuadradopeq />
      </div>
      <div className="redondeo-txt-2">
        <p>Ejemplo: Si escoges x1 y compras un café de 0,80€ donarás 0,20€</p>
      </div>

      
    <Desplegable />

     


      <div className="redondeo-txt">
        <p>Tipo de donación</p>
        <Botondespleg />
      </div>



      {/* <Logout /> */}
      <Footer />

    </div>
  )
}
export default RoundUp