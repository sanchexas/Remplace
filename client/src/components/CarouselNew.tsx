import '../style.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IProductModel } from '../models/IProductModel';
import ProductController from '../controllers/ProductController';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const CarouselNew = () =>{
    const [products, setProducts] = useState();

    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(()=>{
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        if(width < 400){
            console.log("SFDHSDHFj");
        }
    },[width]);

    useEffect(()=>{
        ProductController.getTopSix().then((response)=>{
            const resArr = response?.data.message;
            if(resArr !== undefined){
                setProducts(resArr.map((product: IProductModel)=>{
                    return(
                      <ProductCard 
                        id={product.id_product} 
                        image={product.image} 
                        title={product.title} 
                        price={product.price} 
                        quantity={product.quantity}
                        key={product.id_product}
                      />
                    );
                }));
            }
        });
    },[]);

    const settings = {
        accessibility: false,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 870,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
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

export default CarouselNew;