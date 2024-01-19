import { createContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [search, setSearch] = useState("");
  const [parkList, setParkList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

  const handleFavorites = (carpark_number) => {
    setFavoriteList([
      ...favoriteList,
      parkList.find(
        (parkingLot) => parkingLot.carpark_number === carpark_number
      ),
    ]);
    console.log(favoriteList);
  };

  const context = {
    search,
    setSearch,
    parkList,
    setParkList,
    isLoading,
    setIsLoading,
    favoriteList,
    setFavoriteList,
    handleFavorites,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}

export default GlobalContext;
