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
    <button onClick={handleLogin} className="text-black">
      Login
    </button>
  );
};

export default XLoginButton;
