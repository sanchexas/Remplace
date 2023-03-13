import { ReviewModel } from "../Models/review.model";
import reviewRepository from "../Repositories/review.repository ";

class ReviewService{
    async create(newReview: ReviewModel){ // сделать проверку
        const result = await reviewRepository.create(newReview);
        return {message: result};
    }
}

export default new ReviewService;