import * as dotenv from "dotenv";

dotenv.config();

// Express
export const PORT = process.env.PORT;

// Auth
export const AUTH_API_IDENTIFIER = process.env.AUTH_API_IDENTIFIER;
export const AUTH_ISSUER_BASE_URL = process.env.AUTH_ISSUER_BASE_URL;
