import { Router } from "express";
import { getTipoMonedas , getTipoMoneda , insertTipoMoneda , deleteTipoMoneda , updateTipoMoneda} from "../controllers/tipoMoneda.controllers.js";

const router = Router();

router.get("/all",getTipoMonedas);
router.get("/all/:id",getTipoMoneda);
router.post("/add", insertTipoMoneda);
router.delete("/delete/:id",deleteTipoMoneda);
router.patch("/update/:id",updateTipoMoneda);

export default router;
