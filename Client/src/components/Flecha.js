import React from 'react'
import { Link } from 'react-router-dom';
import flecha from '../images/flecha.svg';

import '../styles/_flecha.scss'


function Flecha() {

    return (
        <div>

          <Link to={'/home'}><button className="flecha" id="ir a"> <img src={flecha} alt=""/></button></Link>  
        </div>
    )
}

export default Flecha 
