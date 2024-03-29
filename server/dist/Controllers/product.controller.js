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
const product_service_1 = __importDefault(require("../Services/product.service"));
const org_service_1 = __importDefault(require("../Services/org.service"));
class ProductController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = req.body;
            if (newProduct !== undefined) {
                try {
                    const result = yield product_service_1.default.create(newProduct);
                    return res.json({
                        message: result.message,
                    });
                }
                catch (e) {
                    return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
                }
            }
        });
    }
    createWithFormData(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = req.body;
            const productImage = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
            const currentUserId = req.cookies.id_user;
            if (newProduct !== undefined && productImage !== undefined) {
                try {
                    const orgResult = yield org_service_1.default.getByOwnerId(currentUserId);
                    if (typeof orgResult.message !== 'string' && orgResult.message.id_organisation !== undefined) {
                        const result = yield product_service_1.default.createWithFormData(newProduct, productImage, orgResult.message.id_organisation);
                        return res.json({
                            message: result.message,
                        });
                    }
                }
                catch (e) {
                    return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
                }
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield product_service_1.default.getAll();
                return res.json({
                    message: result.message,
                });
            }
            catch (e) {
                return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
            }
        });
    }
    getTopSix(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield product_service_1.default.getTopSix();
                return res.json({
                    message: result.message,
                });
            }
            catch (e) {
                return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
            }
        });
    }
    getByOrgId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.query.idOrg) {
                    const reqIdOrg = req.query.idOrg;
                    const result = yield product_service_1.default.getByOrgId(reqIdOrg);
                    return res.json({
                        message: result.message,
                    });
                }
            }
            catch (e) {
                return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
            }
        });
    }
    deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.body.idProduct) {
                    const idProduct = req.body.idProduct;
                    const result = yield product_service_1.default.deleteById(idProduct);
                    return res.json({
                        message: result.message,
                    });
                }
            }
            catch (e) {
                return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.query.idProduct) {
                    const idProduct = req.query.idProduct;
                    const result = yield product_service_1.default.getById(idProduct);
                    return res.json({
                        message: result.message,
                    });
                }
            }
            catch (e) {
                return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
            }
        });
    }
    update(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const product = req.body;
            const productImage = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
            console.log(productImage);
            if (product !== undefined && productImage !== undefined) {
                try {
                    const result = yield product_service_1.default.update(product, productImage);
                    return res.json({
                        message: result.message,
                    });
                }
                catch (e) {
                    return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
                }
            }
        });
    }
    getByCategoryId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryId = req.query.id;
            if (categoryId) {
                try {
                    const result = yield product_service_1.default.getByCategoryId(categoryId);
                    return res.json({
                        message: result.message,
                    });
                }
                catch (e) {
                    return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
                }
            }
        });
    }
}
exports.default = new ProductController;
