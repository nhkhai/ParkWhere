import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.Search}>
      <h2>ParkHere</h2>
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
