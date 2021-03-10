import React from 'react'
import Images from '../images/images'

const Footer = () => {
  return(
    <footer className="footer">
      <ul>
        <li><img src={Images.home.default} alt='Home' />Inicio</li>
        <li><img src={Images.donations.default} alt='Donaciones' />Donaciones</li>
        <li><img src={Images.comunity.default} alt='Comunidad' />Comunidad</li>
        <li><img src={Images.luzon.default} alt='Luzón' />Luzón</li>
        
      </ul>
    </footer>
  )
}

export default Footer