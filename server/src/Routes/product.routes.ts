import { Router } from "express";
import productController from "../Controllers/product.controller";
import multer from "multer";
import { storage } from "../storage";

const upload = multer({storage: storage});

const productRouter = Router();

productRouter.post('/create', productController.create);
productRouter.post('/createwithformdata', upload.single('image'), productController.createWithFormData);
productRouter.get('/getall', productController.getAll);

export default productRouter;