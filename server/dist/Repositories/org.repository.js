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
class OrgRepository {
    create(newOrg) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                yield conn.query('INSERT INTO organisations (name, address, owner_id, description, website_link, ogrn, inn, kpp) VALUES (?,?,?,?,?,?,?,?)', [newOrg.name, newOrg.address, newOrg.ownerId, newOrg.description, newOrg.link, newOrg.ogrn, newOrg.inn, newOrg.kpp]);
                yield conn.query('UPDATE users SET role_id = ? WHERE id_user = ?;', [3, newOrg.ownerId]);
                yield conn.end();
            }
            catch (e) {
                throw new Error("ОшибОчка");
            }
        });
    }
    getByOwnerId(ownerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, db_1.connection)();
                const result = yield conn.query('SELECT * FROM organisations WHERE owner_id = ?', ownerId);
                conn.end();
                return result[0];
            }
            catch (e) {
                throw new Error("Ошибка");
            }
        });
    }
}
exports.default = new OrgRepository;
