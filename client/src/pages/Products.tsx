import { useEffect, useState } from 'react';
import '../style.css';
import { useSearchParams } from 'react-router-dom';
import ProductController from '../controllers/ProductController';
import ProductCard from '../components/ProductCard';
import { IProductModel } from '../models/IProductModel';

const Products = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState();
    const [catTitle, setCatTitle] = useState<string>();
    useEffect(()=>{
        let ctgId = searchParams.get('category');
        if(ctgId) ProductController.getByCategoryId(ctgId).then((response)=>{
            const resArr = response?.data.message;
            if(resArr !== undefined){
                setCatTitle(resArr[0].cat_title);
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
    }, []);
    return(
        <div className='products__wrapper'>
            <h1>{catTitle}</h1>
            <div className='ct__products'>
                {products}
            </div>
        </div>
    );
}

export default Products;