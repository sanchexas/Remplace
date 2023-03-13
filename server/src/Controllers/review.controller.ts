import e, { Request, Response } from "express";
import { ReviewModel } from "../Models/review.model";
import reviewService from "../Services/review.service";

class ReviewController{
    async create(req: Request, res: Response){
        const newReview: ReviewModel = req.body;
        if(newReview !== undefined){
            try{
                const result = await reviewService.create(newReview);
                return res.json({
                    message: result.message,
                });
            }catch(e){
                return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
            }
        }
    }
    // async getAll(req: Request, res: Response){
    //     try{
    //         const result = await productService.getAll();
    //         return res.json({
    //             message: result.message,
    //         });
    //     }
    //     catch(e){
    //         return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
    //     }
    // }
    
}
    

export default new ReviewController;