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
        return res.json(users[0]);
    }
}
exports.default = new UserController;
