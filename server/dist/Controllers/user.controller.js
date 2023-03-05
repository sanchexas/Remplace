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
const user_service_1 = __importDefault(require("../Services/user.service"));
class UserController {
    doesWork(req, res) {
        return res.json('User Router and Controller are work').status(200);
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.query.idReq;
            if (id !== undefined) {
                try {
                    const user = yield user_service_1.default.getUserById(id);
                    return res.json({ message: user }).status(200);
                }
                catch (e) {
                    return res.json({ err: "Пользователь не найден.", click_here: `https://youtu.be/dQw4w9WgXcQ` });
                }
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = req.body;
            if (newUser !== undefined) {
                try {
                    const result = yield user_service_1.default.createUser(newUser);
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
    signIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const signedUserBody = req.body;
            if (signedUserBody !== undefined) {
                try {
                    const result = yield user_service_1.default.signIn(signedUserBody);
                    if (typeof result.message === "string") {
                        return res.json({ message: result.message });
                    }
                    res.cookie("id_user", result.message.id, { maxAge: 1 * 24 * 60 * 60 * 1000 });
                    res.cookie("role_id", result.message.role_id, { maxAge: 1 * 24 * 60 * 60 * 1000 });
                    return res.send();
                }
                catch (e) {
                    return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
                }
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUserBody = req.body;
            if (updatedUserBody !== undefined) {
                try {
                    const result = yield user_service_1.default.update(updatedUserBody);
                    if (typeof result.message === "string") {
                        return res.json({ message: result.message });
                    }
                    // return res.send();
                }
                catch (e) {
                    return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
                }
            }
        });
    }
}
exports.default = new UserController;
