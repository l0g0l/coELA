import React from 'react';
import Footer from '../components/Footer';
import Logout from '../components/Logout';

import '../styles/style.scss'

const Thanks  = () => {
  componentDidMount() {
    if (!cookies.get('username')) {
        window.location.href = "/login"
    }
}
  return (
    <div>
  
        

    <p> Agradecimiento</p>
     <Logout />
      <Footer />
      
    </div>
  )
}
export default Thanks