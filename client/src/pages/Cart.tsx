import '../style.css';
// import {AxiosResponse} from 'axios'
import { useEffect, useState } from 'react';
import UserController from '../controllers/UserController';
import CartController from '../controllers/CartController';
import { CartProductModel } from '../models/CartProductModel';
import { JsxElement } from 'typescript';

const Cart = () => {
    const [products, setProducts] = useState();
    useEffect(()=>{
        CartController.getAll().then((response)=>{
            setProducts(response.map((product: CartProductModel)=>{
                return(
                    <div key={product.id}>
                        <p>{product.title}</p>
                    </div>
                );
            }));
        });
    }, []);
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            {products}
        </div>
    );
}

export default Cart;