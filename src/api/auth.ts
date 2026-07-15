import type { Usuario } from "../types/usuario";
import { apiFetch } from "./api";

export async function csrf() {
  await apiFetch("/sanctum/csrf-cookie");
}

export async function login(email: string, password: string): Promise<Usuario> {
  await csrf();

  const response = await apiFetch("/api/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) throw new Error("Credenciales incorrectas");

  const data = await response.json();

  return data.usuario;
}

export async function register(data: {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  password_confirmation: string;
}): Promise<Usuario> {
  await csrf();

  const response = await apiFetch("/api/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("No se pudo registrar");

  const result = await response.json();

  return result.usuario;
}

export async function me(): Promise<Usuario | null> {
  const response = await apiFetch("/api/me");

  if (!response.ok) return null;

  return response.json();
}

export async function logout() {
  await apiFetch("/api/logout", {
    method: "POST",
  });
}
