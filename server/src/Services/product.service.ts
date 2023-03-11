import { ProductModel } from "../Models/product.model";
import productRepository from "../Repositories/product.repository";
import { ParsedQs } from "qs";

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
        return {message: "Не удалось загрузить товары."}
    }
    async getTopSix(){
        const result = await productRepository.getTopSix();
        if(result){
            return {message: result};
        }
        return {message: "Не удалось загрузить 6 товаров."}
    }
    async getByOrgId(idOrg: string | ParsedQs | string[] | ParsedQs[]){
        const result = await productRepository.getByOrgId(idOrg);
        if(result){
            return {message: result};
        }
        return {message: "Не удалось найти продукты по указанному id организации."}
    }
    async deleteById(idProduct: number | string){
        const result = await productRepository.deleteById(idProduct);
        if(result){
            return {message: result};
        }
        return {message: "Не удалось удалить продукт."}
    }
}

export default new ProductService;