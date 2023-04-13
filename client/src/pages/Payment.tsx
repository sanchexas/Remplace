import { useEffect, useState } from 'react';
import CreditCard from '../components/CreditCard';
import '../style.css';
import BankCardController from '../controllers/BankCardController';
import { IBankCardResponse } from '../models/responses/IBankCardResponse';

const Payment = () =>{
    const [cards, setCards] = useState<JSX.Element>();
    useEffect(()=>{
        BankCardController.getAll().then((response)=>{
            const cardsArr = response.data.message;
            setCards(cardsArr.map((card: IBankCardResponse)=>{
                return(
                    <div className='bank__card__item' key={card.id_card}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 5H5C3.61929 5 2.5 6.11929 2.5 7.5V22.5C2.5 23.8807 3.61929 25 5 25H25C26.3807 25 27.5 23.8807 27.5 22.5V7.5C27.5 6.11929 26.3807 5 25 5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5 10H10V12.5H7.5V10Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <span>Номер: {card.number}</span>
                        <span>Баланс: {(card.balance === null || card.balance === undefined) ? 0 : card.balance } ₽</span>
                    </div>
                );
            }))
        })
    }, []);
    return(
        <div className='payment__page'>
            <CreditCard/>
            <div className='bank__cards'>
                <h1>Ваши карты:</h1>
                {cards}
            </div>
        </div>
    );
}

export default Payment;