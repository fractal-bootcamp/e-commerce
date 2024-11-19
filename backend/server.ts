import { PORT } from "./globals";
import { authenticateJWT } from "./middleware/middleware";
import express from "express";
import type { Request } from "express";

export const app = express();
const cors = require("cors");

const port = PORT;

app.use(cors());
app.use(express.json());

// Extend the Request interface
declare global {
  namespace Express {
    interface Request {
      auth?: any;
    }
  }
}

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/public", (req, res) => {
  res.status(200).json({
    message: "Public endpoint",
  });
});

app.get("/authenticated", authenticateJWT, async (req: Request, res) => {
  res.status(200).json({
    message: "Authenticated endpoint",
    body: req.auth,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
