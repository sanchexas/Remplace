import e, { Request, Response } from "express";
import { ProductModel } from "../Models/product.model";
import productService from "../Services/product.service";
import multer from "multer";
const upload = multer({dest: '../uploads/'})

class ProductController{
    async create(req: Request, res: Response){
        const newProduct: ProductModel = req.body;
        if(newProduct !== undefined){
            try{
                const result = await productService.create(newProduct);
                return res.json({
                    message: result.message,
                });
            }catch(e){
                return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
            }
        }
    }
    async createWithFormData(req: Request, res: Response){
        // const upload = multer({ dest: 'images/' })
        console.log(req.file)
        console.log(req.body)
        res.json(req.body)
    }
}

export default new ProductController;