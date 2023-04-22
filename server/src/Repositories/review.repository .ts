import { ParsedQs } from "qs";
import { connection } from "../db";
import { ReviewModel } from "../Models/review.model";

class ReviewRepository{
    async create(newReview: ReviewModel){
        try{
            const conn = await connection();
            const result = await conn.query<ReviewModel[]>('INSERT INTO reviews (text, author_id, product_id, rate) VALUES (?, ?, ?, ?)', [newReview.text, newReview.author_id, newReview.product_id, newReview.rate]);
            await conn.end();
            return result[0];
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
    async getByProdId(prodId: string | ParsedQs | string[] | ParsedQs[]){
        try{
            const conn = await connection();
            const result = await conn.query<ReviewModel[]>('SELECT id_review, text, author_id, product_id, sent_at, rate, fio, image FROM reviews LEFT JOIN users ON reviews.author_id=users.id_user WHERE product_id=?;', prodId);
            console.log(result[0]);
            await conn.end();
            return result[0];
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
    async getAveregeRateByProdId(prodId: string | ParsedQs | string[] | ParsedQs[]){
        try{
            const conn = await connection();
            const result = await conn.query<ReviewModel[]>('SELECT rate FROM reviews WHERE product_id = ?', prodId);
            await conn.end();
            return result[0];
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
}

export default new ReviewRepository;