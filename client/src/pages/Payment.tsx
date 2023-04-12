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
                    <div key={card.id_card}>
                        {card.number}
                    </div>
                );
            }))
        })
    }, []);
    return(
        <div className='payment__page'>
            <CreditCard/>
            <div className='bank__cards'>
                {cards}
            </div>
        </div>
    );
}

export default Payment;