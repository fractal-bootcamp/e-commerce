import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

const useProtectedRoute = () => {
  const { firebaseUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!firebaseUser) {
      router.push("/login");
    }
  }, [firebaseUser, router]);
};

export default useProtectedRoute;
