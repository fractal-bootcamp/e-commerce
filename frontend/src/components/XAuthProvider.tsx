import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { AUTH_DOMAIN, AUTH_CLIENT_ID } from "@/utils/globals";

interface XAuthProviderProps {
  children: JSX.Element;
}

const XAuthProvider = ({ children }: XAuthProviderProps) => {
  if (AUTH_DOMAIN && AUTH_CLIENT_ID) {
    return (
      <Auth0Provider
        domain={AUTH_DOMAIN}
        clientId={AUTH_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
          // audience: "",
        }}
      >
        {children}
      </Auth0Provider>
    );
  }
};

export default XAuthProvider;
