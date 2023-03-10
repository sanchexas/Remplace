import { Router } from "express";
import userController from "../Controllers/user.controller";
import multer from "multer";
import { storage } from "../storage";

const upload = multer({storage: storage});
const userRouter = Router();

userRouter.get('/doeswork', userController.doesWork);
// userRouter.get('/getall', userController.getAllUsers);
userRouter.post('/create', userController.createUser);
userRouter.get('/getuserbyid', userController.getUserById);
userRouter.post('/signin', userController.signIn);
userRouter.post('/update', upload.single('image'), userController.update);

export default userRouter;