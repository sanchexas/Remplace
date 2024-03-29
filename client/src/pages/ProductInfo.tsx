import { useEffect, useState } from 'react';
import '../style.css';
import {Link, useSearchParams} from 'react-router-dom';
import ProductController from '../controllers/ProductController';
import apiPath from '../api-path';
import OrganisationController from '../controllers/OrganisationController';
import Cookies from 'universal-cookie';
import ReviewController from '../controllers/ReviewController';
import { IReviewModel } from '../models/IReviewModel';
import Star from '../components/Star';
import PaintStarsByRate from '../components/PaintStarsByRate';

const ProductInfo = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [product, setProduct] = useState<JSX.Element>();
    const [orgTitle, setOrgTitle] = useState();
    const curentProdId = searchParams.get("id");
    const [review, setReview] = useState<string>();
    const [reviews, setReviews] = useState();
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [isSent, setIsSent] = useState<boolean>(false);
    const cookies = new Cookies();

    function sendReview(){
        const data = {
            author_id: cookies.get('id_user'),
            product_id: curentProdId,
            text: review,
            rate: rating
        };
        ReviewController.create(data);
        setIsSent(true);
        setRating(0);
        setTimeout(()=>{
            setIsSent(false);
        }, 100);
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
                        <div key={review.id_review} className='review FS_20'>
                            <div>
                                <div className='review__avatar'><img src={`${apiPath}/${review.image}`} alt="avatar" /></div>
                                <span className='IM'>{review.fio}</span>
                            </div>
                            <div style={{marginLeft: '45px', display: "flex", flexDirection: "column", alignItems: "baseline"}}>
                                <PaintStarsByRate rate={review.rate}/>
                                <span  className='IR'>{review.text}</span>
                            </div>
                        </div>
                    );
                }));
            });
        }
    },[isSent]);    
    return(
        <div className='product__info__wrap'>
            {product}
            <div className='reviews__block'>
                <h1>Отзывы</h1>
                <div style={{display: "flex", gap: "3px"}}>
                    {[...Array(5)].map((_, i)=>{
                        const  ratingValue = i + 1;
                        return(
                            <label 
                                htmlFor="" 
                                key={i} 
                                onClick={()=>{setRating(ratingValue); console.log(ratingValue)}} 
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={()=>setHover(0)}
                                >
                                <input type="radio" name="rating" value={ratingValue} />
                                <Star color={ratingValue <= (rating || hover) ? '#ffbb00' : '#cccccc'}/>
                            </label> 
                        );
                    })}
                </div>
                <div className='write__review' >
                    <textarea cols={50} rows={3} style={{width:"70%"}} onChange={(e)=>setReview(e.target.value)} placeholder='Написать отзыв'></textarea>
                    <button className='save__button' style={{width: "20%"}} onClick={()=>sendReview()}>Отправить</button>
                </div>
                <div className='reviews'>
                    {reviews} 
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;