import {Router} from "express";
import { getAcciones , getAccion , postAcciones , deleteAcciones , updateAcciones } from "../controllers/acciones.controllers.js";

const router = Router();

router.get("/all", getAcciones);
router.get("/all/:id", getAccion);
router.post("/add", postAcciones);
router.delete("/delete/:id", deleteAcciones);
router.patch("/update/:id", updateAcciones);

export default router;