"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class CategoryRepository {
    async getAll() {
        try {
            const conn = await (0, db_1.connection)();
            const result = await conn.query('SELECT * FROM categories');
            console.log(result[0]);
            await conn.end();
            return result[0];
        }
        catch (e) {
            throw new Error("ОшибОчка");
        }
    }
}
exports.default = new CategoryRepository;
