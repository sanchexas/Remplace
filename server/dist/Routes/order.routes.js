"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = __importDefault(require("../Controllers/order.controller"));
const orderRouter = (0, express_1.Router)();
orderRouter.post('/create', order_controller_1.default.create);
orderRouter.get('/getByUserId', order_controller_1.default.getProductsByUserId);
exports.default = orderRouter;
