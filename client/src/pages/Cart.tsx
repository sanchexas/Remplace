import '../style.css';
import  Axios  from 'axios';
// import {AxiosResponse} from 'axios'
import { IUserModel } from '../models/IUserModel';
import { useEffect } from 'react';
Axios.defaults.withCredentials = true;

const Cart = () =>{
    async function getAllUsers(){
        const response = await Axios.get<IUserModel>('http://localhost:3005/users/getall');
        console.log(response);
    }
    useEffect(()=>{
        getAllUsers();
    },[])
    return(
        <div>CART</div>
    );
}

export default Cart;