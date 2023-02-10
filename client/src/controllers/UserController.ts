import { AxiosResponse } from 'axios';
import { IUserModel } from '../models/IUserModel';
import Axios from 'axios';
import apiPath from '../api-path';
Axios.defaults.withCredentials = true;

class UserController{

    async getAllUsers(): Promise<AxiosResponse<IUserModel[]>>{
        const response = await Axios.get<IUserModel[]>(`${apiPath}/users/getall`);
        console.log(response);
        return response;
    }
    async getUserById(id: any): Promise<AxiosResponse<IUserModel[]>>{       // ОТ ANY ИЗБАВИТЬСЯ!!!
        const response = await Axios.get<IUserModel[]>(`${apiPath}/users/getUserById`, id);
        console.log(response);
        return response;
    }

}

export default new UserController();