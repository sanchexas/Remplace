"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestController {
    getWelcome(req, res) {
        return res.json('WELCOME TO MY API !!! :D');
    }
}
exports.default = new TestController;
