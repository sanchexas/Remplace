import '../style.css';
import CarouselNew from '../components/CarouselNew';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () =>{
    const [query, setQuery] = useState<string>('');
    const redirect = useNavigate();
    return(
        <div className='main__page'>
            <div className="catalogue__search__wrapper">
                <div className="catalogue__search__block">
                    <Link to='catalogue' className="catalogue__button fake__button">
                        <div>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.125 4.375H5.83333C5.02792 4.375 4.375 5.02792 4.375 5.83333V13.125C4.375 13.9304 5.02792 14.5833 5.83333 14.5833H13.125C13.9304 14.5833 14.5833 13.9304 14.5833 13.125V5.83333C14.5833 5.02792 13.9304 4.375 13.125 4.375Z" stroke="#0762C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.125 20.4166H5.83333C5.02792 20.4166 4.375 21.0695 4.375 21.875V29.1666C4.375 29.972 5.02792 30.625 5.83333 30.625H13.125C13.9304 30.625 14.5833 29.972 14.5833 29.1666V21.875C14.5833 21.0695 13.9304 20.4166 13.125 20.4166Z" stroke="#0762C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M29.1666 4.375H21.875C21.0695 4.375 20.4166 5.02792 20.4166 5.83333V13.125C20.4166 13.9304 21.0695 14.5833 21.875 14.5833H29.1666C29.972 14.5833 30.625 13.9304 30.625 13.125V5.83333C30.625 5.02792 29.972 4.375 29.1666 4.375Z" stroke="#0762C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M29.1666 20.4166H21.875C21.0695 20.4166 20.4166 21.0695 20.4166 21.875V29.1666C20.4166 29.972 21.0695 30.625 21.875 30.625H29.1666C29.972 30.625 30.625 29.972 30.625 29.1666V21.875C30.625 21.0695 29.972 20.4166 29.1666 20.4166Z" stroke="#0762C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Каталог
                        </div>
                    </Link>
                    <div className="search">
                        <input type="text" placeholder="Найти..." onChange={(e)=>setQuery(e.target.value)}/>
                        <button className="search__button" onClick={()=>redirect(`/search?text=${query}`)}>
                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8749 21.875L17.202 17.1938M19.7916 10.9375C19.7916 13.2858 18.8587 15.5379 17.1983 17.1984C15.5378 18.8589 13.2857 19.7917 10.9374 19.7917C8.58915 19.7917 6.33706 18.8589 4.67658 17.1984C3.0161 15.5379 2.08325 13.2858 2.08325 10.9375C2.08325 8.58927 3.0161 6.33718 4.67658 4.6767C6.33706 3.01622 8.58915 2.08337 10.9374 2.08337C13.2857 2.08337 15.5378 3.01622 17.1983 4.6767C18.8587 6.33718 19.7916 8.58927 19.7916 10.9375Z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <h1>Новинки</h1>
            <div className='carousel'>
                <CarouselNew/>
            </div>
        </div>
    );
}

export default MainPage;