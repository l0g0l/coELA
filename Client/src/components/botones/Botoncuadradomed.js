import React from 'react'
import tarjeta from '../../images/tarjeta.svg';
// import paypal from '../images/paypal.svg';
// import bitcoin from '../images/bitcoin.svg';


function Botoncuadradomed(pulsar,color) {

    return (
        <div className="cuadradomed">
            
            <button onClick={pulsar} className="cuadradomed-btn"><img className="cuadradomed-img"src={tarjeta}alt="icono tarjeta crédito"/></button>
        </div>
        
    )
}

export default Botoncuadradomed
