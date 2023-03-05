import e, { Request, Response } from "express";
import { ProductModel } from "../Models/product.model";
import productService from "../Services/product.service";
import orgService from "../Services/org.service";

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
    async createWithFormData(req: Request, res: Response){ //Вообще всю эту логику надо бы переместить в сервис, но мне лень
        const newProduct: ProductModel = req.body;
        const productImage: string | undefined = req.file?.path;
        const currentUserId: string  = req.cookies.id_user;
        if(newProduct !== undefined && productImage !== undefined){
            try{
                const orgResult = await orgService.getByOwnerId(currentUserId);
                if(typeof orgResult.message !== 'string' && orgResult.message.id_organisation !== undefined){
                    const result = await productService.createWithFormData(newProduct, productImage, orgResult.message.id_organisation);
                    return res.json({
                        message: result.message,
                    });
                }
            }catch(e){
                return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
            }
        }
    }
}

export default new ProductController;