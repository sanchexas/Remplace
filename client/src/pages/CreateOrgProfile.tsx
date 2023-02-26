import { useState } from 'react';
import '../style.css';
import Cookies from 'universal-cookie';

const CreateOrgProfile = () =>{
    const cookies = new Cookies();
    const [name, setName] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [link, setLink] = useState<string>();
    const [ogrn, setOgrn] = useState<number>();
    const [inn, setInn] = useState<number>();
    const [kpp, setKpp] = useState<number>();
    return(
        <div className='create__org__page'>
            <h1 className='IB'>Зарегистрировать организацию</h1>
            <div className='org__form'>
                <div className='org__form__item'>
                    <span>Наименование организации * :</span>
                    <input type="text" required/>
                </div>
                <div className='org__form__item'>
                    <span>Юридический адрес * :</span>
                    <input type="text" required/>
                </div>
                <div className='org__form__item'>
                    <span>Описание деятельности:</span>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                </div>
                <div className='org__form__item'>
                    <span>Ссылка на сайт</span>
                    <input type="text" />
                </div>
                <div className='org__form__item'>
                    <span>ОГРН * :</span>
                    <input type="number" required/>
                </div>
                <div className='org__form__item'>
                    <span>ИНН * :</span>
                    <input type="number" required/>
                </div>
                <div className='org__form__item'>
                    <span>КПП * :</span>
                    <input type="number" required/>
                </div>
            </div>
            <button className='fake__button sign__button' style={{width: "40%"}}>Зарегистрировать</button>
        </div>
    );
}

export default CreateOrgProfile;