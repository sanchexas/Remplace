import Axios from 'axios';
import apiPath from '../api-path';
import { IOrderModel } from '../models/IOrderModel';
import { IOrderResponse } from '../models/responses/IOrderResponse';
Axios.defaults.withCredentials = true;

class OrderController{
    async create(address: string, idCard: number | string){
        const cart = localStorage.getItem('remcart');
        const generalPrice = localStorage.getItem('general_price');
        if(cart && generalPrice){
            const cartObj = JSON.parse(cart);
            const generalPriceNumber = JSON.parse(generalPrice);
            const data = {
                cartObj: cartObj,
                generalPrice: generalPriceNumber,
                address: address,
                idCard: idCard
            }
            const response = await Axios.post<IOrderModel>(`${apiPath}/orders/create`, data);
            localStorage.clear();
            window.location.reload();
        }
        
    }
    async getByUserId(){
        const response = await Axios.get(`${apiPath}/orders/getByUserId`);
        return response;
    }
}

export default new OrderController();