import { Request, Response } from "express";
import { CategoryModel } from "../Models/category.model";
import categoryService from "../Services/category.service";

class CategoryController{
    async getAll(req: Request, res: Response){
        const result = await categoryService.getAll();
        return res.json({
            message: result.message,
        });
    }
}

export default new CategoryController;