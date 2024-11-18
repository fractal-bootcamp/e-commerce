"use client";

import React, { PropsWithChildren } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { AUTH_DOMAIN, AUTH_CLIENT_ID, AUTH_REDIRECT_URI } from "@/utils/globals";

const XAuthProvider = ({ children }: PropsWithChildren) => {
  if (AUTH_DOMAIN && AUTH_CLIENT_ID) {
    return (
      <Auth0Provider
        domain={AUTH_DOMAIN}
        clientId={AUTH_CLIENT_ID}
        authorizationParams={{
          redirect_uri: AUTH_REDIRECT_URI,
          // audience: "",
        }}
      >
        {children}
      </Auth0Provider>
    );
  }
  return null;
};

export default XAuthProvider;
