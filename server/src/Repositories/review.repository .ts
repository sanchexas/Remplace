import { ParsedQs } from "qs";
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
    async getByProdId(prodId: string | ParsedQs | string[] | ParsedQs[]){
        try{
            const conn = await connection();
            const result = await conn.query<ReviewModel[]>('SELECT * FROM reviews LEFT JOIN users ON reviews.author_id=users.id_user WHERE product_id=?;', prodId);
            console.log(result[0]);
            await conn.end();
            return result[0];
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
}

export default new ReviewRepository;