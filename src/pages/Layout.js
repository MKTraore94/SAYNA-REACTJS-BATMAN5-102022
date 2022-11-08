import React from 'react';
import NavBAr from '../components/NavBAr';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function Layout() {
  return (
    <>
    <NavBAr/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout