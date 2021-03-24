import React, { useState } from 'react';
import Botonovalado from '../components/botones/Botonovalado';
import Footer from '../components/Footer'
import flecha2 from '../images/flecha2.png';
import wifi from '../images/wifi.svg';
import mastercard from '../images/mastercard.svg';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import botoncuadradogr from '../images/botoncuadradogr.svg';


import '../styles/_payment.scss'

const baseurl = '/api/donation/create';
const axios_jwt = {
  headers: {
     Authorization: "Bearer " + localStorage.getItem('currentJWT')
  }
}



function Payment() {
    let history1 = useHistory();
    const sendthanks = () => {
        history1.push("/thanks");
    }

const [userdata, setUserData] = useState({})

      const MakeDonation = async () => {
        const resultado = await axios.post(baseurl, { user: localStorage.getItem('currentUser')}, axios_jwt)
        setUserData(resultado.data);
        console.log(userdata);
       sendthanks()
      }
  
 

    return (
        <div className="containerpayment">
            <div className="encabezadocomun" >

                <img className="encabezado-wifi" src={wifi} alt="wifi" />

                <div className="encabezado-2">
                    <a href="./onedonation"><img  className="flecha"  src={flecha2} alt="flecha"/></a>  

                    <p className="encabezado-txt-1">Hacer una donación ahora</p>
                </div>
            </div>

            <p className="txt-tarjeta">Vas a donar</p>

            <div className="encabezadocomun-txt">
            <img className="botongr" src={botoncuadradogr} alt="botoncuadradogr" />

            </div>
            <p className="txt-tarjeta-1">Introduce tu tarjeta bancaria</p>
            <div className="tarjeta">

                <p className="tarjeta-input-txt">Titular</p>
                <div className="tarjeta-input">
                    <input type="text" className="tarjeta-input-txt-1" placeholder="Clara Smith García" />
                    <img className="tarjeta-input-mastercard" src={mastercard} alt="mastercard" />
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
                    <Botonovalado func={MakeDonation} texto={'Dona'} color='btn-ovalado-pinkpercent ' />
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Payment

