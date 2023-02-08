import React from 'react';
import './style.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import Favorite from './pages/Favorite';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="center__wrapper">
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path='/' index element={<MainPage/>}/>
            <Route path='/favorite' element={<Favorite/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
