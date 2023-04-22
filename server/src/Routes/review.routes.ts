import { Router } from "express";
import reviewController from "../Controllers/review.controller";

const reviewRouter  = Router();

reviewRouter.post('/create', reviewController.create);
reviewRouter.get('/getbyprodid', reviewController.getByProdId);
reviewRouter.get('/getratebyprodid', reviewController.getAveregeRateByProdId)

export default reviewRouter;