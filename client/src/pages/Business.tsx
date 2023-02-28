import { Link } from 'react-router-dom';
import '../style.css';

const Business = () =>{
    return(
        <div className='business__wrapper'>
            <div className='business__add'>
                <h1>Продукция</h1>
                <Link to='/create_product' className='fake__button add__button'>Добавить</Link>
            </div>
            <div className='products__list'>
                <div className='product'>

                </div>
            </div>
        </div>
    );
}

export default Business;