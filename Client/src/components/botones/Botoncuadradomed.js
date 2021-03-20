import React from 'react'
import { useState } from 'react';





function Botoncuadradomed({ pulsar, imagen, texto }) {
    const [color, setColor] = useState('greyButton')

    const changecolor = () => {
        setColor(color === 'greyButton' ? 'whiteButton' : 'greyButton')
        console.log(color);

    }

    return <div>


        <button onClick={changecolor} className={`cuadradomed ${color}`}>
            <div >
                <img className="cuadradomed-img" src={imagen} alt="" />
                <p className="cuadradomed-txt" >{texto}</p>
            </div>
        </button>
    </div>

}

export default Botoncuadradomed
