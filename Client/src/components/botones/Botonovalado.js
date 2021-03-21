import React from 'react'

const Botonovalado = ({texto, color, disabled}, func) => {

    return (
        <div >
         <button onClick={func} className={disabled?'btn-ovalado-grey':color} disabled={disabled?true:""}>{texto}</button>

        </div>
    )
}

export default Botonovalado
