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
const product_repository_1 = __importDefault(require("../Repositories/product.repository"));
class ProductService {
    create(newProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            yield product_repository_1.default.create(newProduct);
            return { message: "Успешно" };
        });
    }
    createWithFormData(newProduct, productImage, idOrg) {
        return __awaiter(this, void 0, void 0, function* () {
            yield product_repository_1.default.createWithFormData(newProduct, productImage, idOrg);
            return { message: "Успешно" }; // СДЕЛАТЬ ПРОВЕРКУ !!!
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield product_repository_1.default.getAll();
            if (result) {
                return { message: result };
            }
            return { message: "Не удалось загрузить товары." };
        });
    }
    getTopSix() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield product_repository_1.default.getTopSix();
            if (result) {
                return { message: result };
            }
            return { message: "Не удалось загрузить 6 товаров." };
        });
    }
    getByOrgId(idOrg) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield product_repository_1.default.getByOrgId(idOrg);
            if (result) {
                return { message: result };
            }
            return { message: "Не удалось найти продукты по указанному id организации." };
        });
    }
    deleteById(idProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield product_repository_1.default.deleteById(idProduct);
            if (result) {
                return { message: result };
            }
            return { message: "Не удалось удалить продукт." };
        });
    }
    getById(idProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield product_repository_1.default.getById(idProduct);
            if (result) {
                return { message: result };
            }
            return { message: "Не удалось найти продукт по id." };
        });
    }
    update(product, productImage) {
        return __awaiter(this, void 0, void 0, function* () {
            yield product_repository_1.default.update(product, productImage);
            return { message: "Успешно" }; // сделать проверку
        });
    }
    getByCategoryId(idCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield product_repository_1.default.getByCategoryId(idCategory);
            if (result) {
                return { message: result };
            }
            return { message: "Не удалось найти продукт по id категории." };
        });
    }
}
exports.default = new ProductService;
