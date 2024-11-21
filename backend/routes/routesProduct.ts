import express from "express";
import {
  getProduct,
  getProductsFromCountry,
  createProduct,
  getAllProducts,
} from "../controllers/controllersProduct";

const router = express.Router();

router.post("/getAllProducts", getAllProducts);
router.post("/getProductsFromCountry", getProductsFromCountry);
router.post("/getProduct", getProduct);
router.post("/createProduct", createProduct);

export default router;
