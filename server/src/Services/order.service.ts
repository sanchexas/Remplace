import { OrderModel } from "../Models/order.model";
import orderRepository from "../Repositories/order.repository";
import { idGenerator } from "../idGenerator";


class OrderService{
    async create(newOrder: OrderModel, idUser: string | number){
        const uniqId = idGenerator(idUser);
        for(let i = 0; i < newOrder.cartObj.length; i++){
            await orderRepository.create(newOrder.cartObj[i], idUser, uniqId, newOrder.generalPrice);
        }
        return {message: "yay"};
    }
    async getProductsByUserId(idUser: number | string){
        const result = await orderRepository.getProductsByUserId(idUser);
        if(result){
            return result;
        }
        return "Не удалось загрузить товары.";

    }
}

export default new OrderService;