import express from "express";
import { redisTest } from "../controllers/controllersRedis";

const router = express.Router();

router.post("/redisTest", redisTest);

export default router;
