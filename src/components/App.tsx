import { HashRouter, Route, Routes } from "react-router-dom";
import shirts_placeholder from "../assets/camisetas_placeholder.png";
import hoddies_placeholder from "../assets/hoddies_placeholder.png";
import pants_placeholder from "../assets/pantalones_placeholder.png";
import swing_placeholder from "../assets/swing_placeholder.png";
import "../styles/base/_animations.scss";
import "../styles/layout/_root.scss";
import "../styles/pages/_home.scss";

import Header from "./Header.tsx";
import Login from "./Login.tsx";
import NavBar from "./navBar.tsx";
import Separator from "./Separator.tsx";
import SignUp from "./SignUp.tsx";

export default function App() {
  return (
    <HashRouter>
      {/* 1. NavBar stays on top */}
      <NavBar />

      {/* 2. Routes handles path switching */}
      <main className="mainApp">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Separator />
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
                <Separator />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
