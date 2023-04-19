import Axios from 'axios';
import apiPath from '../api-path';
import { IOrderModel } from '../models/IOrderModel';
Axios.defaults.withCredentials = true;

class OrderController{
    // async create(data: IOrganisation){ 
    //     const response = await Axios.post<IOrganisationResponse[]>(`${apiPath}/orgs/create`, data);
    // }
    async create(){
        const cart = localStorage.getItem('remcart');
        const generalPrice = localStorage.getItem('general_price');
        if(cart && generalPrice){
            const cartObj = JSON.parse(cart);
            const generalPriceNumber = JSON.parse(generalPrice);
            const data = {
                cartObj: cartObj,
                generalPrice: generalPriceNumber
            }
            const response = await Axios.post<IOrderModel>(`${apiPath}/orders/create`, data);
        }
        
    }
}

export default new OrderController();