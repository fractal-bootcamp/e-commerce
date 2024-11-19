import axios from "axios";
import { auth } from "../firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const firebaseAuth = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const idToken = await result.user.getIdToken();

  const res = await axios({
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`,
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });

  const data = res.data;
  return data;
};
