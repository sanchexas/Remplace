import { connection } from "../db";
import { IOrganisationModel } from "../Models/organisation.model";
import { ProductModel } from "../Models/product.model";

class ProductRepository{
    async create(newProduct: ProductModel){
        try{
            const conn = await connection();
            const response = await conn.query<ProductModel[]>('INSERT INTO products (title, description, origin_price, category_id, organisation_id, pickup_address, quantity) VALUES (?,?,?,?,?,?,?)', [newProduct.title, newProduct.description, newProduct.originPrice, newProduct.categoryId, newProduct.organisationId, newProduct.pickUpAddress, newProduct.quantity]);
            await conn.end();
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
}

export default new ProductRepository;