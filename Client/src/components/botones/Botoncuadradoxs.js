import React from 'react'
import { useState } from 'react';



function Botoncuadradoxs({ texto, pulsar, img }) {
    const [color, setColor] = useState('greyButton')

    const changecolor = () => {
        setColor(color === 'greyButton' ? 'whiteButton' : 'greyButton')
        console.log(color);

    }
    return <div>


    <button onClick={changecolor} className={`cuadradoxs ${color}`}>
        <div >
            <img className="cuadradoxs-img" src={img} alt="" />
            <p className="cuadradomxs-txt" >{texto}</p>
        </div>
    </button>
</div>

}

export default Botoncuadradoxs
