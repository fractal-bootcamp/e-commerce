import { useAuth } from "@/hooks/useAuth";
import React from "react";

const XLogoutButton = () => {
  const { handleLogout } = useAuth();
  return (
    <button onClick={handleLogout} className="text-amber-800 hover:text-amber-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
      Logout
    </button>
  );
};

export default XLogoutButton;
