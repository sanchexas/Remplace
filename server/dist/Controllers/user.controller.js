"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../Services/user.service"));
class UserController {
    doesWork(req, res) {
        return res.json('User Router and Controller are work').status(200);
    }
    async getUserById(req, res) {
        const id = req.query.idReq;
        if (id !== undefined) {
            try {
                const user = await user_service_1.default.getUserById(id);
                return res.json({ message: user }).status(200);
            }
            catch (e) {
                return res.json({ err: "Пользователь не найден.", click_here: `https://youtu.be/dQw4w9WgXcQ` });
            }
        }
    }
    async createUser(req, res) {
        const newUser = req.body;
        if (newUser !== undefined) {
            try {
                const result = await user_service_1.default.createUser(newUser);
                return res.json({
                    message: result.message,
                });
            }
            catch (e) {
                return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
            }
        }
    }
    async signIn(req, res) {
        const signedUserBody = req.body;
        if (signedUserBody !== undefined) {
            try {
                const result = await user_service_1.default.signIn(signedUserBody);
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
    }
}
exports.default = new UserController;
