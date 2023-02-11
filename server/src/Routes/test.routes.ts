import { Router } from "express";
import testController from "../Controllers/test.controller";
const testRouter = Router();

testRouter.get('/', testController.getWelcome);

export default testRouter;