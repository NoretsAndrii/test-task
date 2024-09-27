import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Logo from "../../../public/TravelTrucks.svg";

export default function Header() {
  const buildLinkClass = ({ isActive }) => {
    return !isActive ? css.link : [css.link, css.active].join(" ");
  };

  return (
    <div className={css.header}>
      <img src={Logo} className={css.logo} alt="TravelTrucks" />
      <div className={css.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </div>
    </div>
  );
}
