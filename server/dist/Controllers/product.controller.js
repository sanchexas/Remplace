"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("../Services/product.service"));
class ProductController {
    async create(req, res) {
        const newProduct = req.body;
        if (newProduct !== undefined) {
            try {
                const result = await product_service_1.default.create(newProduct);
                return res.json({
                    message: result.message,
                });
            }
            catch (e) {
                return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
            }
        }
    }
}
exports.default = new ProductController;
