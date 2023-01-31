import '../style.css';
import Header from './Header';
import About from '../pages/About';
import ForBusiness from '../pages/ForBusiness';
import Categories from '../pages/Categories';
import Favorite from '../pages/Favorite';
import Notifications from '../pages/Notifications';
import Messanger from '../pages/Messenger';
import Cart from '../pages/Cart';
import {Routes, Route} from 'react-router-dom';


const CenterContainer = () =>{
    return(
        <div className='center__container'>
            <Header/>
            <main>
                <Routes>
                    <Route path='/' index element={<About/>}></Route>
                    <Route path='/business' index element={<ForBusiness/>}></Route>
                    <Route path='/categories' index element={<Categories/>}></Route>
                    <Route path='/favorite' index element={<Favorite/>}></Route>
                    <Route path='/notifications' index element={<Notifications/>}></Route>
                    <Route path='/messanger' index element={<Messanger/>}></Route>
                    <Route path='/cart' index element={<Cart/>}></Route>
                </Routes>
            </main>
        </div>
    );
}

export default CenterContainer;