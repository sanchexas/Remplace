import { Link, useNavigate } from 'react-router-dom';
import '../style.css';
import defaultImage from '../images/noimage.jpg'
import { useEffect, useRef, useState } from 'react';
import CategoryController from '../controllers/CategoryController';
import { ICategoryResponse } from '../models/responses/ICategoryResponse';
import ProductController from '../controllers/ProductController';

const CreateProduct = () =>{
    const redirect = useNavigate();
    const fileInput = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string>();
    const [img, setImg] = useState<File>();
    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [price, setPrice] = useState<number | string>();
    const [categoryId, setCategoryId] = useState<number | string>();
    const [pickUpAddress, setPickUpAddress] = useState<string>();
    const [quantity, setQuantity] = useState<number | string>();
    const [categories, setCategories] = useState();
    useEffect(()=>{
        if(img !== undefined){
            const fileReader = new FileReader();
            fileReader.onloadend = () =>{
                setPreview(fileReader.result as string);
            }
            fileReader.readAsDataURL(img);
        }
    },[img]);
    useEffect(()=>{
        CategoryController.getAll().then((response)=>{
            let responseArr = response.data.message;
            setCategories(responseArr.map((category: ICategoryResponse)=>{
                return(
                    <option value={category.id_category} key={category.id_category}>{category.title}</option>
                );
            }));
        });
    },[]);
    const submitForm = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        let form = document.querySelector('form');
        if(form){
            const formData = new FormData(form);
            await ProductController.createWithFormData(formData);
            redirect('/business');
        }
    }
    return(
        <div className='create__product__wrapper'>
            <Link to='/business'>Назад</Link>
            <div className='create__product'>
                <div className='create__product__form'>
                    <form id='form' className='org__form' onSubmit={submitForm} encType='multipart/form-data' method='post' action='/createwithformdata'>
                        <button  className='fake__button edit__button' onClick={(event)=>{
                            event.preventDefault();
                            fileInput.current?.click();
                        }}>Загрузить фото</button>
                        <input 
                            type="file" 
                            name='image'
                            ref={fileInput} 
                            accept='image/*'
                            style={{display: "none"}}
                            onChange={(event)=>{
                                if(event.target.files !== null){
                                    const file = event.target.files[0];
                                    setImg(file);
                                }
                            }}    
                        />
                        <div className='org__form__item'>
                            <span>Наименование *</span>
                            <input type="text" name='title' onChange={(e)=>setTitle(e.target.value)}/>
                        </div>
                        <div className='org__form__item'>
                            <span>Цена *</span>
                            <input type="number" name='price' onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className='org__form__item'>
                            <span>Описание *</span>
                            <textarea cols={30} rows={10} name='description' onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                        <div className='org__form__item'>
                            <span>Категория *</span>
                            <select name='category_id' onChange={(e)=>setCategoryId(e.target.value)}>
                                {categories}
                            </select>
                        </div>
                        <div className='org__form__item'>
                            <span>Количество на складе *</span>
                            <input type="number" name='quantity' onChange={(e)=>setQuantity(e.target.value)}/>
                        </div>
                        <div className='org__form__item'> 
                            <span>Адрес самовывоза </span>
                            <input type="text" name='pickup_address' onChange={(e)=>setPickUpAddress(e.target.value)}/>
                        </div>
                        <button className='add__button' type='submit' /*onClick={()=>submit()}*/>Создать</button>
                    </form>
                </div>
                <div className='product__preview'>
                    <span className='IM' style={{fontSize: "20px"}}>Так пользователи будут видеть ваш продукт:</span>
                    <div className='product__card'>
                        <div className='product__img'>
                            <img src={(preview !== undefined) ? preview : defaultImage} alt='product pic' />
                        </div>
                        <div className='product__card__info'>
                            <span className='FS_20 IR'>{title}</span>
                            <span className='FS_20 IBl'>{price} ₽</span>
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
                    
                </div>
            </div>
        </div>
    );
}

export default CreateProduct;