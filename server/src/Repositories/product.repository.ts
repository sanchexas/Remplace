import { ParsedQs } from "qs";
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
    async createWithFormData(newProduct: ProductModel, productImage: string, idOrg: string | number){
        try{
            const conn = await connection();
            const response = await conn.query<ProductModel[]>('INSERT INTO products (title, description, price, category_id, organisation_id, pickup_address, quantity, image) VALUES (?,?,?,?,?,?,?,?)', [newProduct.title, newProduct.description, newProduct.price, newProduct.category_id, idOrg, newProduct.pickup_address, newProduct.quantity, productImage]);
            await conn.end();
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
    async getAll(){
        try{
            const conn = await connection();
            const response = await conn.query<ProductModel[]>('SELECT * FROM products');
            await conn.end();
            return response[0];
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
    async getTopSix(){
        try{
            const conn = await connection();
            const response = await conn.query<ProductModel[]>('SELECT * FROM products ORDER BY id_product DESC LIMIT 6');
            await conn.end();
            return response[0];
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
    async getByOrgId(idOrg: string | ParsedQs | string[] | ParsedQs[]){
        try{
            const conn = await connection();
            const response = await conn.query<ProductModel[]>('SELECT * FROM products WHERE organisation_id = ? ORDER BY id_product DESC', idOrg);
            await conn.end();
            return response[0];
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
}

export default new ProductRepository;