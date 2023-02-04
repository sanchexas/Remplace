import { Router } from "express";
import { UserController } from "../Controllers/user.controller.js";
const userRouter = Router();
const uc = new UserController;
userRouter.get('/getall', uc.getAll);
export default userRouter;
