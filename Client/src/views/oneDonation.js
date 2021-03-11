import React from 'react'
import Footer from '../components/Footer'
import Logout from '../components/Logout'
import Botonovalado from '../components/botones/Botonovalado';
import { Redirect } from 'react-router-dom';



import '../styles/style.scss'


const OneDonation = () => {

 const siguiente = () => {
      return <Redirect to=' /roundup'/>
  }
  return (
    <div >
    
       <p>Dona ahora</p>
       <Botonovalado pulsar={() =>siguiente()} valor="Siguiente" color="btn-ovalado-pink" />

      <Logout />
      <Footer />
      
    </div>
  )
}


export default OneDonation