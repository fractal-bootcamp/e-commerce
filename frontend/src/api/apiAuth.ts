import axios from "axios";
import { auth } from "../firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const firebaseAuth = async (authOperation: "login" | "signup") => {
  let idToken: string | undefined;

  if (authOperation === "login") {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();

    const res = await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/login`,
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    const data = res.data;
    return data;
  } else {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    idToken = await result.user.getIdToken();

    const res = await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/signup`,
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    const data = res.data;
    return data;
  }
};
