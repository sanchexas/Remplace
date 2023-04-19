import { CartOrderModel, OrderDbModel, OrderModel } from "../Models/order.model";
import { connection } from "../db";

class OrderRepository{
    async create(productOrder: CartOrderModel, idUser: string | number, uniqId: string, generalPrice: number){
        try{
            const conn = await connection();
            const response = await conn.query<OrderDbModel[]>('INSERT INTO orders (uniq_order_id, product_id, cart_quantity, full_product_price, general_price, buyer_id) VALUES (?, ?, ?, ?, ?, ?);', 
            [
                uniqId,
                productOrder.id,
                productOrder.cart_quantity,
                productOrder.full_price,
                generalPrice,
                idUser
            ]);
            await conn.end();
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
}

export default new OrderRepository;