import { Router } from "express";
import orgController from "../Controllers/org.controller";
import categoryController from "../Controllers/category.controller";

const categoryRouter  = Router();

categoryRouter.get('/getall', categoryController.getAll);

export default categoryRouter;