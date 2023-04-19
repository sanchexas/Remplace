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
    
}

export default new OrderService;