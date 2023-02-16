import { Router } from "express";
import userController from "../Controllers/user.controller";

const userRouter = Router();

userRouter.get('/doeswork', userController.doesWork);
// userRouter.get('/getall', userController.getAllUsers);
userRouter.post('/create', userController.createUser);
userRouter.get('/getuserbyid', userController.getUserById);
userRouter.post('/signin');

export default userRouter;