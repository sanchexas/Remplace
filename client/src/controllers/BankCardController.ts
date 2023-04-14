import Axios from 'axios';
import apiPath from '../api-path';
import { IBankCardModel } from '../models/IBankCardModel';
Axios.defaults.withCredentials = true;

class BankCardController{
    async getAll(){
        const result = await Axios.get(`${apiPath}/bankcards/getall`);
        return result;
    }
    async create(data: IBankCardModel){
        await Axios.post(`${apiPath}/bankcards/create`, data);
    }
}

export default new BankCardController();