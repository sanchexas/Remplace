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
}

export default new ReviewService;