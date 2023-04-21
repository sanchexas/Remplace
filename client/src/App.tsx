import './style.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import Favorite from './pages/Favorite';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import CreateOrgProfile from './pages/CreateOrg';
import Chat from './pages/Chat';
import Notifications from './pages/Notifications';
import Business from './pages/Business';
import CreateProduct from './pages/CreateProduct';
import Catalogue from './pages/Catalogue';
import EditProduct from './pages/EditProduct';
import ProductInfo from './pages/ProductInfo';
import Products from './pages/Products';
import Payment from './pages/Payment';
import ProductStory from './pages/ProductsStory';

function App() {
  if(!localStorage.getItem('remcart')){
    localStorage.setItem('remcart', '0');
  }
  if(!localStorage.getItem('general_price')){
    localStorage.setItem('general_price', '0');
  }
  if(!localStorage.getItem('favorite')){
    localStorage.setItem('favorite', '[]');
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
      <div className='wrapper'>
        <div className="center__wrapper">
          <Header/>
          <main>
            <Routes>
              <Route path='/' index element={<MainPage/>}/>
              <Route path='/favorite' element={<Favorite/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/create_org_profile' element={<CreateOrgProfile/>}/>
              <Route path='/messanger' element={<Chat/>}/>
              <Route path='/notifications' element={<Notifications/>}/>
              <Route path='/business' element={<Business/>}/>
              <Route path='/create_product' element={<CreateProduct/>}/>
              <Route path='/catalogue' element={<Catalogue/>}/>
              <Route path='/editproduct' element={<EditProduct/>}/>
              <Route path='/productinfo' element={<ProductInfo/>}/>
              <Route path='/ctprd' element={<Products/>}/>
              <Route path='/payment' element={<Payment/>}/>
              <Route path='/product_story' element={<ProductStory/>}/>
            </Routes>
          </main>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
