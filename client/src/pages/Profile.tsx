import '../style.css';
import { useEffect } from 'react';
import UserController from '../controllers/UserController';

const Profile = () => {
    return(
        <div className='profile__wrapper'>
            <div className='profile__info'>
                <div className='avatar'>
                    
                </div>
                <p className='profile__info__text IB'>Сергей Сенчес-Перес Евгеньевич</p>
                <p></p>
            </div>
            <div className='profile__story'>

            </div>
        </div>
    );
}

export default Profile;