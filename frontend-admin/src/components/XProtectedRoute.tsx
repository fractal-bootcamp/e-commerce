import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface XProtectedRouteProps {
  children: React.ReactNode;
}

const XProtectedRoute = ({ children }: XProtectedRouteProps) => {
  const { firebaseUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !firebaseUser) {
      router.push("/login");
    }
  }, [firebaseUser, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return firebaseUser ? <>{children}</> : null;
};

export default XProtectedRoute;
