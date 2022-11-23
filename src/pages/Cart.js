import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Cart.scss';

function Cart() {
  return (
    <>

    <div className="container container-largeur">
      <div className="row">
        <div className="d-flex justify-content-between">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/eshop">eshop</Link>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
               
              >
                <Link to="/cart"> Panier</Link>

               

              </li>
            </ol>

          </nav>
          <div className="cart">
            <Link to="/cart" ></Link>
            <i  className="fa-solid fa-2x fa-cart-shopping"></i>

          </div>
        </div>
      </div>
      <div className="recap">
        <p>Récapitulatif du panier</p>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="product d-flex align-items-center">
          <img width="30%" src="" alt="" />
          <div className="mx-4">
            <h5>Title product</h5>
            <span>Numéro de produit x000 </span>
          </div>
        </div>
        <div className="price">
          <p> 36 $</p>

        </div>
        <div className="qte bg-secondary">
          <i className="fa-solid fa-minus mx-4"></i><span className="fs-4">1</span>
          <i className="fa-regular fa-2x fa-plus mx-4"></i>
        </div>
        <div className="delete">
          <i
            // (click)="removeItem(productItem)" //
            className="fa-solid fa-2x fa-xmark"></i>
        </div>
      </div>


      <div className="sous-total container-largeur">
        <h4 className="float-end">
          <strong>Sous Total : 233</strong>

        </h4>

      </div>
    </div>
    <section className="container container-largeur d-flex mx-auto my-5">
      <Link to='/eshop'>
        <button className="mx-2" text=""  >Continuer mes achats</button>
      </Link>

      <Link to='/commande'>
        <button className="mx-2" text="" >Passer commande</button>
      </Link>


    </section>


    <br /><br />


    <h1 className="text-center">Ton panier est vide</h1>
    <div className="container-largeur">
      <Link to='/eshop'>
        <button text="" >Faire des Achats</button>
      </Link>

    </div>


  </>
  )
}

export default Cart