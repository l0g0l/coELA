import React from 'react'
import Footer from '../components/Footer';
import wifi from '../images/wifi.svg';
import ranking2 from '../images/ranking2.png';
import { useHistory } from 'react-router-dom';
import botondonar from '../images/botondonar.png'
import flor1 from '../images/flor1.svg';

import '../styles/_communityRanking.scss'


export default function CommunityRanking() {
    let history = useHistory();
    const sendonedonation = () => {
        history.push("/onedonation");
    }
    return (
        <div className="containerranking">
            <div className="encabezadocomun1" >
                <img className="encabezadocomun1-wifi" src={wifi} alt="wifi" />

                <div className="encabezadocomun1com" >
                    <p className="encabezadocomun1txt-1">La Comunidad</p>
                </div>

                <div className="encabezadocomun1txt2">
                    <a href="./community" className="encabezadocomun1txt2-1"><p>Gente como tú</p></a>
                    <a href="./challenges" className="encabezadocomun1txt2-1"><p>Challenges</p></a>
                    <a href="./ranking" className="encabezadocomun1txt2-2"><p>Ranking</p></a>
                </div>

            </div>
            <div className="fraseranking">
                <p className="txtranking">Puesto</p>
           
            <div className="fraseranking-1">
                <img className="fraseranking-1-img" src={flor1} alt="" />
                <p className="fraseranking-1-txt" >Luzones</p>
            </div>
            </div>
            <div className="ranking">
                <img src={ranking2} alt="" />
            </div>




            <div className="footerhome">
                <div className="footerhome-1">
                    <img onClick={sendonedonation} className="footerhome-img" src={botondonar} alt="" />

                </div>

            </div>

            <Footer />

        </div>
    )
}
