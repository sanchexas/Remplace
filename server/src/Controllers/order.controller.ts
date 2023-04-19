import { Request, Response } from "express";
import { OrderModel } from "../Models/order.model";
import orderService from "../Services/order.service";

class OrderController{
    async create(req: Request, res: Response){
        const newOrder: OrderModel = req.body;
        const idUser = req.cookies.id_user;
        if(newOrder !== undefined){
            try{
                const result = await orderService.create(newOrder, idUser);
                return res.json({
                    message: result.message,
                });
            }catch(e){
                return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
            }
        }
    }
}
    

export default new OrderController;