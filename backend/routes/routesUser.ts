import express from "express";
import { getAllUsers } from "../controllers/controllersUser";

const router = express.Router();

router.post("/getAllUsers", getAllUsers);

export default router;
