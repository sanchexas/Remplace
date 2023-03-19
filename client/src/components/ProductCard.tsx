import '../style.css';
import apiPath from '../api-path';
import { Link } from 'react-router-dom';
import CartController from '../controllers/CartController';
import { CartProductModel } from '../models/CartProductModel';

type productCardProps = {
    id: string | number | null | undefined
    image: string | File | null | undefined
    title: string | null | undefined
    price: string | number | null | undefined
}

const ProductCard = ({id, image, title, price}: productCardProps) => {
    function addToCartHandler(){
        const product: CartProductModel = {
            id: id,
            image: image,
            title: title,
            price: price
        };
        CartController.addToCart(product);
    }
    return(
        <div className='product__card'>
            <Link to={`/productinfo?id=${id}`}>
                <div className='product__img'>
                    <img src={`${apiPath}/${image}`} alt='product pic' />
                </div>
                <div className='product__card__info'>
                    <span className='FS_20 IR' style={{position: "absolute", top: "20px"}}>{title}</span>
                    <span className='FS_20 IBl' style={{position: "absolute", top: "80px"}}>{price} ₽</span>
                </div>
            </Link>
            <div className='product__card__actions'>
                <button className='add__to__cart' onClick={()=>addToCartHandler()}>В корзину</button>
                <button>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.75 3.75C5.29875 3.75 2.5 6.52 2.5 9.9375C2.5 12.6962 3.59375 19.2438 14.36 25.8625C14.5529 25.9798 14.7743 26.0419 15 26.0419C15.2257 26.0419 15.4471 25.9798 15.64 25.8625C26.4062 19.2438 27.5 12.6962 27.5 9.9375C27.5 6.52 24.7012 3.75 21.25 3.75C17.7988 3.75 15 7.5 15 7.5C15 7.5 12.2012 3.75 8.75 3.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;