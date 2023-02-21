import '../style.css';

type infoProps = {
    fio?: string,
    email?: string,
    phone?: string | undefined | null,
    birthday?: string | undefined | null
}
const EditInfo = ({fio, email, phone, birthday}: infoProps) =>{
    return(
        <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </div>
    );
}

export default EditInfo;