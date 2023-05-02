import { NavLink, Link } from "react-router-dom";
import logoKasa from "./../../assets/kasa_logo_red.png";
import "./header.scss";

function Header() {
  return (
    <header>
      <Link className="" to="/">
        <img src={logoKasa} alt="logo  Kasa" />
      </Link>

      <nav>
        <ul className="uppercase ">
          <li>
            <NavLink className="link-size" to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className="link-size" to="/about">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
