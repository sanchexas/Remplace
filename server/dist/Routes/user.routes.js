"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../Controllers/user.controller"));
const multer_1 = __importDefault(require("multer"));
const storage_1 = require("../storage");
const upload = (0, multer_1.default)({ storage: storage_1.storage });
const userRouter = (0, express_1.Router)();
userRouter.get('/doeswork', user_controller_1.default.doesWork);
// userRouter.get('/getall', userController.getAllUsers);
userRouter.post('/create', user_controller_1.default.createUser);
userRouter.get('/getuserbyid', user_controller_1.default.getUserById);
userRouter.post('/signin', user_controller_1.default.signIn);
userRouter.post('/update', upload.single('image'), user_controller_1.default.update);
exports.default = userRouter;
