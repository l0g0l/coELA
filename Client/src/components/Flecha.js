import React from 'react'
import flecha2 from '../images/flecha2.png';

import '../styles/_flecha.scss'


function Flecha(back) {

    return (
        <div>

          <a href="./home"><img  className="flecha"  src={flecha2} alt=""/></a>  
        </div>
    )
}

export default Flecha 
