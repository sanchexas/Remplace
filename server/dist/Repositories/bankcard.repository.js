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
class BankCardRepository {
    create(newCard, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const response = yield conn.query('INSERT INTO bank_cards (number, cvc, expire, owner, is_selected, balance) VALUES (?,?,?,?,?,?)', [newCard.number, newCard.cvc, newCard.expire, idUser, 1, 0]);
                yield conn.end();
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    getAll(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const response = yield conn.query('SELECT * FROM bank_cards WHERE owner = ?', idUser);
                yield conn.end();
                return response[0];
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    minusBalance(idCard, value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const response = yield conn.query('UPDATE bank_cards SET balance = (balance - ?) WHERE id_card = ?', [value, idCard]);
                yield conn.end();
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
}
exports.default = new BankCardRepository;
