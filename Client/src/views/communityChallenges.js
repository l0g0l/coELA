import React from 'react'
import Footer from '../components/Footer';
import wifi from '../images/wifi.svg';
import { useHistory } from 'react-router-dom';
import botondonar from '../images/botondonar.png'
import imagen1carr from '../images/carrusel/imagen1carr.svg';
import imagen2carr from '../images/carrusel/imagen2carr.svg';
import imagen3carr from '../images/carrusel/imagen3carr.svg';
import chall1 from '../images/chall1.svg'
import chall2 from '../images/chall2.svg'

import '../styles/_communityChallenges.scss'




function CommunityChallenges() {
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
                    <a href="./community"  className="encabezadocomun1txt2-1"><p>Gente como tú</p></a>
                    <a href="./challenges" className="encabezadocomun1txt2-2"><p>Challenges</p></a>
                    <a href="./ranking"className="encabezadocomun1txt2-1"><p>Ranking</p></a>
                </div>

            </div>

            <div className="txt">
                <p>Actuales</p>
            </div>
            <div className="carr">
                <div className="carr1">
                    <img src={imagen1carr} alt="" />
                </div>
                <div className="carr2">
                    <img src={imagen2carr} alt="" />
                </div>
                <div className="carr2">
                    <img src={imagen3carr} alt="" />
                </div>
            </div>
            <div className="txt">
                <p>Conseguidos</p>
            </div>
            <div className="carr">
                <div className="chall1">
                    <img src={chall1} alt="" />
                </div>
                <div className="chall2">
                    <img src={chall2} alt="" />
                </div>
                
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

export default CommunityChallenges
