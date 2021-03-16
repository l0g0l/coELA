import React from 'react'




function Botoncuadradomed({pulsar, imagen, texto}) {

    return (
        <div className="cuadradomed">

            <button onClick={pulsar} className="cuadradomed-btn">
            <img className="cuadradomed-img" src={imagen} alt="" /></button>
            <p className="cuadradomed-txt" >{texto}</p>
        </div>

    )
}

export default Botoncuadradomed
