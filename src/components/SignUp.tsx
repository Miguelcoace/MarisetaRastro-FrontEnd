import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/base/_animations.scss";
import "../styles/base/_typography.scss";
import "../styles/components/_buttons.scss";
import "../styles/layout/_header.scss";
import "../styles/pages/_signUp.scss";
import "../styles/themes/_default.scss";

function SignUp() {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  return (
    <>
      <header className="SignUpHeader">
        <h2>Crea tu cuenta</h2>
        <h4>Unete a nuestra comunidad de moda lenta y artesanal</h4>
      </header>
      <section className="SignUpSection">
        {/* Campo: Nombre */}
        <div className="name">
          <label htmlFor="name">Nombre Completo</label>
          <input type="text" id="name" placeholder="Mariseta Rastro" />
        </div>
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
        <div className="terms">
          <input type="checkbox" id="checkbox" />
          <p>
            Acepto los <span>Términos de Servicio</span> y la{" "}
            <span>Política de Privacidad</span>
          </p>
        </div>

        <button className="SignUpbtn">
          CREAR CUENTA <span className="icon-arrow-right2"></span>
        </button>
      </section>
      <aside className="login">
        <p>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </aside>
    </>
  );
}

export default SignUp;
