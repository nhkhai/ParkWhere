import ParkWhereLogo from "../assets/ParkWhereLogo.png";

function Header() {
  return (
    <header className="header">
      <img
        className="App-logo"
        src={ParkWhereLogo}
        alt="ParkWhere Logo"
        height={40}
        style={{ marginLeft: 20 }}
      />
    </header>
  );
}

export default Header;
