import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const { usuario, loading } = useAuth() as { usuario: unknown; loading: boolean };

  if (loading) return <p>Cargando...</p>;

  if (!usuario) return <Navigate to="/login" replace />;

  return children;
}
