import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'
import HeaderContainer from './components/HeaderContainer'
import Navbar from './components/Navbar'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <HeaderContainer/>
    {/* <Header/> */}
    <div className=' -mt-[135px]'>
        <Outlet/>
    </div>
    
    <Footer/>
    </>
  )
}

export default Layout
