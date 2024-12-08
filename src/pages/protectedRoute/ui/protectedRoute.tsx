import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}
