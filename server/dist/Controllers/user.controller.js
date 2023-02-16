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
    // async getAllUsers(req: Request, res: Response): Promise<Response>{
    //     const conn = await connection();
    //     const users = await conn.query('SELECT * FROM users');
    //     await conn.end();
    //     return res.json(users[0]); 
    // }
    async getUserById(req, res, next) {
        const id = req.query.idReq;
        if (id !== undefined) {
            try {
                const user = await user_service_1.default.getUserById(id);
                return res.jsonp({ message: user }).status(200);
            }
            catch (e) {
                return res.json({ err: "Пользователь не найден.", click_here: `https://youtu.be/dQw4w9WgXcQ` });
            }
        }
    }
    async createUser(req, res) {
        const newUser = req.body;
        if (req.body !== undefined) {
            try {
                const result = await user_service_1.default.createUser(newUser);
                console.log(result);
                return res.jsonp({
                    message: result.message,
                });
            }
            catch (e) {
                return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
            }
        }
    }
}
exports.default = new UserController;
