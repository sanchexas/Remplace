import { Router } from "express";
import orgController from "../Controllers/org.controller";

const orgRouter = Router();

orgRouter.post('/create', orgController.create);
orgRouter.get('/getbyownerid', orgController.getByOwnerId);
orgRouter.get('/getbyid', orgController.getById);

export default orgRouter;