import express from "express";
import { getOrder, getAllOrders, addOrder, updateOrder } from "../controllers/controllersOrder";

const router = express.Router();

router.post("/getAllOrders", getAllOrders);
router.post("/getOrder", getOrder);
router.post("/addOrder", addOrder);
router.post("/updateOrder", updateOrder);

export default router;
