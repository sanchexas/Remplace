import { useEffect, useState } from 'react';
import '../style.css';
import {Link, useSearchParams} from 'react-router-dom';
import ProductController from '../controllers/ProductController';
import apiPath from '../api-path';
import OrganisationController from '../controllers/OrganisationController';
import Cookies from 'universal-cookie';
import ReviewController from '../controllers/ReviewController';
import { IReviewModel } from '../models/IReviewModel';

const ProductInfo = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [product, setProduct] = useState<JSX.Element>();
    const [orgTitle, setOrgTitle] = useState();
    const curentProdId = searchParams.get("id");
    const [review, setReview] = useState<string>();
    const [reviews, setReviews] = useState();
    const cookies = new Cookies();

    function sendReview(){
        const data = {
            author_id: cookies.get('id_user'),
            product_id: curentProdId,
            text: review
        }
        ReviewController.create(data);
    }

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
            });
            
        }
    },[orgTitle]); 
    useEffect(()=>{
        if(curentProdId){
            ReviewController.getByProdId(curentProdId).then((response)=>{
                const resArr = response.data.message;
                setReviews(resArr.map((review: IReviewModel)=>{
                    return(
                        <div key={review.id_review}>{review.text}</div>
                    );
                }));
            });
        }
    },[]);    
    return(
        <div className='product__info__wrap'>
            {product}
            <div className='reviews__block'>
                <h1>Отзывы</h1>
                <div className='write__review' >
                    <textarea cols={50} rows={3} style={{width:"70%"}} onChange={(e)=>setReview(e.target.value)} placeholder='Написать отзыв'></textarea>
                    <button className='save__button' style={{width: "20%"}} onClick={()=>sendReview()}>Отправить</button>
                </div>
                {reviews} 
            </div>
        </div>
    );
}

export default ProductInfo;