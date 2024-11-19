import { useAuth } from "@/hooks/useAuth";
import React from "react";

const XLogoutButton = () => {
  const { handleLogout } = useAuth();
  return (
    <button onClick={handleLogout} className="text-black">
      Logout
    </button>
  );
};

export default XLogoutButton;
