import styles from "./Header.module.css";

import ParkWhereLogo from "../assets/ParkWhereLogo.png";

function Header() {
  return (
    <header className={styles.header}>
      <img
        className="App-logo"
        src={ParkWhereLogo}
        alt="ParkWhere Logo"
        height={40}
        style={{ marginLeft: 230 }}
      />
    </header>
  );
}

export default Header;
