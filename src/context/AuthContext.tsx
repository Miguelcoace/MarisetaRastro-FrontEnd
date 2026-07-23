import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

import * as auth from "../api/auth";
import type { Usuario } from "../types/usuario";

interface AuthContextType {
  usuario: Usuario | null;

  login(email: string, password: string): Promise<void>;

  register(data: {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    password_confirmation: string;
  }): Promise<void>;

  logout(): Promise<void>;

  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.me().then((user) => {
      setUsuario(user);

      setLoading(false);
    });
  }, []);

  async function login(email: string, password: string) {
    const user = await auth.login(email, password);

    setUsuario(user);
  }

  async function register(data: {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) {
    const user = await auth.register(data);

    setUsuario(user);
  }

  async function logout() {
    await auth.logout();

    setUsuario(null);
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
