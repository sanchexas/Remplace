import { useEffect, useState } from 'react';
import '../style.css';
import CategoryController from '../controllers/CategoryController';
import { ICategoryResponse } from '../models/responses/ICategoryResponse';
import { Link } from 'react-router-dom';

const Catalogue = () => {
    const [categories, setCategories] = useState();
    useEffect(()=>{
        CategoryController.getAll().then((response)=>{
            const resArr = response.data.message;
            setCategories(resArr.map((category: ICategoryResponse)=>{
                return(
                    <Link to={`/ctprd?category=${category.id_category}`} className='category__item'>
                        {category.cat_title}
                    </Link>
                );
            }))
        });
    }, []);
    return(
        <div className='catalogue__wrapper'>
            <div style={{display: "flex", flexDirection: "column", gap: "25px"}}>
                <h1>Товары</h1>
                <div className='categories__list'>
                    {categories}
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "25px"}}>
                <h1>Услуги</h1>
                <div className='categories__list'>

                </div>
            </div>
        </div>
    );
}

export default Catalogue;