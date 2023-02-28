import { Link } from 'react-router-dom';
import '../style.css';
import img1 from '../images/business.jpg'
import img2 from '../images/orders.jpg'

const OrganisationPanel = () =>{
    return(
        <div>
            <h1 className='IR'>Сервисы (профиль организации)</h1>
            <div className='actions'>
                <Link to='/create_org_profile' className='action__card'>
                    <img src={img1} alt="" />
                    <span className='action__card__title IB'>Бизнес</span>
                    <span className='action__card__desc'>Добавляйте, удаляйте, обновляйте свою продукцию</span>
                </Link>
                <Link to='/create_org_profile' className='action__card'>
                    <img src={img2} alt="" />
                    <span className='action__card__title IB'>Заказы</span>
                    <span className='action__card__desc'>Просмотрите текущие заказы</span>
                </Link>
            </div>
        </div>
        
    );
}

export default OrganisationPanel;