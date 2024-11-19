import express from "express";
import {
  getOrder,
  getAllOrders,
  addOrder,
  updateOrder,
  deleteOrder,
  updateOrderProducts,
} from "../controllers/controllersOrder";

const router = express.Router();

router.post("/getAllOrders", getAllOrders);
router.post("/getOrder", getOrder);
router.post("/addOrder", addOrder);
router.post("/updateOrder", updateOrder);
router.post("/deleteOrder", deleteOrder);
router.post("/updateOrderProducts", updateOrderProducts);

export default router;
