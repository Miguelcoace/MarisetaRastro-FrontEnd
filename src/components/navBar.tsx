import { FaList, FaPaperPlane, FaShoppingCart, FaSun } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom"; // Use Link instead of <a> tags for internal routing
import "../styles/base/_typography.scss";
import "../styles/layout/_navbar.scss";

function NavBar() {
  const isMobileXL = useMediaQuery({ minWidth: 425, maxWidth: 2560 });
  const is475Pixels = useMediaQuery({ minWidth: 475, maxWidth: 2560 });
  const is525Pixels = useMediaQuery({ minWidth: 525, maxWidth: 2560 });
  const is575Pixels = useMediaQuery({ minWidth: 575, maxWidth: 2560 });
  const is625Pixels = useMediaQuery({ minWidth: 625, maxWidth: 2560 });
  const is675Pixels = useMediaQuery({ minWidth: 675, maxWidth: 2560 });

  return (
    <nav className="navbar">
      <div className="logo-container">
        <FaPaperPlane className="icons logo" />
        <h2 className="title">MarisetaRastro</h2>
      </div>

      {isMobileXL && (
        <ul className="nav-links">
          <li>
            <a href="#">Tienda</a>
          </li>
          {is475Pixels && (
            <li>
              <a href="#">Contacto</a>
            </li>
          )}
          {is525Pixels && (
            <li>
              <a href="#">Historia</a>
            </li>
          )}
          {is625Pixels && (
            <li>
              <a href="#">Blog</a>
            </li>
          )}
          {is675Pixels && (
            <li>
              {/* Use <Link> so React Router transitions without refreshing the page */}
              <Link to="/login">Perfil</Link>
            </li>
          )}
        </ul>
      )}

      <ul className="icons">
        <li>
          <a href="#">
            <FaMagnifyingGlass className="icons" />
          </a>
        </li>
        {is575Pixels && (
          <li>
            <a href="#">
              <FaShoppingCart className="icons" />
            </a>
          </li>
        )}
        <li>
          <a href="#">
            {!is675Pixels && <FaList className="icons" />}
            {is675Pixels && <FaSun className="icons" />}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
