import { Link } from 'react-router-dom';
import '../style.css';
import img1 from '../images/story.jpg'
import img2 from '../images/pay.jpg'
import img3 from '../images/org.jpg'

const UserPanel = () =>{
    return(
        <div>
            <h1 className='IR'>Сервисы</h1>
            <div className='actions'>
                <Link to='/' className='action__card'>
                    <img src={img1} alt="" />
                    <span className='action__card__title IB'>Покупки</span>
                    <span className='action__card__desc'>Просмотрите чеки и историю покупок</span>
                </Link>
                <Link to='/' className='action__card'>
                    <img src={img2} alt="" />
                    <span className='action__card__title IB'>Оплата</span>
                    <span className='action__card__desc'>Прикрепите карту для быстрой оплаты</span>
                </Link>
                <Link to='/create_org_profile' className='action__card'>
                    <img src={img3} alt="" />
                    <span className='action__card__title IB'>Партнерство</span>
                    <span className='action__card__desc'>Продавайте свою продукцию на нашей платформе</span>
                </Link>
            </div>
        </div>
        
    );
}

export default UserPanel;