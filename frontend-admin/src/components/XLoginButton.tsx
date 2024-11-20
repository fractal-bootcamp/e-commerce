import { firebaseAuth } from "@/api/apiAuth";
import React from "react";

const XLoginButton = () => {
  return (
    <button onClick={firebaseAuth} className="text-black">
      Login
    </button>
  );
};

export default XLoginButton;
