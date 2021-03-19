import React from 'react'


function Botoncuadradoxs({ texto, pulsar, img }) {
    return (
        <div className="cuadradoxs">
            
        <button onClick={pulsar} className="cuadradoxs-btn">
        <img className="cuadradoxs-img" src={img} alt="" /></button>
            <p className="cuadradoxs-txt" >{texto}</p>
    </div >
    
    )
}

export default Botoncuadradoxs
