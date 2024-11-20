import express from "express";
import { ragQuery } from "../controllers/controllersRag";

const router = express.Router();

router.post("/ragQuery", ragQuery);

export default router;
