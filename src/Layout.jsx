import React from 'react'
import Navigation from './Components/Navigation'
import { Outlet } from 'react-router-dom'
import Product from './Components/Product'
import ContactUs from './Components/ContactUs'

const Layout = () => {
  return (
    <>
     <Navigation/>
     <Product/>
     <ContactUs/>
      
    </>
  )
}

export default Layout
