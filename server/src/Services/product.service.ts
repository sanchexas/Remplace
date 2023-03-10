import { ProductModel } from "../Models/product.model";
import productRepository from "../Repositories/product.repository";


class ProductService{
    async create(newProduct: ProductModel){
        await productRepository.create(newProduct);
        return {message: "Успешно"};
    }
    async createWithFormData(newProduct: ProductModel, productImage: string, idOrg: string | number){
        await productRepository.createWithFormData(newProduct, productImage, idOrg);
        return {message: "Успешно"}; // СДЕЛАТЬ ПРОВЕРКУ !!!
    }
    async getAll(){
        const result = await productRepository.getAll();
        if(result){
            return {message: result};
        }
        return {message: "error, cant get all products"}
    }
    async getTopSix(){
        const result = await productRepository.getTopSix();
        if(result){
            return {message: result};
        }
        return {message: "error, cant get 6 products"}
    }
}

export default new ProductService;