"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("../Repositories/user.repository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    getUserById(idReq) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_repository_1.default.getUserById(idReq);
            return {
                fio: user[0].fio,
                email: user[0].email,
                role_id: user[0].role_id,
                phone: user[0].phone,
                bankCardId: user[0].bank_card_id,
                birthday: user[0].birthday,
                image: user[0].image
            };
        });
    }
    createUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            if (newUser.fio.length < 10 || newUser.fio.length > 100) {
                return { message: "ФИО не должно быть меньше 10 либо больше 100 символов" };
            }
            else if (newUser.password.length < 8 || newUser.password.length > 100) {
                return { message: "Пароль должен содержать не меньше 8 и не больше 100 символов" };
            }
            else if (newUser.password !== newUser.reppassword) {
                return { message: "Неверный повтор пароля" };
            }
            else if ((yield user_repository_1.default.doesExist(newUser.email)) > 0) {
                return { message: "Пользователь с данным e-mail уже существует" };
            }
            const hashPassword = yield bcrypt_1.default.hash(newUser.password, 10);
            yield user_repository_1.default.createUser(newUser, hashPassword);
            return { message: "Успешно" };
        });
    }
    signIn(signedUserBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_repository_1.default.signIn(signedUserBody);
            const doesSuit = yield bcrypt_1.default.compare(signedUserBody.password, result[0].password);
            if (!doesSuit) {
                return { message: "Неверный логин либо пароль" };
            }
            return { message: { id: result[0].id_user, fio: result[0].fio, email: result[0].email, role_id: result[0].role_id } };
        });
    }
    update(updatedUserBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_repository_1.default.update(updatedUserBody); //прописать проверку
            return { message: result };
        });
    }
}
exports.default = new UserService;
