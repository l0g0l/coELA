import React from 'react'

const Botonovalado = ({valor, color, pulsar}) => {

    return (
        <div >
         <button onClick={pulsar} className={color}>{valor}</button>

        </div>
    )
}

export default Botonovalado
