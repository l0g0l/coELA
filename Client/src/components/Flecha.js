import React from 'react'
import flecha2 from '../images/flecha2.png';
import { Link } from 'react-router-dom';


import '../styles/_flecha.scss'


function Flecha() {


    return (
        <div>

        <Link to ={'/home'}><img  className="flecha"  src={flecha2} alt=""/></Link>
        </div>
    )
}

export default Flecha 
