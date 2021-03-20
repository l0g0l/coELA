import React from 'react'
import Images from '../images/images'
import { Link } from 'react-router-dom';


const Footer = () => {
  return(
    <footer className="footer">
      <ul>
        <li><Link to={'/home'}> <img src={Images.home.default} alt='Home'/>Inicio</Link></li>
        <li><Link to={'/mydonations'}> <img src={Images.donations.default} alt='Donaciones' />Donaciones</Link></li>
        <li><Link to={'/community'}> <img src={Images.comunity.default} alt='Comunidad' />Comunidad</Link></li>
        <li><Link to={'/luzon'}> <img src={Images.luzon.default} alt='Luzón' />Luzón</Link></li>

      </ul>
    </footer>
  )
}

export default Footer