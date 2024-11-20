import express from "express";
import { handleCreatePaymentIntent} from "../controllers/stripe/controllersPaymentIntent";

const router = express.Router();

router.post("/createPaymentIntent", handleCreatePaymentIntent);

export default router;
