import '../style.css';
import Header from './Header';
import Main from './Main';

const CenterContainer = () =>{
    return(
        <div className='center__container'>
            <Header/>
            <Main/>
        </div>
    );
}

export default CenterContainer;