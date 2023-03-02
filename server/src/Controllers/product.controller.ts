import e, { Request, Response } from "express";
import { ProductModel } from "../Models/product.model";
import productService from "../Services/product.service";

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
}

export default new ProductController;