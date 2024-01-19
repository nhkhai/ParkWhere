import { createContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [search, setSearch] = useState("");
  const [parkList, setParkList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

  const handleFavorites = (carpark_number) => {
    // Check if the carpark_number already exists in favoriteList.
    const isAlreadyFavorite = favoriteList.some(
      (parkingLot) => parkingLot.carpark_number === carpark_number
    );

    if (!isAlreadyFavorite) {
      // Add to favoriteList only if it's not already a favorite.
      setFavoriteList([
        ...favoriteList,
        parkList.find(
          (parkingLot) => parkingLot.carpark_number === carpark_number
        ),
      ]);
    } else {
      // Optionally handle the case when it's already a favorite, like showing an alert.
      console.log("This carpark number is already in your favorites.");
    }

    // For debugging, to see the updated list of favorites.
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
