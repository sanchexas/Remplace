import { useEffect, useState } from 'react';
import '../style.css';
import {Link, useSearchParams} from 'react-router-dom';
import ProductController from '../controllers/ProductController';
import { IProductResponse } from '../models/responses/IProductResponse';
import apiPath from '../api-path';
import OrganisationController from '../controllers/OrganisationController';

const ProductInfo = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [product, setProduct] = useState<JSX.Element>();
    const [orgTitle, setOrgTitle] = useState();
    const curentProdId = searchParams.get("id");

    useEffect(()=>{
        if(curentProdId !== null){
            ProductController.getById(curentProdId).then((response)=>{
                const resArr = response?.data.message[0];
                OrganisationController.getById(resArr.organisation_id).then((response)=>{
                    const resArr = response?.data.message;
                    setOrgTitle(resArr.name);
                });
                setProduct(()=>{
                    return(
                        <div className='product__info__page'>
                            <div style={{display: "flex", flexDirection: "column", width: "55%", gap: "30px"}}>
                                <h1>{resArr.title}</h1>
                                <img src={`${apiPath}/${resArr.image}`} alt="product img" />
                            </div>
                            <div className='product__info'>
                                <span className='FS_20 IB'>Описание и характеристики: <p className='IR'>{resArr.description}</p></span>
                                <span className='FS_20 IB'>Количество на складе: <p className='IR'>{resArr.quantity} шт.</p></span>
                                <span className='FS_20 IB'>Адрес самовывоза: <p className='IR'>{resArr.pickup_address}</p></span>
                                <span className='FS_20 IB'>Компания: <p className='IR'><Link to=''>{orgTitle}</Link></p></span>
                            </div>
                        </div>
                    );
                });
            // ВЫТЯНУТЬ ОТЗЫВЫ ЗДЕСЬ
            });
        }
    },[orgTitle]); 
    
    return(
        <div className='product__info__wrap'>
            {product}
            <div className='reviews__block'>
                
            </div>
        </div>
    );
}

export default ProductInfo;