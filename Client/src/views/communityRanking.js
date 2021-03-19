import React from 'react'
import Footer from '../components/Footer';
import wifi from '../images/wifi.svg';
import ranking from '../images/ranking.svg';
import { useHistory } from 'react-router-dom';
import botondonar from '../images/botondonar.svg'

import '../styles/_communityRanking.scss'


export default function CommunityRanking() {
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
                    <p className="encabezadocomun1txt2-1">Gente como tú</p>
                    <p className="encabezadocomun1txt2-1">Challenges</p>
                    <p className="encabezadocomun1txt2-2">Rankings</p>
                </div>

            </div>
            <div className="ranking">
                <img src={ranking} alt="" />
            </div>






            <div className="footerhome">
                <img onClick={sendonedonation} className="footerhome-img" src={botondonar} alt="" />
                <Footer />
            </div>

        </div>
    )
}
