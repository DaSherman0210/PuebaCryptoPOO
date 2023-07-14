import Router  from "express";
import {getMonedas,getMoneda,postMonedas,deleteMonedas,updateMonedas} from "../controllers/moneda.controllers.js"

const router = Router();

router.get("/all",getMonedas);
router.get("/all/:id",getMoneda);
router.post("/add",postMonedas);
router.delete("/delete/:id",deleteMonedas);
router.patch("/update/:id",updateMonedas);

export default router;