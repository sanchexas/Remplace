import '../style.css';
import apiPath from '../api-path';
import { Link } from 'react-router-dom';
import CartController from '../controllers/CartController';
import { CartProductModel } from '../models/CartProductModel';
import { useEffect, useState } from 'react';
import FavoritesController from '../controllers/FavoritesController';
import { IFavoriteModel } from '../models/IFavoriteModel';
import PaintStarsByRate from './PaintStarsByRate';
import ReviewController from '../controllers/ReviewController';

type productCardProps = {
    id: string | number | null | undefined
    image: string | File | null | undefined
    title: string | null | undefined
    price: number
    quantity: number
}

const ProductCard = ({id, image, title, price, quantity}: productCardProps) => {
    const [putInCart, setPutInCart] = useState<boolean>(false);
    const [like, setLike] = useState<boolean>(FavoritesController.isInFav(id) ? true : false);
    const [rate, setRate] = useState<number>(0);
    
    function addToCartHandler(){
        const product: CartProductModel = {
            id: id,
            image: image,
            title: title,
            price: price,
            full_price: price,
            cart_quantity: 1,
            quantity: quantity
        };
        setPutInCart(true);
        CartController.addToCart(product);
    }
    function likeClick(){
        if(like){
            setLike(false);
            FavoritesController.deleteFromFav(id);
        }else{
            setLike(true);
            const favProd: IFavoriteModel = {
                id: id,
                title: title,
                price: price,
                image: image
            }
            FavoritesController.addToFav(favProd);
        }
    }
    useEffect(()=>{
        ReviewController.getAveregeRateByProdId(id).then((response)=>{
            setRate(response.data.message);
        })
    },[]);
    return(
        <div className='product__card'>
            <Link to={`/productinfo?id=${id}`}>
                <div className='product__img'>
                    <img src={`${apiPath}/${image}`} alt='product pic' />
                </div>
                <div className='product__card__info'>
                    <span className='FS_20 IR' style={{position: "absolute", top: "20px"}}>{title}</span>
                    <span className='FS_20 IBl' style={{position: "absolute", top: "80px"}}>{price} ₽</span>
                    <div style={{position: "absolute", top: "81px", right: "0px"}}><PaintStarsByRate rate={rate}/></div>
                </div>
            </Link>
            <div className='product__card__actions'>
                <button className={CartController.isInCart(id) || putInCart ? 'add__to__cart incart__button' : 'add__to__cart'} disabled={CartController.isInCart(id) ? true : false} onClick={()=>addToCartHandler()}>В корзину</button>
                <button onClick={()=>likeClick()}>
                    <svg  width="30" height="30" viewBox="0 0 30 30" fill={like ? '#c40707' : 'none'} xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.75 3.75C5.29875 3.75 2.5 6.52 2.5 9.9375C2.5 12.6962 3.59375 19.2438 14.36 25.8625C14.5529 25.9798 14.7743 26.0419 15 26.0419C15.2257 26.0419 15.4471 25.9798 15.64 25.8625C26.4062 19.2438 27.5 12.6962 27.5 9.9375C27.5 6.52 24.7012 3.75 21.25 3.75C17.7988 3.75 15 7.5 15 7.5C15 7.5 12.2012 3.75 8.75 3.75Z" stroke={like ? '#c40707' : 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
export default ProductCard;