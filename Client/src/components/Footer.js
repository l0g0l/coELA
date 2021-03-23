import React from 'react'
import Images from '../images/images'
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return(
    <footer className="footer">
      <ul>
        <li><NavLink to={'/home'} activeClassName="footeractivate"><img src={Images.home.default} alt='Home'/>Inicio</NavLink></li>
        <li><NavLink to={'/mydonations'} activeClassName="footeractivate"> <img src={Images.donations.default} alt='Donaciones' />Donaciones</NavLink></li>
        <li><NavLink to={'/community'} activeClassName="footeractivate"> <img src={Images.comunity.default} alt='Comunidad' />Comunidad</NavLink></li>
        <li><NavLink to={'/luzon'} activeClassName="footeractivate"> <img src={Images.luzon.default} alt='Luzón' />Luzón</NavLink></li>

      </ul>
    </footer>
  )
}

export default Footer