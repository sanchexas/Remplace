"use strict";
// import { config } from 'dotenv';
// config();
// import express from 'express';
// import userRouter from './Routes/user.routes.js'
// import cors from 'cors';
// const PORT = process.env.PORT;
// const app = express();
Object.defineProperty(exports, "__esModule", { value: true });
// app.use(express.json());
// app.listen(PORT, ()=>{
//     console.log(`Server works on PORT ${PORT}`);
// });
// app.use(cors({
//     origin: process.env.CLIENT_URL,
//     methods: ["GET", "POST"],
//     credentials: true
// }));
// app.use('/users', userRouter);
// app.get('/', (req, res)=>{
//     res.status(200).json("Server works");
// });
const app_1 = require("./app");
function main() {
    const app = new app_1.App(process.env.PORT);
    app.listen();
}
main();
