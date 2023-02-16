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
    async getUserById(idReq: number){
        // const data = {fio, email} (короче содержит поля IUserResponse)
        const {data} = await Axios.get<IUsersResponse>(`${apiPath}/users/getuserbyid`, {params:{idReq}});
        return data;
    }
    async createUser(data: object){ 
        const response = await Axios.post<IUsersResponse[]>(`${apiPath}/users/create`, data);
        console.log(response);
    }
    async signIn(info: Object){
        const {data} = await Axios.post<IUsersResponse[]>(`${apiPath}/users/signin`, info);
        return data[0];
    }
}

export default new UserController();