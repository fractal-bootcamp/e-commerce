import express from "express";
import { getProduct, getProductsFromCountry } from "../controllers/controllersProduct";

const router = express.Router();

router.post("/getProductsFromCountry", getProductsFromCountry);
router.post("/getProduct", getProduct);

export default router;
