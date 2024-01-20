import { useContext } from "react";
import styles from "./Home.module.css";
import ModeContext from "../context/ModeContext";

function Home() {
  const modeCtx = useContext(ModeContext);

  return (
    <div className={`${modeCtx.isLight ? styles.card : styles.dark}`}>
      <h1>ParkHere</h1>
      <h2>Welcome to the ParkWhere app! </h2>
      <h3>Click on search to start searching for available parking lots. </h3>
    </div>
  );
}

export default Home;
