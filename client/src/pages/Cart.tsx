import '../style.css';
// import {AxiosResponse} from 'axios'
import { useEffect } from 'react';
import UserController from '../controllers/UserController';

const Cart = () => {
    useEffect(()=> {
        /**
         *  Данная функция является тестовой
         */
        UserController.getUserById(4).then((res)=>{
            console.log(res);
        })
    },[])
    return(
        <div>CART</div>
    );
}

export default Cart;