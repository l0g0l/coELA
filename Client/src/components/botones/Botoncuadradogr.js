import React from 'react'





function Botoncuadradogr(pulsar,color, valor) {

    return (
        <div className="cuadradogr">
            <img src="../../images/flor1.svg" alt="icono flor"/>
            <button onClick={pulsar} className="cuadradogr_btn">5€</button>
        </div>
        
    )
}

export default Botoncuadradogr 
