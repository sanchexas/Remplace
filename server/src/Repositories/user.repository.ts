import { IUserModel } from "../Models/user.model.js";
import { dbConnection } from "../db.js";
import { OkPacket } from "mysql2";

export class UserRepository{
    getAll(): Promise<IUserModel[]>{
        return new Promise((resolve, reject) => {
            dbConnection.query<IUserModel[]>("SELECT * FROM users", (err: any, res: IUserModel[] | PromiseLike<IUserModel[]>) => {
                if(err){
                    reject(err);
                }else{
                    resolve(res);
                } 
            });
        });
    }
}