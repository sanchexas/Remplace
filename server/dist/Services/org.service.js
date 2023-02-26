"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const org_repository_1 = __importDefault(require("../Repositories/org.repository"));
class OrgService {
    async create(newOrg) {
        console.log(newOrg);
        if (newOrg.name.length < 10 || newOrg.name.length > 100) {
            return { message: "Наименование не должно быть меньше 10 либо больше 100 символов" };
        }
        await org_repository_1.default.create(newOrg);
        return { message: "Успешно" };
    }
}
exports.default = new OrgService;
