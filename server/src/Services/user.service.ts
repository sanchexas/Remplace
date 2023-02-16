import { ParsedQs } from "qs";
import userRepository from "../Repositories/user.repository";
import bcrypt from 'bcrypt';
import { IUserModel } from "../Models/user.model";


class UserService{
    
    async getUserById(idReq: string | ParsedQs | string[] | ParsedQs[]){
        const user = await userRepository.getUserById(idReq);
        console.log(user)
        return {fio: user[0].fio, email: user[0].email};
    }
    async createUser(newUser: IUserModel){
        console.log(newUser)
        if(newUser.fio.length < 10 || newUser.fio.length > 100){
            return {message: "ФИО не должно быть меньше 10 либо больше 100 символов"}
        }else if(newUser.password.length < 8 || newUser.password.length > 100){
            return {message: "Пароль должен содержать не меньше 8 и не больше 100 символов"}
        }else if(newUser.password !== newUser.reppasword){
            return {message: "Неверный повтор пароля"}
        }else if(await userRepository.doesExist(newUser.email) > 0){
            return {message: "Пользователь с данным e-mail уже существует"}
        }
        const hashPassword = await bcrypt.hash(newUser.password, 10);
        await userRepository.createUser(newUser, hashPassword);
        return {message: "Успешно"}
    }
}

export default new UserService;