import shirts_placeholder from "../assets/camisetas_placeholder.png";
import hoddies_placeholder from "../assets/hoddies_placeholder.png";
import pants_placeholder from "../assets/pantalones_placeholder.png";
import swing_placeholder from "../assets/swing_placeholder.png";
import "../styles/base/_animations.scss";
import "../styles/pages/_home.scss";
function App() {
  return (
    <section className="colections">
      <h2>Categorías</h2>
      <p>Descubre nuestra esencia bohemia</p>
      <div className="categories">
        <article className="pants">
          <img src={pants_placeholder} alt="Pants Categorie" />
          <h3>Pantalones</h3>
        </article>
        <article className="shirts">
          <img src={shirts_placeholder} alt="Shirts Categorie" />
          <h3>Camisetas</h3>
        </article>
        <article className="hoddies">
          <img src={hoddies_placeholder} alt="Hoddies Categorie" />
          <h3>Sudaderas</h3>
        </article>
        <article className="comfort">
          <img src={swing_placeholder} alt="Comfort Categorie" />
          <h3>Relax</h3>
        </article>
      </div>
    </section>
  );
}

export default App;
