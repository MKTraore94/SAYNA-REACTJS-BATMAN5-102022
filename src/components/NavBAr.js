import React from 'react';
import '../styles/NavBar.css';
import logohome from '../assets/logos/logohome.png';
import { NavLink } from 'react-router-dom';

function NavBAr() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container">
      <NavLink to='/' className="navbar-brand" >
        <img src={logohome} alt="logo"/>
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to='home'  className="nav-link" aria-current="page" >HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='game' className="nav-link">GAME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='eshop' className="nav-link" >E-SHOP</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='compte' className="nav-link" >MON COMPTE</NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBAr