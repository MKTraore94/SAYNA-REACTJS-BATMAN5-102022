import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Deconnexion.scss';

function Deconnexion() {
  return (
    <div class="popupbox" id="popupbox">
        <h1>Êtes vous sûr.e de vouloir vous <br/> déconnecter ?</h1>
        <Link to="compte">
        <button height="64" width="270">CONFIRMER</button>
        </Link>
        
      <div class="">
        
      </div>
    </div>
  )
}

export default Deconnexion