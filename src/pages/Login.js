import React from 'react'
import '../styles/Login.scss';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
       <section id="hero">
      <div className="hero-log">
        <div className="container">
        <div className=" formulaire">
      <div className="head text-center">
        <h2 className="text-uppercase">connection</h2>
        <p>
          Vous n'avez pas encore de compte?
          <Link to="/signup">inscrivez-vous ici!</Link>
        </p>
      </div>
      <div className="form-body">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">IDENTIFIANT</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">MOT DE PASSE</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
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

export default Login