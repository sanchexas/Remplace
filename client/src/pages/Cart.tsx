import '../style.css';
import { useEffect, useState } from 'react';
import CartController from '../controllers/CartController';
import { CartProductModel } from '../models/CartProductModel';
import apiPath from '../api-path';

const Cart = () => {
    const [products, setProducts] = useState();
    useEffect(()=>{
        CartController.getAll().then((response)=>{
            setProducts(response.map((product: CartProductModel, i: number)=>{
                return(
                    <div className='cart__item' key={i}>
                        <div className='cart__item__img'>
                            <img src={`${apiPath}/${product.image}`} alt="" />
                        </div>
                        <div className='cart__item__title'>{product.title}</div>
                        <div className='cart__item__quantity'>
                            <button>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={()=> CartController.addQuantity(i)}>+</button>
                        </div>
                        <div className='cart__item__price'>
                            {product.price}
                        </div>
                        <div className='cart__item__actions'>

                        </div>
                    </div>
                );
            }));
        });
    }, []);
    return(
        <div className='cart__page'>
            <div className='cart__products'>
                <h1>Корзина</h1>
                {products}
            </div>
            <div className='cart__order'>

            </div>
        </div>
    );
}

export default Cart;