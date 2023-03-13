import { Router } from "express";
import categoryController from "../Controllers/category.controller";

const categoryRouter  = Router();

categoryRouter.get('/getall', categoryController.getAll);

export default categoryRouter;