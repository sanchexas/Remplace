import Axios from 'axios';
import apiPath from '../api-path';
import { IUsersResponse } from '../models/responses/IUserResponse';
import Cookies from 'universal-cookie';
Axios.defaults.withCredentials = true;

class UserController{
    cookies = new Cookies();
    async getAllUsers(){
        const response = await Axios.get<IUsersResponse[]>(`${apiPath}/users/getall`);
        return response;
    }
    async getUserById(idReq: number | string){
        // const data = {fio, email} (короче содержит поля IUserResponse)
        const {data} = await Axios.get<IUsersResponse>(`${apiPath}/users/getuserbyid`, {params:{idReq}});
        return data;
    }
    async createUser(data: object){ 
        const response = await Axios.post<IUsersResponse[]>(`${apiPath}/users/create`, data);
    }
    async signIn(info: Object){
        const response = await Axios.post<IUsersResponse[]>(`${apiPath}/users/signin`, info);
        return response;
    }
    async updateUser(info: object){
        await Axios.post(`${apiPath}/users/update`, info);
    }
}

export default new UserController();