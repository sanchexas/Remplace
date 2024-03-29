import e, { Request, Response } from "express";
import { ProductModel } from "../Models/product.model";
import productService from "../Services/product.service";
import orgService from "../Services/org.service";
import { ParsedQs } from "qs";

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
    async getAll(req: Request, res: Response){
        try{
            const result = await productService.getAll();
            return res.json({
                message: result.message,
            });
        }
        catch(e){
            return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
        }
    }
    async getTopSix(req: Request, res: Response){
        try{
            const result = await productService.getTopSix();
            return res.json({
                message: result.message,
            });
        }
        catch(e){
            return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
        }
    }
    async getByOrgId(req: Request, res: Response){
        try{
            if(req.query.idOrg){
                const reqIdOrg: string | ParsedQs | string[] | ParsedQs[] = req.query.idOrg;
                const result = await productService.getByOrgId(reqIdOrg);
                return res.json({
                    message: result.message,
                });
            }
        }
        catch(e){
            return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
        }
    }
    async deleteById(req: Request, res: Response){
        try{
            if(req.body.idProduct){
                const idProduct = req.body.idProduct;
                const result = await productService.deleteById(idProduct);
                return res.json({
                    message: result.message,
                });
            }
        }catch(e){
            return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
        }
    }
    async getById(req: Request, res: Response){
        try{
            if(req.query.idProduct){
                const idProduct: string | ParsedQs | string[] | ParsedQs[] = req.query.idProduct;
                const result = await productService.getById(idProduct);
                return res.json({
                    message: result.message,
                });
            }
        }catch(e){
            return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
        }
    }
    async update(req: Request, res: Response){
        const product: ProductModel = req.body;
        const productImage: string | undefined = req.file?.path;
        console.log(productImage)
        if(product !== undefined && productImage !== undefined){
            try{
                const result = await productService.update(product, productImage);
                return res.json({
                    message: result.message,
                });
            }catch(e){
                return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
            }
        }
    }
    async getByCategoryId(req: Request, res: Response){
        const categoryId = req.query.id;
        if(categoryId){
            try{
                const result = await productService.getByCategoryId(categoryId);
                return res.json({
                    message: result.message,
                });
            }catch(e){
                return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
            }
        }
    }
    async getByTitle(req: Request, res: Response){
        try{
            if(req.query.title){
                const title: string | ParsedQs | string[] | ParsedQs[] = req.query.title;
                const result = await productService.getByTitle(title);
                return res.json(result);
            }
        }catch(e){
            return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
        }
    }
}
    

export default new ProductController;