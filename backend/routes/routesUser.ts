import express from "express";
import { getAllUsers } from "../controllers/controllersUser";
import { redisMiddleware } from "../redis/redisMiddleware";

const router = express.Router();

router.post("/getAllUsers", redisMiddleware(), getAllUsers);

export default router;
