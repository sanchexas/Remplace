import { Router } from "express";
import reviewController from "../Controllers/review.controller";

const reviewRouter  = Router();

reviewRouter.post('/create', reviewController.create);

export default reviewRouter;