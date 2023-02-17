"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class UserRepository {
    async getUserById(idReq) {
        try {
            const conn = await (0, db_1.connection)();
            const users = await conn.query('SELECT * FROM users WHERE id_user = ?', idReq);
            await conn.end();
            return users[0];
        }
        catch (e) {
            throw new Error("ОшибОчка");
        }
    }
    async doesExist(email) {
        try {
            const conn = await (0, db_1.connection)();
            const checkUsers = await conn.query('SELECT * FROM users WHERE email = ?', email);
            await conn.end();
            return checkUsers[0].length;
        }
        catch (e) {
            throw new Error("ОшибОчка");
        }
    }
    async signIn(signedUserBody) {
        try {
            const conn = await (0, db_1.connection)();
            const result = await conn.query('SELECT * FROM users WHERE email = ?', signedUserBody.email);
            await conn.end();
            return result[0];
        }
        catch (e) {
            throw new Error("ОшибОчка");
        }
    }
    async createUser(newUser, hashPassword) {
        try {
            const conn = await (0, db_1.connection)();
            await conn.query('INSERT INTO users (fio, email, password, role_id) VALUES (?, ?, ?, ?)', [newUser.fio, newUser.email, hashPassword, 2]);
            await conn.end();
        }
        catch (e) {
            throw new Error("ОшибОчка");
        }
    }
}
exports.default = new UserRepository;
