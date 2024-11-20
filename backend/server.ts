import { PORT } from "./globals";
import express from "express";
import { verifyFirebaseToken } from "./firebase/middleware";
import routesAuth from "./routes/routesAuth";
import routesProduct from "./routes/routesProduct";
import routesOrder from "./routes/routesOrder";
import routesPayment from "./routes/routesPayment";

export const app = express();
const cors = require("cors");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const paymentIntent = await stripe.paymentIntents.create({
  amount: 1099,
  currency: 'usd',
  automatic_payment_methods: {
    enabled: true,
  },
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", verifyFirebaseToken, routesAuth);
app.use("/product", verifyFirebaseToken, routesProduct);
app.use("/order", verifyFirebaseToken, routesOrder);
app.use("/payment", verifyFirebaseToken, routesPayment);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
