import { AUTH_API_IDENTIFIER, AUTH_ISSUER_BASE_URL } from "../globals";

const { auth } = require("express-oauth2-jwt-bearer");

// Middleware
export const jwtCheck = auth({
  audience: AUTH_API_IDENTIFIER,
  issuerBaseURL: `https://${AUTH_ISSUER_BASE_URL}`,
  tokenSigningAlg: "RS256",
});
