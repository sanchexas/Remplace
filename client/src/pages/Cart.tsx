import '../style.css';
// import {AxiosResponse} from 'axios'
import { useEffect } from 'react';
import UserController from '../controllers/UserController';

const Cart = () => {
    useEffect(()=> {
        UserController.getUserById(4).then((res)=>{
            console.log("YES IT PROMISE")
        })
    },[])
    return(
        <div>CART</div>
    );
}

export default Cart;