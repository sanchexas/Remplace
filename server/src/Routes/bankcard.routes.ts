import { Router } from "express";
import bankCardController from "../Controllers/bankcard.controller";

const bankCardRouter  = Router();

// bankCardRouter.get('/getall', bankCardController.getAll);
bankCardRouter.post('/create', bankCardController.create);

export default bankCardRouter;