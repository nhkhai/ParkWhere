import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <h1>ParkHere</h1>
      <h2>Welcome to the ParkWhere app! </h2>
      <h3>Click on search to start searching for available parking lots. </h3>
    </div>
  );
}

export default Home;
