"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bankcard_controller_1 = __importDefault(require("../Controllers/bankcard.controller"));
const bankCardRouter = (0, express_1.Router)();
bankCardRouter.get('/getall', bankcard_controller_1.default.getAll);
bankCardRouter.post('/create', bankcard_controller_1.default.create);
exports.default = bankCardRouter;
