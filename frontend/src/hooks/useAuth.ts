import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setFirebaseUser(currentUser);
      const getIdToken = async () => {
        const token = await auth.currentUser?.getIdToken(true);
        if (token) {
          setIdToken(token);
        }
      };
      getIdToken();
    });

    return () => unsubscribe();
  }, []);

  return { firebaseUser, idToken };
};
