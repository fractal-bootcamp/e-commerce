import type { RequestHandler } from "express";
import { AUTH_API_IDENTIFIER, AUTH_ISSUER_BASE_URL } from "../globals";

const { auth } = require("express-oauth2-jwt-bearer");

const jwtAuthMiddleware = auth({
  audience: AUTH_API_IDENTIFIER,
  issuerBaseURL: `https://${AUTH_ISSUER_BASE_URL}`,
  tokenSigningAlg: "RS256",
});

export const authenticateJWT: RequestHandler = async (req, res, next) => {
  await jwtAuthMiddleware(req, res, next);
  req.body = {
    ...req.body,
    user: req.auth,
  };
  next();
};
