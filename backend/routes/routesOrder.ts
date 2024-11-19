import express from "express";
import { getOrder, getAllOrders, addOrder } from "../controllers/controllersOrder";

const router = express.Router();

router.post("/getAllOrders", getAllOrders);
router.post("/getOrder", getOrder);
router.post("/addOrder", addOrder);

export default router;
