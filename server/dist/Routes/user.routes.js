import { Router } from "express";
import UserController from "../Controllers/user.controller.js";
const userRouter = Router();
userRouter.get('/getall', UserController.getAll);
userRouter.get('/getUserById', UserController.getUserById);
export default userRouter;
