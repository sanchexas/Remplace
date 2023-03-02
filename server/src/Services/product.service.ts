import { ParsedQs } from "qs";
import orgRepository from "../Repositories/org.repository";
import { ProductModel } from "../Models/product.model";
import productRepository from "../Repositories/product.repository";


class ProductService{
    async create(newProduct: ProductModel){
        await productRepository.create(newProduct);
        return {message: "Успешно"};
    }
}

export default new ProductService;