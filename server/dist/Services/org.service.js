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
const org_repository_1 = __importDefault(require("../Repositories/org.repository"));
class OrgService {
    create(newOrg) {
        return __awaiter(this, void 0, void 0, function* () {
            if (newOrg.name.length < 10 || newOrg.name.length > 100) {
                return { message: "Наименование не должно быть меньше 10 либо больше 100 символов" };
            }
            yield org_repository_1.default.create(newOrg);
            return { message: "Успешно" };
        });
    }
    getByOwnerId(ownerId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (ownerId) {
                const result = yield org_repository_1.default.getByOwnerId(ownerId);
                return {
                    message: result[0]
                };
            }
            return { message: "Организация не найдена" };
        });
    }
}
exports.default = new OrgService;
