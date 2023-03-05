import { connection } from "../db";
import { CategoryModel } from "../Models/category.model";

class CategoryRepository{
    async getAll(){
        try{
            const conn = await connection();
            const result = await conn.query<CategoryModel[]>('SELECT * FROM categories');
            await conn.end();
            return result[0];
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
}

export default new CategoryRepository;