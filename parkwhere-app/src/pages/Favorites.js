import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { NavLink } from "react-router-dom";
import styles from "./Favorites.module.css";
import ModeContext from "../context/ModeContext";

function Favorites() {
  const modeCtx = useContext(ModeContext);
  const globalCtx = useContext(GlobalContext);
  const { favoriteList, setFavoriteList } = globalCtx;

  const removeFavHandler = (carpark_number) => {
    console.log("removeFavHandler-carpark number is: ", carpark_number);
    let newFavList = [...favoriteList];
    console.log("removeFavHandler-newFavList: ", newFavList);
    newFavList = newFavList.filter(
      (favLot) => favLot.carpark_number !== carpark_number
    );
    console.log("removeFavHandler-newFavList: ", newFavList);
    setFavoriteList(newFavList);
  };

  return (
    <div className={`${styles.settings} ${!modeCtx.isLight && styles.dark}`}>
      <h1>Favorites</h1>
      <br />
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableContainer}>
            <th>Carpark Number</th>
            <th>Address</th>
            <th>Lots Available</th>
            <th>Total Lots</th>
            <th>View on Map 🗺️</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {favoriteList.map((favLot) => (
            <tr key={favLot.carpark_number}>
              <td>{favLot.carpark_number}</td>
              <td>{favLot.address}</td>
              <td>{favLot.carpark_info[0].lots_available}</td>
              <td>{favLot.carpark_info[0].total_lots}</td>
              <td>
                <NavLink to={`/search/${favLot.x_coord},${favLot.y_coord}`}>
                  <button className={styles.details}>Map View</button>
                </NavLink>
              </td>
              <td>
                <button onClick={() => removeFavHandler(favLot.carpark_number)}>
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Favorites;
