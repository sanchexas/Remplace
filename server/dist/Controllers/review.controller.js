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
const review_service_1 = __importDefault(require("../Services/review.service"));
class ReviewController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newReview = req.body;
            if (newReview !== undefined) {
                try {
                    const result = yield review_service_1.default.create(newReview);
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
    getByProdId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prodId = req.query.prodId;
            if (prodId) {
                try {
                    const result = yield review_service_1.default.getByProdId(prodId);
                    return res.json({
                        message: result.message
                    });
                }
                catch (e) {
                    return res.json({ err: "Ошибка" });
                }
            }
        });
    }
}
exports.default = new ReviewController;
