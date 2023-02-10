import { Request, Response } from "express";
import UserService from "../Services/user.service.js";

class UserController{
    
    getAll(req: Request,res: Response){
        UserService.getAll().then((result)=>{
            res.send(result);
        });
    }
    getUserById(req: Request,res: Response){
        let id: number = req.body.id;           // ШЛЕТ UNDEFINED 
        console.log(req)
        UserService.getUserById(id).then((result)=>{ 
            res.send(result);
        });
    }
}

export default new UserController;