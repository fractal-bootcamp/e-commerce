import { useAuth } from "@/hooks/useAuth";
import React from "react";

const XLoginButton = () => {
  const { login } = useAuth();
  return <button onClick={() => login()}>Login</button>;
};

export default XLoginButton;
