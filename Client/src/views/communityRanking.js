import React from 'react'
import Footer from '../components/Footer';
import wifi from '../images/wifi.svg';
import ranking from '../images/ranking.svg';
import { useHistory } from 'react-router-dom';
import botondonar from '../images/botondonar.png'

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

                <div className="encabezadocomun1txt" >
                    <p className="encabezadocomun1txt-1">La Comunidad</p>
                </div>

                <div className="encabezadocomun1txt2">
                    <a href="./community"  className="encabezadocomun1txt2-1"><p>Gente como tú</p></a>
                    <a href="./challenges" className="encabezadocomun1txt2-1"><p>Challenges</p></a>
                    <a href="./ranking"className="encabezadocomun1txt2-2"><p>Ranking</p></a>
                </div>

            </div>
            <div className="ranking">
                <img src={ranking} alt="" />
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
