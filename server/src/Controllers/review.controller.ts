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
    async getByProdId(req: Request, res: Response){
        const prodId = req.query.prodId;
        if(prodId){
            try{
                const result = await reviewService.getByProdId(prodId);
                return res.json({
                    message: result.message
                });
            }catch(e){
                return res.json({err: "Ошибка"});
            }
        }
    }
    
}
    

export default new ReviewController;