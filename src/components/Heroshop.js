import React from 'react'
import '../styles/Heroshop.css';
import flèche_down_header from '../assets/logos/Logo/flèche_down_header.png';

function Heroshop() {
  return (
    <section id="hero">
    <div class="hero-eshop">
        <div class="container">
            <h1 class="hero-tittle text-uppercase">
                Récuperez le flow de <br/> avec notre e-shop
            </h1>
        </div>
    </div>
    <img
            class="fleche"
            src={flèche_down_header}
            alt="image"
          />
</section>
  )
}

export default Heroshop