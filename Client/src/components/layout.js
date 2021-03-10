import React from 'react'
import Footer from './footer'

import '../styles/style.scss'


const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout