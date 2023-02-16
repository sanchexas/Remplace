import e, { Request, Response, NextFunction } from "express";
import {IUserModel} from '../Models/user.model';
import userService from "../Services/user.service";

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
                const user = await userService.getUserById(id);
                return res.jsonp({message: user}).status(200);
            }catch(e){
                return res.json({err: "Пользователь не найден.", click_here: `https://youtu.be/dQw4w9WgXcQ`})
            }
        } 
    }
    async createUser(req: Request, res: Response){
        const newUser: IUserModel = req.body;
        if(req.body !== undefined){
            try{
                const result = await userService.createUser(newUser)
                console.log(result)
                return res.jsonp({
                    message: result.message,
                });
            }catch(e){
                    return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`})
            }
        }
    }
}

export default new UserController;