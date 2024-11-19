import express from "express";
import { getOrders } from "../controllers/controllersOrder";

const router = express.Router();

router.post("/getOrders", getOrders);

export default router;
