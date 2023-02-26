import { Router } from "express";
import orgController from "../Controllers/org.controller";

const orgRouter = Router();

orgRouter.post('/create', orgController.create);

export default orgRouter;