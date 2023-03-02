"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const org_controller_1 = __importDefault(require("../Controllers/org.controller"));
const orgRouter = (0, express_1.Router)();
orgRouter.post('/create', org_controller_1.default.create);
orgRouter.get('/getbyownerid', org_controller_1.default.getByOwnerId);
exports.default = orgRouter;
