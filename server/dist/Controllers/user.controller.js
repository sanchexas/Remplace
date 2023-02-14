"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    constructor() {
        this.SALT_ROUNDS = 10;
    }
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
        const hashPassword = await bcrypt_1.default.hash(newUser.password, 10);
        await conn.query('INSERT INTO users (fio, email, password, role_id) VALUES (?, ?, ?, ?)', [newUser.fio, newUser.email, hashPassword, 2]);
        await conn.end();
        return res.json({
            message: 'user created',
        });
    }
}
exports.default = new UserController;
