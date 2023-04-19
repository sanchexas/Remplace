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
const order_repository_1 = __importDefault(require("../Repositories/order.repository"));
const idGenerator_1 = require("../idGenerator");
class OrderService {
    create(newOrder, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const uniqId = (0, idGenerator_1.idGenerator)(idUser);
            for (let i = 0; i < newOrder.cartObj.length; i++) {
                yield order_repository_1.default.create(newOrder.cartObj[i], idUser, uniqId, newOrder.generalPrice);
            }
            return { message: "yay" };
        });
    }
    getProductsByUserId(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield order_repository_1.default.getProductsByUserId(idUser);
            if (result) {
                return result;
            }
            return "Не удалось загрузить товары.";
        });
    }
}
exports.default = new OrderService;
