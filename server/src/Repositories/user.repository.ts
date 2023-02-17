import { ParsedQs } from "qs";
import { connection } from "../db";
import { IUserModel } from "../Models/user.model";

class UserRepository{
    async getUserById(idReq: string | ParsedQs | string[] | ParsedQs[]){
        try{
            const conn = await connection();
            const users = await conn.query<IUserModel[]>('SELECT * FROM users WHERE id_user = ?', idReq);
            await conn.end();
            return users[0];
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
    async doesExist(email: string){
        try{
            const conn = await connection();
            const checkUsers = await conn.query<IUserModel[]>('SELECT * FROM users WHERE email = ?', email);
            await conn.end();
            return checkUsers[0].length;
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
    async signIn(signedUserBody: IUserModel){
        try{
            const conn = await connection();
            const result = await conn.query<IUserModel[]>('SELECT * FROM users WHERE email = ?', signedUserBody.email);
            await conn.end();
            return result[0];
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
    async createUser(newUser: IUserModel, hashPassword: string){
        try{
            const conn = await connection();
            await conn.query<IUserModel[]>('INSERT INTO users (fio, email, password, role_id) VALUES (?, ?, ?, ?)', [newUser.fio, newUser.email, hashPassword, 2]);
            await conn.end();
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
}

export default new UserRepository;