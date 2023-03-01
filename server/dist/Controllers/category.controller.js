"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_service_1 = __importDefault(require("../Services/category.service"));
class CategoryController {
    async getAll(req, res) {
        const result = await category_service_1.default.getAll();
        return res.json({
            message: result.message,
        });
    }
}
exports.default = new CategoryController;
