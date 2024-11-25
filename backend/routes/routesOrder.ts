import express from "express";
import {
  getOrder,
  getAllOrders,
  addOrder,
  updateOrder,
  deleteOrder,
  updateOrderProducts,
} from "../controllers/controllersOrder";
import { redisMiddleware } from "../redis/redisMiddleware";

const router = express.Router();

router.post("/getAllOrders", redisMiddleware(), getAllOrders);
router.post("/getOrder", redisMiddleware(), getOrder);
router.post("/addOrder", addOrder);
router.post("/updateOrder", updateOrder);
router.post("/deleteOrder", deleteOrder);
router.post("/updateOrderProducts", updateOrderProducts);

export default router;
