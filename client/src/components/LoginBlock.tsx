import '../style.css';
import tsuk from '../tsuk.PNG';


const LoginBlock = () =>{
    return(
        <div className="header__account">
                <div className="avatar">
                    <img src={tsuk} alt="avatar"/>
                </div>
                <span>SergeySanches</span>
        </div>
    );
}

export default LoginBlock;