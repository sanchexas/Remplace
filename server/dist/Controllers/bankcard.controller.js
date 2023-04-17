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
const bankcard_service_1 = __importDefault(require("../Services/bankcard.service"));
class BankCardController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUser = req.cookies.id_user;
            const result = yield bankcard_service_1.default.getAll(idUser);
            return res.json({
                message: result.message,
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCard = req.body;
            const idUser = req.cookies.id_user;
            if (newCard !== undefined && idUser !== undefined) {
                try {
                    const result = yield bankcard_service_1.default.create(newCard, idUser);
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
}
exports.default = new BankCardController;
