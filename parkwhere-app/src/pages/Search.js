import styles from "./Search.module.css";
import Button from "../components/Button";

function Search() {
  return (
    <div className={styles.search}>
      <h1>ParkHere</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search location... "
      />
      <Button label={"Search"}></Button>
    </div>
  );
}

export default Search;
