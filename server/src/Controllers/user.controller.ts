import { Request, Response } from "express";
import { connection } from "../db";
import {IUserModel} from '../Models/user.model';
import { type } from "os";

class UserController{
    doesWork(req: Request, res: Response){
        return res.json('User Router and Controller are work').status(200);
    }
    async getAllUsers(req: Request, res: Response): Promise<Response>{
        const conn = await connection();
        const users = await conn.query('SELECT * FROM users');
        await conn.end();
        return res.json(users[0]); 
    }
    async getUserById(req: Request, res: Response): Promise<Response>{
        const conn = await connection();
        const idUser = req.query.idReq;
        const users = await conn.query('SELECT * FROM users WHERE id_user = ?', idUser);
        await conn.end();
        return res.json(users[0]);
    }
    async createUser(req: Request, res: Response): Promise<Response>{
        const conn = await connection();
        const newUser: IUserModel = req.body;
        await conn.query('INSERT INTO users (fio, email, password, role_id) VALUES (?, ?, ?, ?)', [newUser.fio, newUser.email, newUser.password, 2]);
        await conn.end();
        return res.json({
            message: 'user created',
        });
    }
}

export default new UserController;