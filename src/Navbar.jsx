import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ItemShopUpdates">
              Item Shop Updates
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/BattleRoyaleNews">
              Battle Royale News
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
