import React from 'react';
import Flecha from '../components/Flecha';
import wifi from '../images/wifi.svg';
import quesitoblanco from '../images/quesitoblanco.svg';

import '../styles/_roundup.scss'

const Encabezadocomun = () => {

  return (
    <div>

      <div className="encabezadocomun" >
        <img className="encabezado-wifi" src={wifi} alt="wifi" />
        <div className="encabezado-2">
          <Flecha />
          <p className="encabezado-txt-1">Redondeo de mis compras</p>
        </div>
        <div className="encabezadocomun-img" >
        <img className="encabezadocomun-img-1" src={quesitoblanco} alt=""/>
        </div>
       
      </div>

    </div>
  )
}
export default Encabezadocomun