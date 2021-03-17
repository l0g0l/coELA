import React from 'react'





function Botoncuadradogr({pulsar,imagen, valor}) {

    return (
        <div className="cuadradogr">
            <img  className="cuadradogr-img"src={imagen} alt="icono flor"/>
            <button onClick={pulsar} className="cuadradogr-btn">{valor}</button>
        </div>
        
    )
}

export default Botoncuadradogr 
