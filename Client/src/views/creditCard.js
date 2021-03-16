import Footer from '../components/Footer'
import Flecha from '../components/Flecha.js';
import wifi from '../images/wifi.svg';
import mastercard from '../images/mastercard.svg';
import tarjetacreditopage from '../images/tarjetacreditopage.svg';
import '../styles/_creditCard.scss'



import React from 'react'
import Botonovalado from '../components/botones/Botonovalado';

function CreditCard() {
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
                <form action="!#">
                <p className="encabezado-txt-tarjeta">Tarjeta bancaria</p>
                <img src={tarjetacreditopage} alt=""/>
                </form>
            </div>

            <div className="tarjeta">
                <div className="tarjeta-input">
                    <p className="tarjeta-input-txt">Titular</p>
                    <input type="text" className="tarjeta-input-txt-1" />
                    <input className="encabezado-txt-tarjeta-mastercard-1" type="image" src={mastercard}/>

                </div>

                <div className="tarjeta-input">
                    <p className="tarjeta-input-txt">Número de tarjeta</p>
                    <input src={mastercard} type="text" className="tarjeta-input-txt-2"></input>
                </div>
                <div className="tarjeta-input-div">
                    <div className="tarjeta-input">
                        <p className="tarjeta-input-div-txt">Fecha de caducidad</p>
                        <input type="text" className="tarjeta-input-div-3" />
                    </div>

                    <div className="tarjeta-input">
                        <p className="tarjeta-input-div-txt">CVC</p>
                        <input type="text" className="tarjeta-input-div-4" />
                    </div>
                </div>
                <Botonovalado />
            </div>

        <Footer />
        </div>
    )
}

export default CreditCard

