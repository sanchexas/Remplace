"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class ProductRepository {
    async create(newProduct) {
        try {
            const conn = await (0, db_1.connection)();
            const response = await conn.query('INSERT INTO products (title, description, origin_price, category_id, organisation_id, pickup_address, quantity) VALUES (?,?,?,?,?,?,?)', [newProduct.title, newProduct.description, newProduct.originPrice, newProduct.categoryId, newProduct.organisationId, newProduct.pickUpAddress, newProduct.quantity]);
            await conn.end();
        }
        catch (e) {
            throw new Error("ОшибОчка");
        }
    }
}
exports.default = new ProductRepository;
