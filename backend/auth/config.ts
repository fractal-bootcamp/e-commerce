import { BASE_URL, CLIENT_ID, CLIENT_SECRET, ISSUER_BASE_URL } from "../globals";

export const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: BASE_URL,
  clientID: CLIENT_ID,
  issuerBaseURL: ISSUER_BASE_URL,
  secret: CLIENT_SECRET,
};
