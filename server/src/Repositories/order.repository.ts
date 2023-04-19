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
    async getProductsByUserId(idUser: number | string){
        try{
            const conn = await connection();
            const result = await conn.query<OrderDbModel[]>('SELECT * FROM orders LEFT JOIN products ON orders.product_id = products.id_product WHERE buyer_id = ? ORDER BY id_order DESC;', idUser);
            await conn.end();
            return result[0];
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
}

export default new OrderRepository;