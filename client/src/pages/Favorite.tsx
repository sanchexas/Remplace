import { useEffect, useState } from 'react';
import '../style.css';
import FavoritesController from '../controllers/FavoritesController';
import { IFavoriteModel } from '../models/IFavoriteModel';
import { Link } from 'react-router-dom';
import apiPath from '../api-path';

const Favorite = () =>{
    const [products, setProducts] = useState<JSX.Element | JSX.Element[]>();
    const [isDeleted, setIsDeleted] = useState<boolean>(false);
    useEffect(()=>{
        FavoritesController.getAll().then((response)=>{
            const favArr: IFavoriteModel[] = response;
            setProducts(favArr.map((product: IFavoriteModel)=>{
                return(
                    <div className='fav__item' key={product.id}>
                        <div style={{display: "flex", justifyContent: "flex-end"}}>
                            <svg className='df__btn' onClick={()=>{FavoritesController.deleteFromFav(product.id); setIsDeleted(true); setTimeout(()=>{setIsDeleted(false)},100)}} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 17.5L10.5 10.5M17.5 10.5L10.5 17.5" stroke="#C50707" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M13.9999 25.6667C20.4432 25.6667 25.6666 20.4434 25.6666 14C25.6666 7.55672 20.4432 2.33337 13.9999 2.33337C7.5566 2.33337 2.33325 7.55672 2.33325 14C2.33325 20.4434 7.5566 25.6667 13.9999 25.6667Z" stroke="#C50707" strokeWidth="1.5"/>
                            </svg>
                        </div>
                        <Link to={`/productinfo?id=${product.id}`} >
                            <div className='product__img'>
                                <img src={`${apiPath}/${product.image}`} alt='product pic' />
                            </div>
                            <div className='product__card__info'>
                                <span className='FS_20 IR' style={{position: "absolute", top: "20px"}}>{product.title}</span>
                                <span className='FS_20 IBl' style={{position: "absolute", top: "80px"}}>{product.price} ₽</span>
                            </div>
                        </Link>
                    </div>
                    
                );
            }));
        });
    }, [isDeleted]);
    return(
        <div>
            <h1>Избранное</h1>
            <div className='product__story'>
                {products}
            </div>
        </div>
    );
}

export default Favorite