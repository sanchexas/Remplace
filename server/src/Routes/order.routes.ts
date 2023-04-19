import { Router } from "express";
import orderController from "../Controllers/order.controller";


const orderRouter = Router();

orderRouter.post('/create', orderController.create);
// orgRouter.get('/getbyownerid', orgController.getByOwnerId);

export default orderRouter;