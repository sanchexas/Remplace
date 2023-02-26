"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const org_service_1 = __importDefault(require("../Services/org.service"));
class OrgController {
    async create(req, res) {
        const newOrg = req.body;
        if (newOrg !== undefined) {
            try {
                const result = await org_service_1.default.create(newOrg);
                return res.json({
                    message: result.message,
                });
            }
            catch (e) {
                return res.json({ err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ` });
            }
        }
    }
}
exports.default = new OrgController;
