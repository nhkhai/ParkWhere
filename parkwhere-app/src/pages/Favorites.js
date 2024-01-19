import { useContext } from "react";
import styles from "./Settings.module.css";
import GlobalContext from "../context/GlobalContext";

function Favorites() {
  const globalCtx = useContext(GlobalContext);
  const { favoriteList } = globalCtx;

  const removeFavHandler = () => {};

  return (
    <div className={styles.settings}>
      <h1>Favorites</h1>
      <br />
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableContainer}>
            <th>Carpark Number</th>
            <th>Address</th>
            <th>Lots Available</th>
            <th>Total Lots</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {favoriteList.map((favItem) => (
            <tr key={favItem.carpark_number}>
              <td>{favItem.carpark_number}</td>
              <td>{favItem.address}</td>
              <td>{favItem.carpark_info[0].lots_available}</td>
              <td>{favItem.carpark_info[0].total_lots}</td>
              <td>
                <button onClick={() => removeFavHandler()}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Favorites;
