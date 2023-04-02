import CreditCard from '../components/CreditCard';
import '../style.css';

const Payment = () =>{
    return(
        <div className='payment__page'>
            <CreditCard/>
            <div className='bank__cards'>

            </div>
        </div>
    );
}

export default Payment;