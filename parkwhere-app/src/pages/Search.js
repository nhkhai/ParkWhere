import { v4 as uuid } from "uuid";
import { BeatLoader } from "react-spinners";
import { useContext, useEffect } from "react";
import carparkDetails from "./../data/HDBCarparkInformation.json";
import axios from "axios";
import GlobalContext from "../context/GlobalContext";
import { NavLink } from "react-router-dom";
import styles from "./Search.module.css";

function Search() {
  const globalCtx = useContext(GlobalContext);
  const { search, setSearch, parkList, setParkList, isLoading, setIsLoading } =
    globalCtx;

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
  //  const filteredProducts = input === ""?products:products.filter(product => product.price < Number(input)) //filter works now, trick is to NOT filter a state but the original product array itself
  const filteredLots = parkList.filter((parkingLot) => {
    return search === ""
      ? parkingLot
      : parkingLot.address?.includes(search.toUpperCase()) ||
          parkingLot.carpark_number.includes(search.toUpperCase());
  });

  return (
    <div className="Lots">
      Carpark App
      <button onClick={getSlots}>refresh</button>
      <input onChange={(e) => setSearch(e.target.value)} value={search}></input>
      <div>
        {isLoading ? (
          <div className="loader">
            <BeatLoader />
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Carpark Number</th>
                <th>Address</th>
                <th>Lots Available</th>
                <th>Total Lots</th>
              </tr>
            </thead>
            <tbody>
              {filteredLots.map((parkingLot, index) => (
                <tr key={uuid()} className={styles.listRow}>
                  <td>{index}</td>
                  <td>{parkingLot.carpark_number}</td>
                  <td>{parkingLot.address}</td>
                  <td>{parkingLot.carpark_info[0].lots_available}</td>
                  <td>{parkingLot.carpark_info[0].total_lots}</td>
                  <NavLink
                    to={`/search/${parkingLot.x_coord},${parkingLot.y_coord}`}
                  >
                    View Details
                  </NavLink>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Search;
