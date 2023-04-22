import { ParsedQs } from "qs";
import { ReviewModel } from "../Models/review.model";
import reviewRepository from "../Repositories/review.repository ";

class ReviewService{
    async create(newReview: ReviewModel){ // сделать проверку
        const result = await reviewRepository.create(newReview);
        return {message: result};
    }
    async getByProdId(prodId: string | ParsedQs | string[] | ParsedQs[]){
        const result = await reviewRepository.getByProdId(prodId);
        return {message: result};
    }
    async getAveregeRateByProdId(prodId: string | ParsedQs | string[] | ParsedQs[]){
        const result = await reviewRepository.getAveregeRateByProdId(prodId);
        let avgRate = 0;
        let avg: number = 0;
        for(let i = 0; i < result.length; i++){
            avgRate += result[i].rate;
            avg = (avgRate / result.length);
        }
        return {message: Math.round(avg)};
    }
}

export default new ReviewService;