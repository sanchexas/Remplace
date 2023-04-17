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
    getTopSix() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const response = yield conn.query('SELECT * FROM products ORDER BY id_product DESC LIMIT 6');
                yield conn.end();
                return response[0];
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    getByOrgId(idOrg) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const response = yield conn.query('SELECT * FROM products WHERE organisation_id = ? ORDER BY id_product DESC', idOrg);
                yield conn.end();
                return response[0];
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    deleteById(idProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const response = yield conn.query('DELETE FROM products WHERE id_product = ?', idProduct);
                yield conn.end();
                return response[0];
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    getById(idProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const response = yield conn.query('SELECT * FROM products WHERE id_product = ?', idProduct);
                yield conn.end();
                return response[0];
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    update(product, productImage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const response = yield conn.query('UPDATE products SET title = ? , description = ?, price = ?, image = ?, category_id = ?, pickup_address = ?, quantity = ? WHERE id_product = ?', [product.title, product.description, product.price, productImage, product.category_id, product.pickup_address, product.quantity, product.id_product]);
                yield conn.end();
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    getByCategoryId(idCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const response = yield conn.query('SELECT * FROM products LEFT JOIN categories ON products.category_id = categories.id_category WHERE category_id = ? ;', idCategory);
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
