import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import placeholder from "../assets/placeholder.png";
import "../styles/pages/_auth.scss";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [mostrarPassword, setMostrarPassword] = useState(false);

  const [error, setError] = useState("");

  const isDesktop = useMediaQuery({
    minWidth: 1024,
    maxWidth: 4000,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    try {
      await login(email, password);

      navigate("/");
    } catch (err) {
      setError("Correo o contraseña incorrectos.");
    }
  }

  return (
    <>
      <main className="mainAuth">
        <header className="AuthHeader">
          <img src={placeholder} alt="Placeholder" />

          <h1>Un gusto tenerte de vuelta</h1>

          {isDesktop && (
            <h2>
              Donde la tradición se encuentra con la modernidad. Moda artesanal
              para almas que valoran lo auténtico.
            </h2>
          )}
        </header>

        <section className="AuthSection">
          <form onSubmit={handleSubmit}>
            <h2>Inicio de sesión</h2>

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
              <label htmlFor="pwd">Contraseña</label>

              <div className="password-input-row">
                <input
                  id="pwd"
                  type={mostrarPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                  className="boton-ojo"
                >
                  {mostrarPassword ? "👁️‍🗨️" : "👁️"}
                </button>
              </div>
            </div>

            <div className="auth-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Recuérdame</span>
              </label>

              <a href="#forgot">¿Olvidaste tu contraseña?</a>
            </div>

            {error && <p className="auth-error">{error}</p>}
            <button className="btn-submit" type="submit">
              ENTRAR EN MI CUENTA
            </button>
            <div className="divider">
              <span>O CONTINÚA CON</span>
            </div>

            <div className="social-auth">
              <button type="button" className="btn-social">
                Google
              </button>

              <button type="button" className="btn-social">
                Apple
              </button>
            </div>

            <div className="register-footer">
              <p>¿Aún no tienes cuenta?</p>

              <Link to="/signUp">ÚNETE A LA COMUNIDAD</Link>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
