import '../style.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IProductModel } from '../models/IProductModel';
import ProductController from '../controllers/ProductController';
import { useEffect, useState } from 'react';
import apiPath from '../api-path';

const CarouselThree = () =>{
    const [products, setProducts] = useState();
    useEffect(()=>{
        ProductController.getAll().then((response)=>{
            const resArr = response?.data.message;
            console.log(resArr);
            if(resArr !== undefined){
                setProducts(resArr.map((product: IProductModel)=>{
                    return(
                        <div className='product__card' key={product.id_product}>
                            <div className='product__img'>
                                <img src={`${apiPath}/${product.image}`} alt='product pic' />
                            </div>
                            <div className='product__card__info'>
                                <span className='FS_20 IR'>{product.title}</span>
                                <span className='FS_20 IBl'>{product.price} ₽</span>
                                <div className='product__card__actions'>
                                    <button className='add__to__cart'>В корзину</button>
                                    <button>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.75 3.75C5.29875 3.75 2.5 6.52 2.5 9.9375C2.5 12.6962 3.59375 19.2438 14.36 25.8625C14.5529 25.9798 14.7743 26.0419 15 26.0419C15.2257 26.0419 15.4471 25.9798 15.64 25.8625C26.4062 19.2438 27.5 12.6962 27.5 9.9375C27.5 6.52 24.7012 3.75 21.25 3.75C17.7988 3.75 15 7.5 15 7.5C15 7.5 12.2012 3.75 8.75 3.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }));
            }
        });
    },[])

    function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#465565", borderRadius: "100%", width: "19px", height: "19px"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#465565", borderRadius: "100%", width: "19px", height: "19px"}}
            onClick={onClick}
          />
        );
      }
      

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
        prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
          <Slider {...settings}>
            {products}
          </Slider>
      );
}

export default CarouselThree;