import express from "express";
import { PORT } from "./globals";
import { verifyFirebaseToken } from "./firebase/middleware";
import routesAuth from "./routes/routesAuth";
import routesProduct from "./routes/routesProduct";

export const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", verifyFirebaseToken, routesAuth);
app.use("/product", verifyFirebaseToken, routesProduct);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
