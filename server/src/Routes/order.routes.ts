import { Router } from "express";
import orderController from "../Controllers/order.controller";


const orderRouter = Router();

orderRouter.post('/create', orderController.create);
orderRouter.get('/getByUserId', orderController.getProductsByUserId);
export default orderRouter;