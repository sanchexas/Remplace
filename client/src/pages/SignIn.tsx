import { Link } from 'react-router-dom';
import { LogoDark } from '../components/LogoDark';
import '../style.css';
import { useState } from 'react';
import UserController from '../controllers/UserController';
import Cookies from 'universal-cookie';


const SignIn = () =>{
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const cookies = new Cookies();
    console.log(cookies.get("email")) // DELETE IT LATER!
    return(
        <div className="sign__page">
            <div className='header__logo'>
                <LogoDark/>
            </div>
            <div className='sign__two__blocks'>
                <div className='sign__desc__block'>
                    <h1>sdsdsdsd</h1>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    <h1>kgkgfkfg</h1>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </div>
                <div className='sign__form__block'>
                    <form className='sign__form'>
                        <h1>Вход</h1>
                        <div className='sign__form__inputs'>
                            <div className='sign__input'>
                                <input type="email" name='email' placeholder='Электронная почта' onChange={(e)=> setEmail(e.target.value)} required/>
                            </div>
                            <div className='sign__input'>
                                <input type="password" name='password' placeholder='Пароль' onChange={(e)=> setPassword(e.target.value)} required/>
                            </div>
                        </div>
                        <button className='sign__button' style={{height: "60px", width: "30%"}} onClick={(e)=>{UserController.signIn({email: email, password: password}); e.preventDefault()}}>Войти</button>
                        <span>или</span>
                        <Link to='/signup'>Зарегистрироватья</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;