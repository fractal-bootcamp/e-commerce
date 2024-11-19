import { PORT } from "./globals";
import express from "express";
import { verifyFirebaseToken } from "./firebase/middleware";
import routesAuth from "./routes/routesAuth";
import routesProduct from "./routes/routesProduct";
import routesOrder from "./routes/routesOrder";


export const app = express();
const cors = require("cors");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", verifyFirebaseToken, routesAuth);
app.use("/product", verifyFirebaseToken, routesProduct);
app.use("/order", verifyFirebaseToken, routesOrder);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
