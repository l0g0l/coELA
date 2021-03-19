import React from 'react'

function Botonovaladopeq({pulsar, color, texto}) {
    return (
        <div >
         <button onClick={pulsar} className={color}>{texto}</button>

        </div>
 
    )
}

export default Botonovaladopeq
