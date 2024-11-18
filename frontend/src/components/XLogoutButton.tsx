import { useAuth } from "@/hooks/useAuth";
import React from "react";

const XLogoutButton = () => {
  const { logout } = useAuth();
  return <button onClick={logout}>Log Out</button>;
};

export default XLogoutButton;
