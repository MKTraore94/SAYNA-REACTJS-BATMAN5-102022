
import '../styles/App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Game from '../pages/Game';
import MonCompte from '../pages/MonCompte';
import Eshop from '../pages/Eshop';
import Layout from '../pages/Layout';
import NotFoundPage from '../pages/NotFoundPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Cart from '../pages/Cart';
import Deconnexion from '../pages/Deconnexion';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Layout/>}>
          <Route index element ={<Home/>}/>
          <Route path='home' element ={<Home/>}/>
          <Route path='game' element ={<Game/>} />
          <Route path='eshop' element ={<Eshop/>} />
          <Route path='compte' element ={<MonCompte/>} />
          <Route path='login' element ={<Login/>} />
          <Route path='signup' element ={<Signup/>} />
          <Route path='cart' element ={<Cart/>} />
          <Route path='deconnexion' element ={<Deconnexion/>} />
          <Route path='*' element ={<NotFoundPage/>}/>
          </Route>
        </Routes>
    

      </BrowserRouter>
    </>
       
    


  );
}

export default App;
