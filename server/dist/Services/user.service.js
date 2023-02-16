"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("../Repositories/user.repository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    async getUserById(idReq) {
        const user = await user_repository_1.default.getUserById(idReq);
        console.log(user);
        return { fio: user[0].fio, email: user[0].email };
    }
    async createUser(newUser) {
        console.log(newUser);
        if (newUser.fio.length < 10 || newUser.fio.length > 100) {
            return { message: "ФИО не должно быть меньше 10 либо больше 100 символов" };
        }
        else if (newUser.password.length < 8 || newUser.password.length > 100) {
            return { message: "Пароль должен содержать не меньше 8 и не больше 100 символов" };
        }
        else if (newUser.password !== newUser.reppassword) {
            return { message: "Неверный повтор пароля" };
        }
        else if (await user_repository_1.default.doesExist(newUser.email) > 0) {
            return { message: "Пользователь с данным e-mail уже существует" };
        }
        const hashPassword = await bcrypt_1.default.hash(newUser.password, 10);
        await user_repository_1.default.createUser(newUser, hashPassword);
        return { message: "Успешно" };
    }
}
exports.default = new UserService;
