import { IUserModel } from "../Models/user.model.js";
import { connection } from "../db.js";
import { OkPacket } from "mysql2";

export class UserRepository{
    async getAll(): Promise<IUserModel[]>{
        const conn = await connection()
        return new Promise((resolve, reject) => {
            conn.query<IUserModel[]>("SELECT login FROM users", (err: any, res: IUserModel[] | PromiseLike<IUserModel[]>) => {
                if(err){
                    reject(err);
                    conn.end();
                }else{
                    resolve(res);
                    conn.end();
                } 
            });
        });
    }
}