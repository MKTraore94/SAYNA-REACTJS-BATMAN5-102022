import React from 'react'
import '../styles/Signup.scss';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
      <section id="hero">
        <div className="hero-sign">
          <div className="container">
            <div className=" formulaire">
        <div className="head text-center">
          <h2 className="text-uppercase">inscription</h2>
          <p>
            Vous avez déjà un compte?
            <Link to="/login">connectez-vous ici!</Link>
          </p>
        </div>
        <div className="form-body">
          <form>
          <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">NOM</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">PRENOM</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">IDENTIFIANT</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
             
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">MOT DE PASSE</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">CONFIRMER VOTRE MOT DE PASSE</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="my-3">
            <div id="emailHelp" className="form-text">Je reconnais avoir pris connaissance et j’accepte les<br/>
            termes des conditions générales d’utilisation</div>

            </div>
            
            <button height="80" width="531" type="submit" className="btn btn-primary w-100">VALIDER</button>
          </form>
  
        </div>
      </div>
          </div>
        </div>
      </section>
   
       
    </>
  )
}

export default Signup