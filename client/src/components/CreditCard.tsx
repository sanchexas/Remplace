import { useState } from 'react';
import chipchip from '../images/chip.png';
import mastercard from '../images/mastercard.png';
import './card.css';

const CreditCard = () =>{
    const [num, setNum] = useState<string>('');
    const [year, setYear] = useState<number | string>();
    const [name, setName] = useState<string>('');
    const [back, setBack] = useState<string>('');
    const [focus, setFocus] = useState<boolean>(false);
    const sliceShit = (str: string) =>{
        let sliceStr = str.slice(0,4) + " " + str.slice(4,8) + " " + str.slice(8,12) + " " + str.slice(12,16);
        setNum(sliceStr);
    }
    const sliceDate = (str: string) =>{
        let sliceStr = str.slice(0,2) + "/" + str.slice(2,4)
        setYear(sliceStr);
    }
    const sliceBack = (str: string) =>{
        let sliceStr = str.slice(0,3)
        setBack(sliceStr);
    }
    return(
        <div className='a'>
            <div className='wrap'>
                <div className={(focus === true) ? "container rotate" : "container"}>
                    <div className='back side'>
                        <img className='chipdale' src={chipchip} alt='fuck'></img>
                        <img className='mastercard' src={mastercard} alt='fuck'></img>
                        <div className='info'>
                            <span className='number'>{num}</span>
                            <span className='date'>{year}</span>
                            <span className='date'>{name}</span>
                        </div>
                        
                    </div>
                    <div className='front side'>
                            <span className='backtext'>{back}</span>
                    </div>
                </div>
                
            </div>
            <div className='inputs'>
                <div className='org__form__item'>
                    <span>Номер карты</span>
                    <input id='num' type='text' onChange={(event)=>{
                    sliceShit(event.target.value)
                        // let str = event.target.value;
                        // setNum(str.slice(0, 4));
                    }
                    }/>
                </div>
                <div className='org__form__item'>
                    <span>Срок</span>
                    <input type='text' onChange={(event)=>sliceDate(event.target.value)}/>
                </div>
                <div className='org__form__item'>
                    <span>Имя</span>
                    <input type='text' onChange={(event)=>setName(event.target.value)}/>
                </div>
                <div className='org__form__item'>
                    <span>CVV / CVC</span>
                    <input type='text' onBlur={()=>setFocus(false)} onFocus={()=>setFocus(true)} onChange={(event)=>sliceBack(event.target.value)}/>
                </div>
            </div>
        </div>
        
    );
}

export default CreditCard;