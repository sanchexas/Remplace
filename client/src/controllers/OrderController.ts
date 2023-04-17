import Axios from 'axios';
import apiPath from '../api-path';
import { IOrderModel } from '../models/IOrderModel';
Axios.defaults.withCredentials = true;

class OrderController{
    // async create(data: IOrganisation){ 
    //     const response = await Axios.post<IOrganisationResponse[]>(`${apiPath}/orgs/create`, data);
    // }
    async create(order: IOrderModel){
        const response = await Axios.post<IOrderModel>(`${apiPath}/orders/create`, order);
        
    }
}

export default new OrderController();