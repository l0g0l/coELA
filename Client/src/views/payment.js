import React from 'react'
import Botonovalado from '../components/botones/Botonovalado';
import Footer from '../components/Footer'
import Flecha from '../components/Flecha.js';
import wifi from '../images/wifi.svg';
import mastercard from '../images/mastercard.svg';
import tarjetacreditopage from '../images/tarjetacreditopage.svg';
import { useHistory } from 'react-router-dom';

import '../styles/_payment.scss'


function Payment() {
    let history1 = useHistory();
    const sendthanks = () => {
      history1.push("/thanks");
    }

    return (
        <div>
            <div className="encabezado" >

                <img className="encabezado-wifi" src={wifi} alt="" />

                <div className="encabezado-2">
                    <Flecha />
                    <p className="encabezado-txt-1">Hacer una donación ahora</p>
                </div>
            </div>

            <div className="encabezado-txt">
                <p className="encabezado-txt-tarjeta">Tarjeta bancaria</p>
                <img src={tarjetacreditopage} alt="" />

            </div>

            <div className="tarjeta">

                <p className="tarjeta-input-txt">Titular</p>
                <div className="tarjeta-input">
                    <input type="text" className="tarjeta-input-txt-1" />
                    <img className="tarjeta-input-mastercard" src={mastercard} />
                </div>

                <div >
                    <p className="tarjeta-input-txt">Número de tarjeta</p>
                    <input src={mastercard} type="text" className="tarjeta-input-txt-2"></input>
                </div>

                <div className="div">

                    <div className="div-1">
                        <p className="div-1-p">Fecha de caducidad</p>
                        <input type="text" className="div-1-in" />

                    </div>


                    <div className="div-2">
                        <p className="div-2-p">CVC</p>
                        <input type="text" className="div-2-in" />
                    </div>
                   
                </div>
                <div className="btnguardar">
                        <Botonovalado pulsar={sendthanks} texto={'Siguiente'} color='btn-ovalado-pink '/>
                    </div>

                <Footer />
            </div> 
    </div>        
    )
}

export default Payment

