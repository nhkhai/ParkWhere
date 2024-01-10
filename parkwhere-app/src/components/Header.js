import SimpleCrmLogo from "../assets/ParkWhereLogo.png";

function Header() {
  return (
    <header className="header">
      <img
        className="App-logo"
        src={SimpleCrmLogo}
        alt="ParkWhere Logo"
        height={40}
        style={{ marginLeft: 20 }}
      />
    </header>
  );
}

export default Header;
