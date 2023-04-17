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
const bankcard_repository_1 = __importDefault(require("../Repositories/bankcard.repository"));
class BankCardService {
    create(newCard, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            yield bankcard_repository_1.default.create(newCard, idUser);
            return { message: "yay" };
        });
    }
    getAll(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield bankcard_repository_1.default.getAll(idUser);
            if (result) {
                return { message: result };
            }
            return { message: "Не удалось загрузить банковские карты." };
        });
    }
}
exports.default = new BankCardService;
