import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import "../styles/base/_animations.scss";
import "../styles/base/_typography.scss";
import "../styles/components/_buttons.scss";
import "../styles/layout/_forms.scss";
import "../styles/layout/_header.scss";
import "../styles/pages/_signUp.scss";
import "../styles/themes/_default.scss";

function SignUp() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [mostrarPassword, setMostrarPassword] = useState(false);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [error, setError] = useState("");

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 4000 });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    if (!aceptaTerminos) {
      setError("Debes aceptar los términos y condiciones.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      await register({
        nombre,
        apellido,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      navigate("/");
    } catch (err) {
      setError("No se pudo crear la cuenta.");
    }
  }

  return (
    <>
      <header className="SignUpHeader">
        <h2>
          {isMobile ? "Crea tu cuenta" : isTablet ? "MarisetaRastro" : ""}
        </h2>
        <h4>
          {isMobile
            ? "Únete a nuestra comunidad de moda lenta y artesanal"
            : isTablet
              ? "Uniendo el legado del Rastro madrileño con la elegancia contemporanea"
              : ""}
        </h4>
      </header>

      <section className="SignUpSection">
        <form onSubmit={handleSubmit}>
          {isTablet && <h2>Crea tu cuenta</h2>}
          <div className="name">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              placeholder="Mariseta"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="surname">
            <label htmlFor="apellido">Apellidos</label>
            <input
              id="apellido"
              type="text"
              placeholder="Rastro"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>

          <div className="email">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              placeholder="ejemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="password">
            <label htmlFor="password">Contraseña</label>

            <div className="password-input-row">
              <input
                id="password"
                type={mostrarPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />

              <button
                type="button"
                className="boton-ojo"
                onClick={() => setMostrarPassword(!mostrarPassword)}
              >
                {mostrarPassword ? "👁️‍🗨️" : "👁️"}
              </button>
            </div>
          </div>

          <div className="password">
            <label htmlFor="confirmPassword">Confirmar contraseña</label>

            <div className="password-input-row">
              <input
                id="confirmPassword"
                type={mostrarPassword ? "text" : "password"}
                placeholder="Repite la contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
              />

              <button
                type="button"
                className="boton-ojo"
                onClick={() => setMostrarPassword(!mostrarPassword)}
              >
                {mostrarPassword ? "👁️‍🗨️" : "👁️"}
              </button>
            </div>
          </div>

          <div className="terms">
            <input
              id="checkbox"
              type="checkbox"
              checked={aceptaTerminos}
              onChange={(e) => setAceptaTerminos(e.target.checked)}
            />

            <p>
              Acepto los <span>Términos de Servicio</span> y la{" "}
              <span>Política de Privacidad</span>
            </p>
          </div>

          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="SignUpbtn">
            CREAR CUENTA <span className="icon-arrow-right2"></span>
          </button>
        </form>
        <aside className="login">
          <p>
            ¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link>
          </p>
        </aside>
      </section>
    </>
  );
}

export default SignUp;
