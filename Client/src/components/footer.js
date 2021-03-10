import React from 'react'
import Images from '../images/images'

const Footer = () => {
  return(
    <footer className="footer">
      <ul>
        <li><img src={Images.home.default} alt='Home' />Home</li>
        <li><img src={Images.user.default} alt='Usuario' />Usuario</li>
        <li><img src={Images.luzon.default} alt='Luzón' />Luzón</li>
        <li><img src={Images.donations.default} alt='Donaciones' />Donación</li>
      </ul>
    </footer>
  )
}

export default Footer