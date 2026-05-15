import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export default function PrivateRoute({
  children,
}: PrivateRouteProps) {
  const { user, loading } = useContext(UserContext)!;

  // Wait for Supabase session check before deciding to redirect.
  if (loading) return null;

  if (!user) return <Navigate to="/login" replace />;

  return children;
}
