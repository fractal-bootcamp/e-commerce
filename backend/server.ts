import { PORT } from "./globals";
import { jwtCheck } from "./middleware/middleware";
import express from "express";

const app = express();
const cors = require("cors");

const port = PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/public", (req, res) => {
  res.status(200).json({
    message: "Public endpoint",
  });
});

app.get("/authenticated", jwtCheck, (req, res) => {
  res.status(200).json({
    message: "Authenticated endpoint",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
