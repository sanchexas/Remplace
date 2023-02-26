"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class OrgRepository {
    async create(newOrg) {
        try {
            const conn = await (0, db_1.connection)();
            await conn.query('INSERT INTO organisations (name, address, owner_id, description, website_link, ogrn, inn, kpp) VALUES (?,?,?,?,?,?,?,?)', [newOrg.name, newOrg.address, newOrg.ownerId, newOrg.description, newOrg.link, newOrg.ogrn, newOrg.inn, newOrg.kpp]);
            await conn.query('UPDATE users SET role_id = ? WHERE id_user = ?;', [3, newOrg.ownerId]);
            await conn.end();
        }
        catch (e) {
            throw new Error("ОшибОчка");
        }
    }
}
exports.default = new OrgRepository;
