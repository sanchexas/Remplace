"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class UserController {
    doesWork(req, res) {
        return res.json('User Router and Controller are work').status(200);
    }
    async getAllUsers(req, res) {
        const conn = await (0, db_1.connection)();
        const users = await conn.query('SELECT * FROM users');
        await conn.end();
        return res.json(users[0]);
    }
    async getUserById(req, res) {
        const conn = await (0, db_1.connection)();
        const idUser = req.query.idReq;
        const users = await conn.query('SELECT * FROM users WHERE id_user = ?', idUser);
        await conn.end();
        return res.json(users[0]);
    }
    async createUser(req, res) {
        const conn = await (0, db_1.connection)();
        const newUser = req.body;
        await conn.query('INSERT INTO users (fio, email, password, role_id) VALUES (?, ?, ?, ?)', [newUser.fio, newUser.email, newUser.password, 2]);
        await conn.end();
        return res.json({
            message: 'user created',
        });
    }
}
exports.default = new UserController;
