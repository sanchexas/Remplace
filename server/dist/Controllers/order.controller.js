"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_service_1 = __importDefault(require("../Services/order.service"));
class OrderController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newOrder = req.body;
            const idUser = req.cookies.id_user;
            if (newOrder !== undefined) {
                try {
                    const result = yield order_service_1.default.create(newOrder, idUser);
                    return res.json({
                        message: result.message,
                    });
                }
                catch (e) {
                    return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
                }
            }
        });
    }
    getProductsByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUser = req.cookies.id_user;
            try {
                const result = yield order_service_1.default.getProductsByUserId(idUser);
                return res.json({
                    message: result,
                });
            }
            catch (e) {
                return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
            }
        });
    }
}
exports.default = new OrderController;
