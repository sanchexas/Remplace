import '../style.css';
type infoProps = {
    fio?: string,
    email?: string,
    phone?: string | undefined | null,
    birthday?: string | undefined | null
}
const UserInfo = ({fio, email, phone, birthday}: infoProps) =>{
    return(
        <div>
            <p className='profile__info__text IB'>{fio}</p>
            <p className='profile__info__text IR'>{email}</p>
            <p className='profile__info__text IR'>{phone}</p>
            <p className='profile__info__text IR'>{birthday}</p>
        </div>
    );
}

export default UserInfo;