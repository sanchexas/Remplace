"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_repository_1 = __importDefault(require("../Repositories/product.repository"));
class ProductService {
    async create(newProduct) {
        await product_repository_1.default.create(newProduct);
        return { message: "Успешно" };
    }
}
exports.default = new ProductService;
