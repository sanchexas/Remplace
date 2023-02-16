import { Link } from 'react-router-dom';
import { LogoDark } from '../components/LogoDark';
import '../style.css';
import { useState } from 'react';
import UserController from '../controllers/UserController';


const SignUp = () =>{
    const [fio, setFio] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [reppassword, setReppassword] = useState<string>();
    function create(){
        UserController.createUser({fio: fio, email: email, password: password, reppassword: reppassword});
    }
    return(
            <div className="sign__page signup__background">
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
                        <form className='sign__form' >
                            <h1>Регистрация</h1>
                            <div className='sign__form__inputs'>
                                <div className='sign__input'>
                                    <input name='fio' type="text" placeholder='ФИО' onChange={(e)=>setFio(e.target.value)} required/>
                                </div>
                                <div className='sign__input'>
                                    <input name='email' type="email" placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)} required/>
                                </div>
                                <div className='sign__input'>
                                    <input name='password' type="password" placeholder='Придумайте пароль' onChange={(e)=>setPassword(e.target.value)} required/>
                                </div>
                                <div className='sign__input'>
                                    <input name='reppassword' type="password" placeholder='Повторите пароль' onChange={(e)=>setReppassword(e.target.value)} required/>
                                </div>
                            </div>
                            <button className='sign__button' style={{height: "60px", width: "40%"}} onClick={(e)=>{create(); e.preventDefault()}}>Зарегистрироваться</button>
                            <span>или</span>
                            <Link to='/signin'>Войти</Link>
                        </form>
                    </div>
                </div>
                
            </div>
    );
}

export default SignUp;