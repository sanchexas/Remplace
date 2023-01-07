"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3005;
const app = (0, express_1.default)();
app.listen(PORT, () => {
    console.log(`Server works on PORT ${PORT}`);
});
app.get('/', (req, res) => {
    res.status(200).json("Server works");
});
