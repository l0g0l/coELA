import React from 'react'
import { useState } from 'react';





function Botoncuadradopeq ({ pulsar, imagen, valor }) {
    const [color, setColor] = useState('greyButton')

    const changecolor = () => {
        setColor(color === 'greyButton' ? 'whiteButton' : 'greyButton')
        console.log(color);

    }

    return <div>
       <button onClick={changecolor} className={`cuadradopeq ${color}`}>
            <div >
                <p className="cuadradopeq-txt" >{valor}</p>
            </div>
        </button>
    </div>
}

export default Botoncuadradopeq