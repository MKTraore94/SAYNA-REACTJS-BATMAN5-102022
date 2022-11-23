import React,{useState} from 'react'
import Heroshop from '../components/Heroshop';
import Products from '../data/Products';
import { Link } from 'react-router-dom';


function Eshop() {

  const [data, setData] = useState(Products);
  const [search, setSearch] = useState('');
  const filterResult = (catItem)=>{
     const result = Products.filter((curData)=>{
      return curData.category === catItem;
     })
  }

  return (
    <>
       <Heroshop/>
       <section class="container mb-5">
        <div class="float-end">
        <Link to="/cart">
          <i  class="fa-solid fa-2x fa-cart-plus"></i>
        </Link>
        </div>
      </section>
      <div className="container">
        <div className='row '>
          <div className='col-md-3'>
            <h3>Rechercher</h3>
            <div className='mb-3'>
            <input type="text" onChange={(e)=> setSearch(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="Search....."/>
            </div>
            <h3 className='mb-3'>Filter by Category</h3>
            <button className='w-100 mb-3' onClick={()=>filterResult('Poster')}>Poster</button>
            <button className='w-100 mb-3' onClick={()=>filterResult('SAC')}>SAC</button>
            <button className='w-100 mb-3' onClick={()=>filterResult('Vêtements')}>Vêtements</button>
            <button className='w-100 mb-3' onClick={()=>filterResult('Équipement')}>Équipement</button>
            <button className='w-100 mb-3' onClick={()=>filterResult('MUG')}>MUG</button>

          </div>
          <div className='col-md-9'>
            
            {/* <ProductList Products = {data}/> */}
            <div className='row'>
              {data.filter((val)=>{
                if(search === ''){
                  return val;
                }
                else{
                  return val.title.toLowerCase().includes(search.toLowerCase());
                }
              }).map((values) => {
                const {id,title,price, imageUrl} = values;
                return(
                  <div className='col-md-4 mb-4' key={id}>
                    <div className="card"  >
                      <img src={imageUrl} className="card-img-top img-fluid" alt="..." />
                      <div className="card-body" style={{ color:'black', fontSize:38 }}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{price}</p>
                        <a href="#" className="btn btn-primary"> Ajouter au Panier</a>
                      </div>
                    </div>

                  </div>

                )
              }  )}
            </div>
             

          </div>
        </div>
      </div>
      
    </>
   
  )
}

export default Eshop