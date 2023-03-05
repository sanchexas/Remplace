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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class UserRepository {
    getUserById(idReq) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const users = yield conn.query('SELECT * FROM users WHERE id_user = ?', idReq);
                yield conn.end();
                return users[0];
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    doesExist(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const checkUsers = yield conn.query('SELECT * FROM users WHERE email = ?', email);
                yield conn.end();
                return checkUsers[0].length;
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    signIn(signedUserBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const result = yield conn.query('SELECT * FROM users WHERE email = ?', signedUserBody.email);
                yield conn.end();
                return result[0];
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    createUser(newUser, hashPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                yield conn.query('INSERT INTO users (fio, email, password, role_id) VALUES (?, ?, ?, ?)', [newUser.fio, newUser.email, hashPassword, 2]);
                yield conn.end();
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    update(updatedUserBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                yield conn.query('UPDATE users SET fio = ?, email = ?, phone = ?, birthday = ? WHERE id_user = ?;', [updatedUserBody.fio, updatedUserBody.email, updatedUserBody.phone, updatedUserBody.birthday, updatedUserBody.id]);
                yield conn.end();
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
}
exports.default = new UserRepository;
