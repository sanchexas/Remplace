import e, { Request, Response, NextFunction } from "express";
import { connection } from "../db";
import {IUserModel} from '../Models/user.model';
import userService from "../Services/user.service";
import bcrypt from 'bcrypt';

class UserController{

    doesWork(req: Request, res: Response){
        return res.json('User Router and Controller are work').status(200);
    }
    // async getAllUsers(req: Request, res: Response): Promise<Response>{
    //     const conn = await connection();
    //     const users = await conn.query('SELECT * FROM users');
    //     await conn.end();
    //     return res.json(users[0]); 
    // }
    async getUserById(req: Request, res: Response, next: NextFunction){
        const id = req.query.idReq;
        if(id !== undefined){
            try{
                const user = await userService.getUserById(id)
                return res.jsonp({message: user}).status(200);
            }catch(e){
                return res.json({err: "Пользователь не найден.", click_here: `https://youtu.be/dQw4w9WgXcQ`})
            }
        } 
    }
    // async createUser(req: Request, res: Response): Promise<Response>{
    //     const conn = await connection();
    //     const newUser: IUserModel = req.body;
    //     const hashPassword = await bcrypt.hash(newUser.password, 10);
    //     await conn.query('INSERT INTO users (fio, email, password, role_id) VALUES (?, ?, ?, ?)', [newUser.fio, newUser.email, hashPassword, 2]);
    //     await conn.end();
    //     return res.json({
    //         message: 'user created',
    //     });
    // }
}

export default new UserController;