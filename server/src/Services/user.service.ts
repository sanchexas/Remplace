import { UserRepository } from "../Repositories/user.repository.js";

export class UserService{
    async getAll(){
        const urr = new UserRepository;
        try{
            let testVariable;
            await urr.getAll().then((result: Object)=>{
                testVariable = result;
            })
            return testVariable;
        }catch(e){
            return "Errorrrrrrrr";
        }
    }
}