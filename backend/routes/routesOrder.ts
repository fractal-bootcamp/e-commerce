import express from "express";
import { getOrder, getAllOrders } from "../controllers/controllersOrder";

const router = express.Router();

router.post("/getAllOrders", getAllOrders);
router.post("/getOrder", getOrder);

export default router;
