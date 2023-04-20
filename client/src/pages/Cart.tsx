import '../style.css';
import { useEffect, useState } from 'react';
import CartController from '../controllers/CartController';
import { CartProductModel } from '../models/CartProductModel';
import apiPath from '../api-path';
import BankCardController from '../controllers/BankCardController';
import { IBankCardResponse } from '../models/responses/IBankCardResponse';
import Cookies from 'universal-cookie';
import OrderController from '../controllers/OrderController';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { API_KEY } from '../api-path';

const Cart = () => {
    const [radioValue, setRadioValue] = useState<string | number>();
    const [products, setProducts] = useState();
    const [quantity, setQuantity] = useState<number>();
    const [deleteItem, setDeleteItem] = useState<boolean>(false);
    const [generalPrice, setGeneralPrice] = useState<string | number>();
    const [bankCards, setBankCards] = useState<JSX.Element>();
    const [addressValue, setAddressValue] = useState<string | undefined>();
    const checkCart = localStorage.getItem('remcart');
    const cookies = new Cookies();
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
                            <button className='cart__plus__minus__buttons' onClick={()=>setQuantity(CartController.subQuantity(i))}>-</button>
                            <span>{product.cart_quantity}</span>
                            <button className='cart__plus__minus__buttons' onClick={()=>setQuantity(CartController.addQuantity(i))}>+</button>
                        </div>
                        <div className='cart__item__price'>
                            {product.full_price} ₽
                        </div>
                        <div className='cart__item__actions'>
                            <button onClick={()=>{setDeleteItem(CartController.deleteFromCart(i)); setTimeout(()=>{setDeleteItem(false)}, 100);}}>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='delete__icon' d="M2.33325 7.00004H25.6666M11.6666 12.8334V18.6667M16.3333 12.8334V18.6667M4.66659 7.00004H23.3333L21.4899 23.59C21.4267 24.161 21.1552 24.6885 20.7272 25.0717C20.2993 25.4549 19.745 25.6667 19.1706 25.6667H8.82925C8.25483 25.6667 7.70057 25.4549 7.27262 25.0717C6.84468 24.6885 6.57311 24.161 6.50992 23.59L4.66659 7.00004ZM8.56909 3.67154C8.7578 3.27134 9.05641 2.93304 9.43009 2.6961C9.80377 2.45917 10.2371 2.33337 10.6796 2.33337H17.3203C17.7629 2.33315 18.1965 2.45884 18.5704 2.69579C18.9443 2.93274 19.2431 3.27116 19.4319 3.67154L20.9999 7.00004H6.99992L8.56909 3.67154Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                );
            }));
        });
        let getGeneralPrice = localStorage.getItem('general_price');
        setGeneralPrice((getGeneralPrice !== null) ? getGeneralPrice : 0);
    }, [quantity, deleteItem, radioValue]);
    useEffect(()=>{
        if(cookies.get('id_user')){
            BankCardController.getAll().then((response)=>{
                const cardsArr = response.data.message;
                console.log(addressValue)
                setBankCards(cardsArr.map((card: IBankCardResponse)=>{
                    return(
                        <div key={card.id_card} className='chose__card__item' >
                            <input type="radio" name='radio' value={card.id_card}
                            id={''+card.id_card}
                            onChange={(e)=>setRadioValue(e.target.value)}
                            />
                            <label htmlFor={''+card.id_card}>
                            <svg className='card__icon' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 5H5C3.61929 5 2.5 6.11929 2.5 7.5V22.5C2.5 23.8807 3.61929 25 5 25H25C26.3807 25 27.5 23.8807 27.5 22.5V7.5C27.5 6.11929 26.3807 5 25 5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.5 10H10V12.5H7.5V10Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                                {card.number}
                            </label>
                        </div>
                    );
                }));
            });
        }
        setBankCards(
            <div>
                Авторизуйтесь!
            </div>
        );
    },[]);
    if(checkCart === '[]' || checkCart === '0'){
        return(
            <div>Картинка "Ваша корзина пуста"</div>
        )
    }else{
        return(
            <div className='cart__page'>
                <div className='cart__products'>
                    <h1>Корзина</h1>
                    {products}
                </div>
                <div className='cart__order'>
                    <h1>Заказ</h1>
                    <span className='FS_20'>Цена: <span className='FS_20 IB'>{generalPrice} ₽</span></span>
                    <div className='chose__card'>
                        <span className='FS_20'>{cookies.get('id_user') ? 'Выберите карту' : ''}</span>
                        {bankCards}
                    </div>
                    <span>
                    Адрес доставки

                    </span>
                    <AddressSuggestions token={API_KEY} onChange={(e)=>{
                        setAddressValue(e?.value);
                    }} />
                    <button onClick={()=>OrderController.create()} className={(radioValue && addressValue) ? 'order__button' : 'order__button zero__opacity'} disabled={!radioValue ? true : false}>Заказать</button>
                </div>
            </div>
        );
    }
}

export default Cart;