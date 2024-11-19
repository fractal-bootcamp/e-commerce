import express from "express";
import { firebaseSignup } from "../controllers/controllersAuth";

const router = express.Router();

router.post("/signup", firebaseSignup);

export default router;
