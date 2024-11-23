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
    <button 
      onClick={handleLogin} 
      className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors"
    >
      Login
    </button>
  );
};

export default XLoginButton;
