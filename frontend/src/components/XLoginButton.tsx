import { firebaseAuth } from "@/api/apiAuth";
import { useRouter } from "next/navigation";
import React from "react";

const XLoginButton = () => {
  const router = useRouter();
  const handleLogin = async () => {
    await firebaseAuth();
    router.push("/");
  };
  return (
    <button onClick={handleLogin} className="text-amber-800 hover:text-amber-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
      Login
    </button>
  );
};

export default XLoginButton;
