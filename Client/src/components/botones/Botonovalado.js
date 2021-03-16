import React from 'react'

const Botonovalado = ({texto, color, pulsar}) => {

    return (
        <div >
         <button onClick={pulsar} className={color}>{texto}</button>

        </div>
    )
}

export default Botonovalado
