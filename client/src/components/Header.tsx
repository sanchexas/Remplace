import '../style.css';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import UserController from '../controllers/UserController';
import Cookies from 'universal-cookie';
import apiPath from '../api-path';
import defaultAvatar from '../images/avatar_default.png';

const Header = () =>{
    const [fio, setFio] = useState<string>();
    const [img, setImg] = useState<string>();
    const cookies = new Cookies();
    useEffect(()=>{
        if(cookies.get('id_user')){
            UserController.getUserById(cookies.get('id_user')).then((response)=>{
                setFio(response.message?.fio);
                setImg(response.message?.image);
            });
        }
    },[]);
    function actions(){
        if(cookies.get('role_id') === '2'){
            return(
                <div className='head__nav__actions'>
                <Link to='/favorite'>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.75 3.75C5.29875 3.75 2.5 6.52 2.5 9.9375C2.5 12.6962 3.59375 19.2438 14.36 25.8625C14.5529 25.9798 14.7743 26.0419 15 26.0419C15.2257 26.0419 15.4471 25.9798 15.64 25.8625C26.4062 19.2438 27.5 12.6962 27.5 9.9375C27.5 6.52 24.7012 3.75 21.25 3.75C17.7988 3.75 15 7.5 15 7.5C15 7.5 12.2012 3.75 8.75 3.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                {/* <Link to='/messanger'>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 7.5C2.5 6.83696 2.76339 6.20107 3.23223 5.73223C3.70107 5.26339 4.33696 5 5 5H25C25.663 5 26.2989 5.26339 26.7678 5.73223C27.2366 6.20107 27.5 6.83696 27.5 7.5V22.5C27.5 23.163 27.2366 23.7989 26.7678 24.2678C26.2989 24.7366 25.663 25 25 25H5C4.33696 25 3.70107 24.7366 3.23223 24.2678C2.76339 23.7989 2.5 23.163 2.5 22.5V7.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.5 10L11.8763 17.5013C12.7629 18.2106 13.8645 18.5971 15 18.5971C16.1355 18.5971 17.2371 18.2106 18.1237 17.5013L27.5 10" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                </Link> */}
                <Link to='/cart'>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.25 8.75H23.4875C23.8368 8.75001 24.1822 8.82321 24.5014 8.96488C24.8207 9.10655 25.1067 9.31354 25.3411 9.57252C25.5754 9.83149 25.7529 10.1367 25.8621 10.4685C25.9713 10.8002 26.0098 11.1512 25.975 11.4988L25.225 18.9988C25.1633 19.6156 24.8746 20.1876 24.415 20.6036C23.9553 21.0196 23.3575 21.25 22.7375 21.25H10.8C10.2218 21.2502 9.66147 21.0501 9.21431 20.6836C8.76714 20.3171 8.46082 19.8069 8.3475 19.24L6.25 8.75Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
                        <path d="M6.25 8.75L5.2375 4.69625C5.16979 4.42594 5.01369 4.18601 4.79401 4.01457C4.57433 3.84313 4.30366 3.75001 4.025 3.75H2.5M10 26.25H12.5M20 26.25H22.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                </div>
            );
        }else if(cookies.get('role_id') === '3'){
            return(
                <div className='head__nav__actions'>
                    <Link to='/messanger'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 7.5C2.5 6.83696 2.76339 6.20107 3.23223 5.73223C3.70107 5.26339 4.33696 5 5 5H25C25.663 5 26.2989 5.26339 26.7678 5.73223C27.2366 6.20107 27.5 6.83696 27.5 7.5V22.5C27.5 23.163 27.2366 23.7989 26.7678 24.2678C26.2989 24.7366 25.663 25 25 25H5C4.33696 25 3.70107 24.7366 3.23223 24.2678C2.76339 23.7989 2.5 23.163 2.5 22.5V7.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.5 10L11.8763 17.5013C12.7629 18.2106 13.8645 18.5971 15 18.5971C16.1355 18.5971 17.2371 18.2106 18.1237 17.5013L27.5 10" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <Link to='/notifications'>
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.75 24.25C18.75 25.2446 18.3549 26.1984 17.6516 26.9017C16.9483 27.6049 15.9945 28 15 28C14.0054 28 13.0516 27.6049 12.3483 26.9017C11.645 26.1984 11.25 25.2446 11.25 24.25M15.9012 6.75377L14.0687 6.75002C9.8887 6.74002 6.25995 10.1363 6.2312 14.25V18.9875C6.2312 19.975 6.1062 20.9388 5.56745 21.76L5.2087 22.3075C4.66245 23.1375 5.24995 24.25 6.2312 24.25H23.7687C24.75 24.25 25.3362 23.1375 24.7912 22.3075L24.4325 21.76C23.895 20.9388 23.7687 19.9738 23.7687 18.9863V14.2513C23.7187 10.1363 20.0812 6.76377 15.9012 6.75377Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 3C15.663 3 16.2989 3.26339 16.7678 3.73223C17.2366 4.20107 17.5 4.83696 17.5 5.5V6.75H12.5V5.5C12.5 4.83696 12.7634 4.20107 13.2322 3.73223C13.7011 3.26339 14.337 3 15 3Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            );
        }else if(cookies.get('role_id') === '1'){
            return(
                <div>Admin</div>
            )
        }else{
            return(
                <div className='head__nav__actions'>
                    <Link to='/cart'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.25 8.75H23.4875C23.8368 8.75001 24.1822 8.82321 24.5014 8.96488C24.8207 9.10655 25.1067 9.31354 25.3411 9.57252C25.5754 9.83149 25.7529 10.1367 25.8621 10.4685C25.9713 10.8002 26.0098 11.1512 25.975 11.4988L25.225 18.9988C25.1633 19.6156 24.8746 20.1876 24.415 20.6036C23.9553 21.0196 23.3575 21.25 22.7375 21.25H10.8C10.2218 21.2502 9.66147 21.0501 9.21431 20.6836C8.76714 20.3171 8.46082 19.8069 8.3475 19.24L6.25 8.75Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
                            <path d="M6.25 8.75L5.2375 4.69625C5.16979 4.42594 5.01369 4.18601 4.79401 4.01457C4.57433 3.84313 4.30366 3.75001 4.025 3.75H2.5M10 26.25H12.5M20 26.25H22.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            );
        }
    }
    function loginBlock(){
        if(cookies.get('id_user')){
            return(
                <Link to='/profile' style={{textDecoration: "none", color: "black", display: "flex", alignItems: "center", gap: "10px"}}>
                    <div className='head__pfp'>
                        <img src={(img !== null && img !== undefined) ? `${apiPath}/${img}` : defaultAvatar} alt="avatar" />
                    </div>
                    {fio}
                </Link>
            );
        }
        return(
            <Link to="/signin" className="sign__button fake__button">
                Войти
            </Link>
        );
    }
    return(
        <header>
            <Logo/>
            <div className="head__nav">
                    {actions()}
                <div className="head__nav__login">
                    {loginBlock()}
                </div>
            </div>
        </header>
    );
}

export default Header;