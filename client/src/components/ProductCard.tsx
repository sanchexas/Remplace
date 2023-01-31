import '..style.css';
import testpic2 from '../testpic2.jpg';

const ProductCard = () =>{
    return(
        <div className="item">
            <a href="" className="item__link">
                <div className="item__image">
                    <img src={testpic2} alt=""/>
                </div>
                <div className="item__content">
                    <div className="item__title">
                        Катушка для провода 40м Катушка для провода 40м Катушка для провода 40м 
                    </div>
                    <div className="item__price">
                        1200 ₽
                    </div>
                </div>
            </a>
            <div className="item__actions">
                <button className="default__button">
                    В корзину
                </button>
                <button className="like__button">
                    <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.2083 4.875C6.18183 4.875 2.91663 8.10667 2.91663 12.0937C2.91663 15.3123 4.19267 22.951 16.7533 30.6729C16.9783 30.8098 17.2366 30.8822 17.5 30.8822C17.7633 30.8822 18.0216 30.8098 18.2466 30.6729C30.8072 22.951 32.0833 15.3123 32.0833 12.0937C32.0833 8.10667 28.8181 4.875 24.7916 4.875C20.7652 4.875 17.5 9.25 17.5 9.25C17.5 9.25 14.2348 4.875 10.2083 4.875Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;