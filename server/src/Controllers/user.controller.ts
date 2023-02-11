import { Request, Response } from "express";
import { connection } from "../db";

class UserController{
    doesWork(req: Request, res: Response){
        return res.json('User Router and Controller are work').status(200);
    }
    async getAllUsers(req: Request, res: Response): Promise<Response>{
        const conn = await connection();
        const users = await conn.query('SELECT * FROM users');
        return res.json(users[0]);
    }
}

export default new UserController;