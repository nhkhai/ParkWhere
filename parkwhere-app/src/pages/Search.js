import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.search}>
      <h1>ParkHere</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search location... "
      />
      <button>Search</button>
    </div>
  );
}

export default Search;
