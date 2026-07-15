import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import placeholder from "../assets/placeholder.png";
import "../styles/base/_animations.scss";
import "../styles/base/_typography.scss";
import "../styles/layout/_header.scss";
import "../styles/pages/_auth.scss";
import "../styles/themes/_default.scss";

function Auth() {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const isDesktop = useMediaQuery({
    minWidth: 1024,
    maxWidth: 2560,
  });

  return (
    <>
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
        <h2>Inicio de sesión</h2>
        {/* Campo: Correo */}
        <div className="email">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" placeholder="ejemplo@gmail.com" />
        </div>

        {/* Campo: Contraseña */}
        <div className="password">
          <label htmlFor="pwd">Contraseña</label>
          <div className="password-input-row">
            <input
              type={mostrarPassword ? "text" : "password"}
              id="pwd"
              placeholder="Contraseña"
            />
            <button
              type="button"
              onClick={() => setMostrarPassword(!mostrarPassword)}
              className="boton-ojo"
              aria-label={
                mostrarPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
            >
              {mostrarPassword ? "👁️‍🗨️" : "👁️"}
            </button>
          </div>
        </div>

        {/*Opciones de Recuérdame y Olvido de contraseña */}
        <div className="auth-options">
          <label className="remember-me">
            <input type="checkbox" id="remember" />
            <span>Recuérdame</span>
          </label>

          <a href="#forgot" className="forgot-password">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Botón de entrar */}
        <button type="submit" className="btn-submit">
          ENTRAR EN MI CUENTA <span>→</span>
        </button>
        {/*Separador "O CONTINÚA CON" */}
        <div className="divider">
          <span>O CONTINÚA CON</span>
        </div>

        {/*Botones de Redes Sociales */}
        <div className="social-auth">
          <button type="button" className="btn-social">
            <span className="icon-placeholder">📰</span> Google
          </button>
          <button type="button" className="btn-social">
            <span className="icon-placeholder">⣿</span> Apple
          </button>
        </div>

        {/*Enlace de Registro Inferior */}
        <div className="register-footer">
          <p>¿Aún no tienes cuenta?</p>
          <a href="#register">ÚNETE A LA COMUNIDAD</a>
        </div>
      </section>
    </>
  );
}

export default Auth;
