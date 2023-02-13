import Axios from 'axios';
import apiPath from '../api-path';
import { IUsersResponse } from '../models/responses/IUserResponse';
Axios.defaults.withCredentials = true;

class UserController{
    async getAllUsers(){
        const response = await Axios.get<IUsersResponse[]>(`${apiPath}/users/getall`);
        console.log(response);
        return response;
    }
    //example
    async getUserById(idReq: number){
        // const data = {fio, email} (короче содержит поля IUserResponse)
        const {data} = await Axios.get<IUsersResponse[]>(`${apiPath}/users/getuserbyid`, {params:{idReq}});
        return data[0];
    }
    async createUser(info: Object){
        await Axios.post<IUsersResponse[]>(`${apiPath}/users/create`, info)
    }
}

export default new UserController();