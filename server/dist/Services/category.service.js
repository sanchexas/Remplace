"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_repository_1 = __importDefault(require("../Repositories/category.repository"));
class CategoryService {
    async getAll() {
        const result = await category_repository_1.default.getAll();
        console.log(result);
        return { message: result };
    }
}
exports.default = new CategoryService;
