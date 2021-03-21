import React from 'react'
import Botonovalado from '../components/botones/Botonovalado';
import Footer from '../components/Footer'
import flecha2 from '../images/flecha2.png';
import wifi from '../images/wifi.svg';
import mastercard from '../images/mastercard.svg';
import { useHistory } from 'react-router-dom';
// import Botoncuadradogr from '../components/botones/Botoncuadradogr';
import botoncuadradogr from '../images/botoncuadradogr.svg';
import flor2 from '../images/flor2.svg';


import '../styles/_payment.scss'


function Payment() {
    let history1 = useHistory();
    const sendthanks = () => {
        history1.push("/thanks");
    }

    return (
        <div className="containerpayment">
            <div className="encabezadocomun" >

                <img className="encabezado-wifi" src={wifi} alt="" />

                <div className="encabezado-2">
                    <a href="./onedonation"><img  className="flecha"  src={flecha2} alt=""/></a>  

                    <p className="encabezado-txt-1">Hacer una donación ahora</p>
                </div>
            </div>

            <p className="txt-tarjeta">Vas a donar</p>

            <div className="encabezadocomun-txt">
            {/* <Botoncuadradogr valor={'25€'} imagen={flor2}/> */}
            <img className="botongr" src={botoncuadradogr} alt="" />

            </div>
            <p className="txt-tarjeta-1">Introduce tu tarjeta bancaria</p>
            <div className="tarjeta">

                <p className="tarjeta-input-txt">Titular</p>
                <div className="tarjeta-input">
                    <input type="text" className="tarjeta-input-txt-1" placeholder="Clara Smith García" />
                    <img className="tarjeta-input-mastercard" src={mastercard} />
                </div>

                <div className="div">
                    <div>
                    <p className="tarjeta-input-txt-tarj">Número de tarjeta</p>
                    <input src={mastercard} type="text" className="tarjeta-input-txt-2" placeholder="**** **** **** 4747"></input>
                    </div>

              

                    <div className="div-1">
                        <p className="div-1-p">Caducidad</p>
                        <input type="text" className="div-1-in" placeholder="07/21" />

                    </div>


                    <div className="div-2">
                        <p className="div-2-p">CVC</p>
                        <input type="text" className="div-2-in" placeholder="4*4" />
                    </div>

                </div>
                <div className="btnguardar">
                    <Botonovalado func={sendthanks} texto={'Dona'} color='btn-ovalado-pinkpercent ' />
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Payment

