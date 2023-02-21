import '../style.css';
import { useEffect, useRef, useState } from 'react';
import UserController from '../controllers/UserController';
import Cookies from 'universal-cookie';
import UserInfo from '../components/UserInfo';

const Profile = () => {
    const cookies = new Cookies();
    let [fio, setFio] = useState<string>();
    let [email, setEmail] = useState<string>();
    let [phone, setPhone] = useState<string>();
    let [birthday, setBirthday] = useState<string>();
    let [edit, setEdit] = useState<boolean>(false);

    useEffect(()=>{
        UserController.getUserById(cookies.get('id_user')).then((response)=>{
            setFio(response.message?.fio);
            setEmail(response.message?.email);
            setPhone(response.message?.phone);
            setBirthday(response.message?.birthday);
        });
    },[]);
    function updateInfo(){
        UserController.updateUser({fio,email,phone,birthday,id: cookies.get('id_user')});
        window.location.reload();
    }
    const editHandler = () =>{
        (edit === false) ? setEdit(true) : setEdit(false)
    }
    return(
        <div className='profile__wrapper'>
            <div className='profile__info'>
                <div className='avatar'>
                    
                </div>
                {(edit) ? 
                <div className='edit__info__block'>
                    <p>
                        <input type="text" value={fio} onChange={(event)=>setFio(event.target.value)} placeholder='ФИО'/>
                    </p>
                    <p>
                        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='E-mail'/>
                    </p>
                    <p>
                        <input type="text" value={phone} onChange={(event)=>setPhone(event.target.value)} placeholder='Номер телефона'/>
                    </p>
                    <p>
                        <input type="text" value={birthday} onChange={(event)=>setBirthday(event.target.value)} placeholder='Дата рождения'/>
                    </p>
                    <div className='edit__buttons__block'>
                        <button onClick={()=>updateInfo()} className='fake__button save__button'>Сохранить</button>
                        <button onClick={editHandler} className='fake__button cancel__button'>Отмена</button>
                    </div>
                </div>
                : 
                <div>
                    <p className='profile__info__text IB'>{fio}</p>
                    <p className='profile__info__text IR'>{email}</p>
                    <p className='profile__info__text IR'>{phone}</p>
                    <p className='profile__info__text IR'>{birthday}</p>
                    <button className='fake__button edit__button' onClick={editHandler}>Изменить</button>
                </div>}
            </div>
            <div className='profile__story'>

            </div>
        </div>
    );
}

export default Profile;