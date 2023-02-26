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
import CreateOrgProfile from './pages/CreateOrgProfile';

function App() {
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
            </Routes>
          </main>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
