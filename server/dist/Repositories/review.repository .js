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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class ReviewRepository {
    create(newReview) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const result = yield conn.query('INSERT INTO reviews (text, author_id, product_id, rate) VALUES (?, ?, ?, ?)', [newReview.text, newReview.author_id, newReview.product_id, newReview.rate]);
                yield conn.end();
                return result[0];
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    getByProdId(prodId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const result = yield conn.query('SELECT id_review, text, author_id, product_id, sent_at, rate, fio, image FROM reviews LEFT JOIN users ON reviews.author_id=users.id_user WHERE product_id=?;', prodId);
                console.log(result[0]);
                yield conn.end();
                return result[0];
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    getAveregeRateByProdId(prodId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const result = yield conn.query('SELECT rate FROM reviews WHERE product_id = ?', prodId);
                yield conn.end();
                return result[0];
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
}
exports.default = new ReviewRepository;
