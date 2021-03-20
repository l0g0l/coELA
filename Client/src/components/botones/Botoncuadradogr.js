
import React, { useState } from 'react';





function Botoncuadradogr({pulsar,imagen, valor}) {
    const [color,setColor]=useState('#C4c1c1')

    const handleChangeBackgroundColor = () => {
        setColor(color==='#C4c1c1'?'#ffff':'#C4c1c1')
    }

    return (
        <div className="cuadradogr">
            <img  className="cuadradogr-img"src={imagen} alt="icono flor"/>
            {/* <button  className="cuadradogr-btn">{valor}</button> */}
            <button style={{opacity:color}} className='cuadradogr-change' onClick={handleChangeBackgroundColor}>{valor}</button>

        </div>
        
    )
}

export default Botoncuadradogr 
