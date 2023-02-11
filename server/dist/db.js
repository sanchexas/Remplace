"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql2_1 = require("mysql2");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
async function connection() {
    const dbConnection = await (0, mysql2_1.createPool)({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: '',
        database: process.env.DB_NAME,
    });
    return dbConnection;
}
exports.connection = connection;
