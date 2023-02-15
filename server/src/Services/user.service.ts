import { ParsedQs } from "qs";
import userRepository from "../Repositories/user.repository";

class UserService{
    
    async getUserById(idReq: string | ParsedQs | string[] | ParsedQs[]){
        const user = await userRepository.getUserById(idReq);
        console.log(user)
        return {fio: user[0].fio, email: user[0].email};
    }
    
}

export default new UserService;