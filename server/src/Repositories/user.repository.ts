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
}

export default new UserRepository;