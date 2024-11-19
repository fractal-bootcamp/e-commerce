import express from "express";
import { PORT } from "./globals";
import { verifyFirebaseToken } from "./firebase/middleware";

export const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/authenticate", verifyFirebaseToken, (req, res) => {
  const firebaseId = req.body.firebaseId;
  res.status(200).json({ firebaseId: firebaseId });
});

app.post("/user/login", verifyFirebaseToken, async (req, res) => {
  const { firebaseId, email } = req.body;
  res.status(200).json({ firebaseId: firebaseId, email: email });
});

app.post("/user/signup", verifyFirebaseToken, async (req, res) => {
  const { firebaseId, email } = req.body;
  res.status(200).json({ firebaseId: firebaseId, email: email });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
