import Router from "express";
import { getTraders , getTrader , postTrader , deleteTrader, updateTrader } from "../controllers/trader.controllers.js";

const router = Router();

router.get("/all",getTraders);
router.get("/all/:id",getTrader);
router.post("/add",postTrader);
router.delete("/delete/:id",deleteTrader);
router.patch("/update/:id",updateTrader);

export default router;