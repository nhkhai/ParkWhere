import { BeatLoader } from "react-spinners";
import { useState, useContext, useEffect } from "react";
import carparkDetails from "./../data/HDBCarparkInformation.json";
import axios from "axios";
import GlobalContext from "../context/GlobalContext";
import { NavLink } from "react-router-dom";
import styles from "./Search.module.css";
import ModeContext from "../context/ModeContext";

function Search() {
  const globalCtx = useContext(GlobalContext);
  const modeCtx = useContext(ModeContext);

  const {
    search,
    setSearch,
    parkList,
    setParkList,
    isLoading,
    setIsLoading,
    handleFavorites,
  } = globalCtx;
  const [searchResultsBatch, setSearchResultsBatch] = useState(10);

  useEffect(() => {
    getSlots();
  }, []);

  const getSlots = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://api.data.gov.sg/v1/transport/carpark-availability"
      );
      //- - - SORT  parklist in alphabetical order - - -
      response.data.items[0].carpark_data.sort((a, b) =>
        a.carpark_number.localeCompare(b.carpark_number)
      );

      //- - - MERGE parklist with json - - -
      const mergedData = response.data.items[0].carpark_data.map((carpark) => {
        const details = carparkDetails.find(
          (detail) => detail.car_park_no === carpark.carpark_number
        );
        return { ...carpark, ...details };
      });
      console.log("merged data", mergedData);

      //SET parkList value
      setParkList(mergedData);

      console.log(
        "response.data.items[0].carpark_data: ",
        response.data.items[0].carpark_data
      );
    } catch (error) {
      console.log(`🔴 error encountered: ${error}`);
    } finally {
      setIsLoading(false);
      return null;
    }
  };
  //FILTER FUNCTION
  const filteredLots = parkList.filter((parkingLot) => {
    return search === ""
      ? parkingLot
      : parkingLot.address?.includes(search.toUpperCase()) ||
          parkingLot.carpark_number.includes(search.toUpperCase());
  });

  return (
    <div className={styles.searchContainer}>
      <button onClick={getSlots}>refresh</button>
      <div>
        <select
          value={searchResultsBatch}
          onChange={(e) => setSearchResultsBatch(e.target.value)}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={filteredLots.length}>All</option>
        </select>
      </div>
      <br />
      <input onChange={(e) => setSearch(e.target.value)} value={search}></input>
      <div className={styles.searchContainer}>
        {isLoading ? (
          <div className="loader">
            <BeatLoader />
          </div>
        ) : filteredLots.length ? (
          <table className={styles.table}>
            <thead>
              <tr
                className={`${
                  modeCtx.isLight
                    ? styles.tableContainer
                    : styles.tableContainerDark_Head
                }`}
              >
                <th>Carpark Number</th>
                <th>Address</th>
                <th>Lots Available</th>
                <th>Total Lots</th>
                <th>View on Map 🗺️</th>
                <th>Add to Fav</th>
              </tr>
            </thead>
            <tbody>
              {filteredLots
                .slice(0, searchResultsBatch)
                .map((parkingLot, index) => (
                  <tr
                    key={parkingLot.carpark_number}
                    className={`${
                      modeCtx.isLight
                        ? styles.tableContainer
                        : styles.tableContainerDark_Body
                    }`}
                  >
                    <td>{parkingLot.carpark_number}</td>
                    <td className={styles.address}>{parkingLot.address}</td>
                    <td>{parkingLot.carpark_info[0].lots_available}</td>
                    <td>{parkingLot.carpark_info[0].total_lots}</td>
                    <td>
                      <NavLink
                        to={`/search/${parkingLot.x_coord},${parkingLot.y_coord}`}
                      >
                        <button className={styles.details}>Map View</button>
                      </NavLink>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          handleFavorites(parkingLot.carpark_number)
                        }
                      >
                        Favorite ⭐
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <h4 style={{ margin: "20px" }}>Type a valid parking Lot</h4>
        )}

        {/* Nav arrows 
        <button onClick={goToPrevPage} disabled={resultsPage === 1}>
          Previous Page
        </button>
        <button onClick={goToNextPage} disabled={resultsPage === 1}>
          Next Page
        </button>

        {/* Load More to fetch more results 
        <button onClick={loadMoreResults}>
          Load More
        </button>
      */}
      </div>
    </div>
  );
}

export default Search;
