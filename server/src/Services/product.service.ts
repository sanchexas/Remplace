import { ProductModel } from "../Models/product.model";
import productRepository from "../Repositories/product.repository";


class ProductService{
    async create(newProduct: ProductModel){
        await productRepository.create(newProduct);
        return {message: "Успешно"};
    }
    async createWithFormData(newProduct: ProductModel, productImage: string, idOrg: string | number){
        // console.log(newProduct);
        // console.log(productImage)
        // console.log(idOrg)
        await productRepository.createWithFormData(newProduct, productImage, idOrg);
        return {message: "Успешно"}; // СДЕЛАТЬ ПРОВЕРКУ !!!
    }
}

export default new ProductService;