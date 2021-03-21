import React from 'react'

const Botonovalado = ({texto, color, pulsar, disabled}) => {

    return (
        <div >
         <button onClick={pulsar} className={disabled?'btn-ovalado-grey':color} disabled={disabled?true:""}>{texto}</button>

        </div>
    )
}

export default Botonovalado
