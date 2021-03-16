import React from 'react'



function Botoncuadradopeq ({pulsar,valor}) {

    return (
        <div className="cuadradopeq">
            
            <button onClick={pulsar} className="cuadradopeq-btn">{valor}</button>
        </div>
        
    )
}

export default Botoncuadradopeq