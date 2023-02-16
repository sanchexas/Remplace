"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../Controllers/user.controller"));
const userRouter = (0, express_1.Router)();
userRouter.get('/doeswork', user_controller_1.default.doesWork);
// userRouter.get('/getall', userController.getAllUsers);
userRouter.post('/create', user_controller_1.default.createUser);
userRouter.get('/getuserbyid', user_controller_1.default.getUserById);
userRouter.post('/signin');
exports.default = userRouter;
