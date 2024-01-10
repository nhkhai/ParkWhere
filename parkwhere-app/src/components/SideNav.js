import { NavLink } from "react-router-dom";

import Card from "./Card";
import styles from "./SideNav.module.css";

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Search",
    path: "/search",
  },
  {
    id: 3,
    name: "Settings",
    path: "/settings",
  },
  {
    id: 4,
    name: "About",
    path: "/about",
  },
];

const customNavLinkStyle = ({ isActive }) =>
  isActive ? "nav-item-active" : "nav-item";

function SideNav() {
  return (
    <nav className={styles.sidebar}>
      <Card>
        <NavItems />
      </Card>
    </nav>
  );
}

function NavItems() {
  return (
    <ul className={styles["side-menu"]}>
      {navItems.map((item) => (
        <li key={item.id} className={styles["side-menu__item"]}>
          <NavLink className={customNavLinkStyle} to={item.path}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default SideNav;
