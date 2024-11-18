"use client";

import { useAuth } from "@/hooks/useAuth";
import React from "react";

const XLoginButton = () => {
  const { login } = useAuth();
  return (
    <button onClick={() => login()} className="text-black">
      Login
    </button>
  );
};

export default XLoginButton;
