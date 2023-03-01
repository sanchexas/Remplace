"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../Controllers/category.controller"));
const categoryRouter = (0, express_1.Router)();
categoryRouter.get('/getall', category_controller_1.default.getAll);
exports.default = categoryRouter;
