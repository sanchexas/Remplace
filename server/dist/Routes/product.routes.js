"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../Controllers/product.controller"));
const multer_1 = __importDefault(require("multer"));
const storage_1 = require("../storage");
const upload = (0, multer_1.default)({ storage: storage_1.storage });
const productRouter = (0, express_1.Router)();
productRouter.post('/create', product_controller_1.default.create);
productRouter.post('/createwithformdata', upload.single('image'), product_controller_1.default.createWithFormData);
exports.default = productRouter;
