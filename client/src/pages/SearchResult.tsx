import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductController from "../controllers/ProductController";
import { IProductModel } from "../models/IProductModel";
import ProductCard from "../components/ProductCard";

const SearchResult = () =>{
    const [products, setProducts] = useState<JSX.Element | JSX.Element[]>();
    const [searchParams, setSearchParams] = useSearchParams();
    const text = searchParams.get("text");
    useEffect(()=>{
        ProductController.getByTitle(text).then((response)=>{
            const resArr: IProductModel[] = response.data.message;
            setProducts(resArr.map((product: IProductModel)=>{
                return(
                    <ProductCard key={product.id_product} id={product.id_product} title={product.title} image={product.image} price={product.price} quantity={product.quantity}/>
                );
            }));
        });
    },[]);
    return(
        <div>
            {products}
        </div>
    );
}

export default SearchResult;