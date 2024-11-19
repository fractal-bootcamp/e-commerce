import {
  AUTH_API_IDENTIFIER,
  AUTH_CLIENT_ID,
  AUTH_CLIENT_SECRET,
  AUTH_ISSUER_BASE_URL,
} from "../globals";

export const getToken = async () => {
  const response = await fetch(`https://${AUTH_ISSUER_BASE_URL}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: AUTH_CLIENT_ID,
      client_secret: AUTH_CLIENT_SECRET,
      audience: AUTH_API_IDENTIFIER,
      grant_type: "client_credentials",
    }),
  });
  const data = await response.json();
  return data;
};
