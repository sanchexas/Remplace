import { Router } from "express";
import productController from "../Controllers/product.controller";
import path from 'path';
import multer from "multer";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })
const upload = multer({storage: storage})

const productRouter = Router();

productRouter.post('/create', productController.create);
productRouter.post('/createwithformdata', upload.single('file'), productController.createWithFormData);

export default productRouter;