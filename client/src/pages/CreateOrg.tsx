import { useState } from 'react';
import '../style.css';
import Cookies from 'universal-cookie';
import OrganisationController from '../controllers/OrganisationController';

const CreateOrgProfile = () =>{
    const cookies = new Cookies();
    const ownerId = cookies.get('id_user');
    const [name, setName] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [link, setLink] = useState<string>();
    const [ogrn, setOgrn] = useState<string>();
    const [inn, setInn] = useState<string>();
    const [kpp, setKpp] = useState<string>();

    function sendOrgForm(){
        OrganisationController.create({name, address, description, link, ogrn, inn, kpp, ownerId});
    }
    return(
        <div className='create__org__page'>
            <h1 className='IB'>Зарегистрировать организацию</h1>
            <div className='org__form'>
                <div className='org__form__item'>
                    <span>Наименование организации * :</span>
                    <input type="text" onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div className='org__form__item'>
                    <span>Юридический адрес * :</span>
                    <input type="text" onChange={(e)=>setAddress(e.target.value)} required/>
                </div>
                <div className='org__form__item'>
                    <span>Описание деятельности:</span>
                    <textarea name="" id="" cols={30} rows={10} onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <div className='org__form__item'>
                    <span>Ссылка на сайт</span>
                    <input type="text" onChange={(e)=>setLink(e.target.value)}/>
                </div>
                <div className='org__form__item'>
                    <span>ОГРН * :</span>
                    <input type="text" onChange={(e)=>setOgrn(e.target.value)} required/>
                </div>
                <div className='org__form__item'>
                    <span>ИНН * :</span>
                    <input type="text" onChange={(e)=>setInn(e.target.value)} required/>
                </div>
                <div className='org__form__item'>
                    <span>КПП * :</span>
                    <input type="text" onChange={(e)=>setKpp(e.target.value)} required/>
                </div>
            </div>
            <button className='fake__button sign__button' style={{width: "40%"}} onClick={()=>sendOrgForm()}>Зарегистрировать</button>
        </div>
    );
}

export default CreateOrgProfile;