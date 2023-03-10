import { Link } from 'react-router-dom';
import '../style.css';
import { useEffect, useState } from 'react';
import ProductController from '../controllers/ProductController';
import OrganisationController from '../controllers/OrganisationController';
import Cookies from 'universal-cookie';
import { IProductResponse } from '../models/responses/IProductResponse';
import { IProductModel } from '../models/IProductModel';

const Business = () =>{
    const [products, setProducts] = useState();
    const cookies = new Cookies();
    useEffect(()=>{
        OrganisationController.getByOwnerId(cookies.get('id_user')).then((response)=>{
            const idOrg = response.message?.id_organisation;
            if(idOrg){
                ProductController.getByOrgId(idOrg).then((response)=>{
                    const resProducts = response.data.message;
                    setProducts(resProducts.map((product: IProductModel)=>{
                        return(
                            <p key={product.id_product}>{product.title}</p> // ДОДЕЛАТЬ
                        );
                    }))
                })
            }
        })
    }, []);
    return(
        <div className='business__wrapper'>
            <div className='business__add'>
                <h1>Продукция</h1>
                <Link to='/create_product' className='fake__button add__button'>Добавить</Link>
            </div>
            <div className='products__list'>
                <div className='product'>
                    {products}
                </div>
            </div>
        </div>
    );
}

export default Business;