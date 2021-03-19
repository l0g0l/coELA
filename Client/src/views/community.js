import React from 'react'
import Footer from '../components/Footer';
import wifi from '../images/wifi.svg';
import { useHistory } from 'react-router-dom';
import botondonar from '../images/botondonar.svg'

import '../styles/_community.scss'




function Community() {
    let history = useHistory();
    const sendonedonation = () => {
      history.push("/onedonation");
    }
    return (
        <div>
            <div className="encabezadocomun1" >
                <img className="encabezadocomun1-wifi" src={wifi} alt="wifi" />

                <div className="encabezadocomun1txt" >
                    <p className="encabezadocomun1txt-1">La Comunidad</p>
                </div>

                <div className="encabezadocomun1txt2">
                    <p className="encabezadocomun1txt2-2">Gente como tú</p>
                    <p className="encabezadocomun1txt2-1">Challenges</p>
                    <p className="encabezadocomun1txt2-1">Rankings</p>
                </div>

            </div>

            <div className="redondeo-txt-2">
        <p>Estadísticas de gente de la comunidad con tus mismas carácterísticas (edad, hijos, ingresos, gastos...</p>
      </div>


      <div className="footerhome">
        <img onClick={sendonedonation} className="footerhome-img" src={botondonar} alt="" />
        <Footer />
      </div>

        </div>
    )
}

export default Community
