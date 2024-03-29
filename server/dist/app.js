"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_routes_1 = __importDefault(require("./Routes/user.routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const org_routes_1 = __importDefault(require("./Routes/org.routes"));
const category_routes_1 = __importDefault(require("./Routes/category.routes"));
const product_routes_1 = __importDefault(require("./Routes/product.routes"));
const review_routes_1 = __importDefault(require("./Routes/review.routes"));
const bankcard_routes_1 = __importDefault(require("./Routes/bankcard.routes"));
const order_routes_1 = __importDefault(require("./Routes/order.routes"));
class App {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.settings();
        this.usages();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3005);
    }
    usages() {
        this.app.use((0, cors_1.default)({
            origin: process.env.CLIENT_URL,
            methods: ["GET", "POST"],
            credentials: true
        }));
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
    }
    routes() {
        this.app.use('/users', user_routes_1.default);
        this.app.use('/orgs', org_routes_1.default);
        this.app.use('/categories', category_routes_1.default);
        this.app.use('/products', product_routes_1.default);
        this.app.use('/reviews', review_routes_1.default);
        this.app.use('/src/images', express_1.default.static('src/images'));
        this.app.use('/bankcards', bankcard_routes_1.default);
        this.app.use('/orders', order_routes_1.default);
    }
    listen() {
        this.app.listen(this.app.get('port'));
        console.log(`Server works on PORT ${this.app.get('port')}`);
    }
}
exports.App = App;
