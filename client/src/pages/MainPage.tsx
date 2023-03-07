import { useEffect, useState } from 'react';
import '../style.css';
import ProductController from '../controllers/ProductController';
import { IProductModel } from '../models/IProductModel';
import apiPath from '../api-path';

const MainPage = () =>{
    const [products, setProducts] = useState();
    useEffect(()=>{
        ProductController.getAll().then((response)=>{
            const resArr = response?.data.message;
            console.log(resArr);
            if(resArr !== undefined){
                setProducts(resArr.map((product: IProductModel)=>{
                    return(
                        <div className='product__card' key={product.id_product}>
                            <div className='product__img'>
                                <img src={`${apiPath}/${product.image}`} alt='product pic' />
                            </div>
                            <div className='product__card__info'>
                                <span className='FS_20 IR'>{product.title}</span>
                                <span className='FS_20 IBl'>{product.price} ₽</span>
                                <div className='product__card__actions'>
                                    <button className='add__to__cart'>В корзину</button>
                                    <button>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.75 3.75C5.29875 3.75 2.5 6.52 2.5 9.9375C2.5 12.6962 3.59375 19.2438 14.36 25.8625C14.5529 25.9798 14.7743 26.0419 15 26.0419C15.2257 26.0419 15.4471 25.9798 15.64 25.8625C26.4062 19.2438 27.5 12.6962 27.5 9.9375C27.5 6.52 24.7012 3.75 21.25 3.75C17.7988 3.75 15 7.5 15 7.5C15 7.5 12.2012 3.75 8.75 3.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }));
            }
            
        });
    },[])
    return(
        <div className='main__page'>
            <div className="catalogue__search__wrapper">
                <div className="catalogue__search__block">
                    <button className="catalogue__button">
                        <div>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.125 4.375H5.83333C5.02792 4.375 4.375 5.02792 4.375 5.83333V13.125C4.375 13.9304 5.02792 14.5833 5.83333 14.5833H13.125C13.9304 14.5833 14.5833 13.9304 14.5833 13.125V5.83333C14.5833 5.02792 13.9304 4.375 13.125 4.375Z" stroke="#0762C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.125 20.4166H5.83333C5.02792 20.4166 4.375 21.0695 4.375 21.875V29.1666C4.375 29.972 5.02792 30.625 5.83333 30.625H13.125C13.9304 30.625 14.5833 29.972 14.5833 29.1666V21.875C14.5833 21.0695 13.9304 20.4166 13.125 20.4166Z" stroke="#0762C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M29.1666 4.375H21.875C21.0695 4.375 20.4166 5.02792 20.4166 5.83333V13.125C20.4166 13.9304 21.0695 14.5833 21.875 14.5833H29.1666C29.972 14.5833 30.625 13.9304 30.625 13.125V5.83333C30.625 5.02792 29.972 4.375 29.1666 4.375Z" stroke="#0762C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M29.1666 20.4166H21.875C21.0695 20.4166 20.4166 21.0695 20.4166 21.875V29.1666C20.4166 29.972 21.0695 30.625 21.875 30.625H29.1666C29.972 30.625 30.625 29.972 30.625 29.1666V21.875C30.625 21.0695 29.972 20.4166 29.1666 20.4166Z" stroke="#0762C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Каталог
                        </div>
                    </button>
                    <div className="search">
                        <input type="text" placeholder="Найти..."></input>
                        <button className="search__button">
                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8749 21.875L17.202 17.1938M19.7916 10.9375C19.7916 13.2858 18.8587 15.5379 17.1983 17.1984C15.5378 18.8589 13.2857 19.7917 10.9374 19.7917C8.58915 19.7917 6.33706 18.8589 4.67658 17.1984C3.0161 15.5379 2.08325 13.2858 2.08325 10.9375C2.08325 8.58927 3.0161 6.33718 4.67658 4.6767C6.33706 3.01622 8.58915 2.08337 10.9374 2.08337C13.2857 2.08337 15.5378 3.01622 17.1983 4.6767C18.8587 6.33718 19.7916 8.58927 19.7916 10.9375Z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {products}

        </div>
    );
}

export default MainPage;