import express from "express";
import { PORT } from "./globals";
import { config } from "./auth/config";
import { auth, requiresAuth } from "express-openid-connect";

export const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(auth(config));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/authcheck", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
