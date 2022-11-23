import React from 'react';
import NavBAr from '../components/NavBAr';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Social from '../components/Social';

function Layout() {
  return (
    <>
    <NavBAr/>
    <Social/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout