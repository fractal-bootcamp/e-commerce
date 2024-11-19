import { auth } from "../firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { axiosClient } from "./axiosClient";

export const firebaseAuth = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const idToken = await result.user.getIdToken();

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
