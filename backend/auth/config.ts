import { baseUrl, clientId, clientSecret, issuerBaseUrl } from "../globals";

export const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: baseUrl,
  clientID: clientId,
  issuerBaseURL: issuerBaseUrl,
  secret: clientSecret,
};
