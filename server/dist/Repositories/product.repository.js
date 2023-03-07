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
class ProductRepository {
    create(newProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const response = yield conn.query('INSERT INTO products (title, description, origin_price, category_id, organisation_id, pickup_address, quantity) VALUES (?,?,?,?,?,?,?)', [newProduct.title, newProduct.description, newProduct.originPrice, newProduct.categoryId, newProduct.organisationId, newProduct.pickUpAddress, newProduct.quantity]);
                yield conn.end();
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    createWithFormData(newProduct, productImage, idOrg) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const response = yield conn.query('INSERT INTO products (title, description, price, category_id, organisation_id, pickup_address, quantity, image) VALUES (?,?,?,?,?,?,?,?)', [newProduct.title, newProduct.description, newProduct.price, newProduct.category_id, idOrg, newProduct.pickup_address, newProduct.quantity, productImage]);
                yield conn.end();
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const response = yield conn.query('SELECT * FROM products');
                yield conn.end();
                return response[0];
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
}
exports.default = new ProductRepository;
