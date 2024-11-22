"use client";

import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setFirebaseUser(currentUser);
      const getIdToken = async () => {
        try {
          const token = await auth.currentUser?.getIdToken(true);
          if (token) {
            setIdToken(token);
          }
        } catch (error) {
          console.error("Error fetching ID token:", error);
        } finally {
          setLoading(false);
        }
      };
      getIdToken();
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    setFirebaseUser(null);
    setIdToken(null);
    await signOut(auth);
    router.push("/");
  };

  return { firebaseUser, loading, idToken, handleLogout };
};
