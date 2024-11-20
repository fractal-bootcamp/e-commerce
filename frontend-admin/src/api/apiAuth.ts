import { ALLOWED_ADMIN_EMAILS, auth } from "../firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axiosClient from "./axiosClient";

export const firebaseAuth = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const idToken = await result.user.getIdToken();

  if (!ALLOWED_ADMIN_EMAILS.includes(result.user.email!)) {
    await result.user.delete();
    throw new Error("Unauthorized email address");
  }

  const res = await axiosClient({
    method: "POST",
    url: "/auth/signup",
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });

  const data = res.data;
  return data;
};
