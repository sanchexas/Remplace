import { connection } from "../db";
import { ReviewModel } from "../Models/review.model";

class ReviewRepository{
    async create(newReview: ReviewModel){
        try{
            const conn = await connection();
            const result = await conn.query<ReviewModel[]>('INSERT INTO reviews (text, author_id, product_id) VALUES (?, ?, ?)', [newReview.text, newReview.author_id, newReview.product_id]);
            await conn.end();
            return result[0];
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
}

export default new ReviewRepository;