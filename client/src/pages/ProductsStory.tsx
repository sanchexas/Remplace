import { useEffect, useState } from 'react';
import '../style.css';
import OrderController from '../controllers/OrderController';
import { IOrderResponse } from '../models/responses/IOrderResponse';
import { Link } from 'react-router-dom';
import apiPath from '../api-path';

const ProductStory = () =>{
    const [products, setProducts] = useState<JSX.Element>();
    useEffect(()=>{
        OrderController.getByUserId().then((response)=>{
            const resArr = response.data.message;
            setProducts(resArr.map((product: IOrderResponse)=>{
                const date = product.created_at?.substring(0,10);
                return(
                    <Link to={`/productinfo?id=${product.id_product}`} key={product.id_order} className='product__story__item'>
                        <span style={{color: "rgb(0, 182, 0)"}}>Куплено: {date}</span>
                        <span style={{color: "rgb(0, 182, 0)"}}> Штук: {product.cart_quantity}</span>
                        <div className='product__img'>
                            <img src={`${apiPath}/${product.image}`} alt='product pic' />
                        </div>
                        <div className='product__card__info'>
                            <span className='FS_20 IR' style={{position: "absolute", top: "20px"}}>{product.title}</span>
                            <span className='FS_20 IBl' style={{position: "absolute", top: "80px"}}>{product.price} ₽</span>
                        </div>
                    </Link>
                )
            }));
        });
        
    }, []);
    return(
        
        <div>
            <h1>История покупок</h1>
            <div className='product__story'>
                {products}
            </div>
        </div>
    );
}
export default ProductStory;