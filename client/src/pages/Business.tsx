import { Link } from 'react-router-dom';
import '../style.css';
import { useEffect, useState } from 'react';
import ProductController from '../controllers/ProductController';
import OrganisationController from '../controllers/OrganisationController';
import Cookies from 'universal-cookie';
import { IProductResponse } from '../models/responses/IProductResponse';
import { IProductModel } from '../models/IProductModel';
import apiPath from '../api-path';

const Business = () =>{
    const [products, setProducts] = useState();
    const cookies = new Cookies();
    const deleteProduct = (idProduct: number | string) =>{
        ProductController.deleteById(idProduct);
        window.location.reload();
    }
    useEffect(()=>{
        OrganisationController.getByOwnerId(cookies.get('id_user')).then((response)=>{
            const idOrg = response.message?.id_organisation;
            if(idOrg){
                ProductController.getByOrgId(idOrg).then((response)=>{
                    const resProducts = response.data.message;
                    setProducts(resProducts.map((product: IProductModel)=>{
                        return(
                                <div className='list__product__item' key={product.id_product}>
                                    <div className='list__product__img'>
                                        <img src={`${apiPath}/${product.image}`} alt="img" />
                                    </div>
                                    <span style={{width: "20%"}} className='IB'>{product.title}</span>
                                    <span>Количество: {product.quantity}</span>
                                    <span>Цена: {product.price}</span>
                                    <div className='list__product__actions'>
                                        <button onClick={()=>{if(product.id_product)deleteProduct(product.id_product)}}>
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className='delete__icon' d="M2.33325 7.00004H25.6666M11.6666 12.8334V18.6667M16.3333 12.8334V18.6667M4.66659 7.00004H23.3333L21.4899 23.59C21.4267 24.161 21.1552 24.6885 20.7272 25.0717C20.2993 25.4549 19.745 25.6667 19.1706 25.6667H8.82925C8.25483 25.6667 7.70057 25.4549 7.27262 25.0717C6.84468 24.6885 6.57311 24.161 6.50992 23.59L4.66659 7.00004ZM8.56909 3.67154C8.7578 3.27134 9.05641 2.93304 9.43009 2.6961C9.80377 2.45917 10.2371 2.33337 10.6796 2.33337H17.3203C17.7629 2.33315 18.1965 2.45884 18.5704 2.69579C18.9443 2.93274 19.2431 3.27116 19.4319 3.67154L20.9999 7.00004H6.99992L8.56909 3.67154Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        <Link to={`/editproduct?id=${product.id_product}`}>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.5925 6.76003L23.24 9.40628M22.295 4.42878L15.1363 11.5875C14.7664 11.9569 14.5141 12.4275 14.4113 12.94L13.75 16.25L17.06 15.5875C17.5725 15.485 18.0425 15.2338 18.4125 14.8638L25.5713 7.70503C25.7864 7.48991 25.957 7.23452 26.0734 6.95345C26.1899 6.67238 26.2498 6.37113 26.2498 6.0669C26.2498 5.76267 26.1899 5.46143 26.0734 5.18036C25.957 4.89929 25.7864 4.6439 25.5713 4.42878C25.3561 4.21366 25.1007 4.04301 24.8197 3.92659C24.5386 3.81017 24.2374 3.75024 23.9331 3.75024C23.6289 3.75024 23.3276 3.81017 23.0466 3.92659C22.7655 4.04301 22.5101 4.21366 22.295 4.42878Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M23.75 18.75V22.5C23.75 23.163 23.4866 23.7989 23.0178 24.2678C22.5489 24.7366 21.913 25 21.25 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5V8.75C5 8.08696 5.26339 7.45107 5.73223 6.98223C6.20107 6.51339 6.83696 6.25 7.5 6.25H11.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                        );
                    }));
                });
            }
        });
    }, []);
    return(
        <div className='business__wrapper'>
            <div className='business__add'>
                <h1>Ваша продукция</h1>
                <Link to='/create_product' className='fake__button add__button'>Добавить</Link>
            </div>
            <div className='products__list'>
                    {products}
            </div>
        </div>
    );
}

export default Business;