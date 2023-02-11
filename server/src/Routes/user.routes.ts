import { Router } from "express";
import userController from "../Controllers/user.controller";
// import UserController from "../Controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/doeswork', userController.doesWork);
userRouter.get('/getall', userController.getAllUsers);
// userRouter.get('/getUserById', UserController.getUserById);

export default userRouter;