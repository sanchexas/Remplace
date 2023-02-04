import { Request, Response } from "express";
import { UserService } from "../Services/user.service.js";

export class UserController{
    
    getAll(req: Request,res: Response){
        const us = new UserService;
        us.getAll().then((result: any)=>{
            res.send(result);
        })
    }
}