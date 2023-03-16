import { useEffect, useState } from 'react';
import '../style.css';
import { useSearchParams } from 'react-router-dom';
import ProductController from '../controllers/ProductController';

const Products = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState();
    useEffect(()=>{
        let ctgId = searchParams.get('category');
        if(ctgId) ProductController.getByCategoryId(ctgId)
    }, []);
    return(
        <div className='products__wrapper'>
            <div className='products__list'>

            </div>
        </div>
    );
}

export default Products;