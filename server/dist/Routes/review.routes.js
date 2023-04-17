"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const review_controller_1 = __importDefault(require("../Controllers/review.controller"));
const reviewRouter = (0, express_1.Router)();
reviewRouter.post('/create', review_controller_1.default.create);
reviewRouter.get('/getbyprodid', review_controller_1.default.getByProdId);
exports.default = reviewRouter;
