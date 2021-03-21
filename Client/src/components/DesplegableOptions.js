import React from 'react'

function DesplegableOptions() {
    return (
        <div >
            <select  className="desplegableoptions">
                <option value=""></option>
                <option>Automático</option>
                <option>Manual vía notificaciones</option>
                <option>Desde tu cuenta bancaria</option>


            </select>

        </div>
    )
}

export default DesplegableOptions
