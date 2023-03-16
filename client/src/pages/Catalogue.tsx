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
                    <Link to='' className='category__item'>
                        {category.title}
                    </Link>
                );
            }))
        });
    }, []);
    return(
        <div style={{display: "flex", flexDirection: "column", gap: "25px"}}>
            <h1>Каталог</h1>
            {categories}
        </div>
    );
}

export default Catalogue;