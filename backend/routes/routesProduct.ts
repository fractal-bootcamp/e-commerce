import express from "express";
import {
  getProduct,
  getProductsFromCountry,
  createProduct,
  getAllProducts,
} from "../controllers/controllersProduct";
import { redisMiddleware } from "../redis/redisMiddleware";

const router = express.Router();

router.post("/getAllProducts", redisMiddleware(), getAllProducts);
router.post("/getProductsFromCountry", redisMiddleware(), getProductsFromCountry);
router.post("/getProduct", redisMiddleware(), getProduct);
router.post("/createProduct", createProduct);

export default router;
