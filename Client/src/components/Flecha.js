import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/_flecha.scss'


function Flecha() {

    return (
        <div>

          <Link to={'/home'}><button className="flecha" id="ir a"> <img src="flecha.svg" alt=""/></button></Link>  
        </div>
    )
}

export default Flecha 
