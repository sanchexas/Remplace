import './style.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import Favorite from './pages/Favorite';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
      <div className='wrapper'>
        <div className="center__wrapper">
          <Header/>
          <main>
            <Routes>
              <Route path='/' index element={<MainPage/>}/>
              <Route path='/favorite' element={<Favorite/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </main>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
