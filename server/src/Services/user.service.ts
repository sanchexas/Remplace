import { ParsedQs } from "qs";
import userRepository from "../Repositories/user.repository";
import bcrypt from 'bcrypt';
import { IUserModel } from "../Models/user.model";


class UserService{
    async getUserById(idReq: string | ParsedQs | string[] | ParsedQs[]){
        const user = await userRepository.getUserById(idReq);
        console.log(user);
        return {
            fio: user[0].fio,
            email: user[0].email,
            role_id: user[0].role_id, 
            phone: user[0].phone, 
            bankCardId: user[0].bank_card_id, 
            birthday: user[0].birthday, 
            image: user[0].image
        };
    }
    async createUser(newUser: IUserModel){
        if(newUser.fio.length < 10 || newUser.fio.length > 100){
            return {message: "ФИО не должно быть меньше 10 либо больше 100 символов"};
        }else if(newUser.password.length < 8 || newUser.password.length > 100){
            return {message: "Пароль должен содержать не меньше 8 и не больше 100 символов"};
        }else if(newUser.password !== newUser.reppassword){
            return {message: "Неверный повтор пароля"};
        }else if(await userRepository.doesExist(newUser.email) > 0){
            return {message: "Пользователь с данным e-mail уже существует"};
        }
        const hashPassword = await bcrypt.hash(newUser.password, 10);
        await userRepository.createUser(newUser, hashPassword);
        return {message: "Успешно"};
    }
    async signIn(signedUserBody: IUserModel){
        const result = await userRepository.signIn(signedUserBody);
        const doesSuit = await bcrypt.compare(signedUserBody.password, result[0].password);
        if(!doesSuit){
            return {message: "Неверный логин либо пароль"};
        }
        return {message: {id: result[0].id_user, fio: result[0].fio, email: result[0].email, role_id: result[0].role_id}};
    }
    async update(updatedUserBody: IUserModel){
        const result = await userRepository.update(updatedUserBody); //прописать проверку
        return {message: result};
    }
}

export default new UserService;