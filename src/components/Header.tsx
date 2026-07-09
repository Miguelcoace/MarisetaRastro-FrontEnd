import "../styles/base/_animations.scss";
import "../styles/base/_typography.scss";
import "../styles/components/_buttons.scss";
import "../styles/layout/_header.scss";
function Header() {
  return (
    <>
      <header className="header">
        <div className="hero">
          <h1>Tu tienda hippie del Rastro de Madrid</h1>
          <h3>Ropa artesanal, espíritu libre</h3>
          <div className="grid">
            <button className="btn">Ver Categorias</button>
            <button className="btn historia">Nuestra Historia</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
