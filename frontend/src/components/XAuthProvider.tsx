import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

interface XAuthProviderProps {
  children: JSX.Element;
}

const XAuthProvider = ({ children }: XAuthProviderProps) => {
  return (
    <Auth0Provider
      domain=""
      clientId=""
      authorizationParams={{
        redirect_uri: "",
        audience: "",
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default XAuthProvider;
