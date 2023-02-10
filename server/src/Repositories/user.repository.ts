import { IUserModel } from "../Models/user.model.js";
import { connection } from "../db.js";
import { OkPacket } from "mysql2";

class UserRepository{
    async getAll(): Promise<IUserModel[]>{
        const conn = await connection() // ПЕРЕНЕСТИ В ДРУГОЙ ФАЙЛ И ИМПОРТИРОВАТЬ ОТТУДА, ЧТОБЫ НЕ БЫЛО ДУБЛИКАТОВ
        return new Promise((resolve, reject) => {
            conn.query<IUserModel[]>("SELECT * FROM users", (err: any, res: IUserModel[] | PromiseLike<IUserModel[]>) => {
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
    async getUserById(id: number): Promise<IUserModel[]>{
        const conn = await connection()
        return new Promise((resolve, reject) => {
            conn.query<IUserModel[]>(`SELECT * FROM users WHERE id_user = ?`, id,  (err: any, res: IUserModel[] | PromiseLike<IUserModel[]>) => {
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

export default new UserRepository();