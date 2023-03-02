import { Router } from "express";
import productController from "../Controllers/product.controller";

const productRouter = Router();

productRouter.post('/create', productController.create);

export default productRouter;