import { createContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [globalObj, setGlobalObj] = useState({
    globalObjElement1: "Thomson Road",
    globalObjElement2: "Global Object Element 2",
    globalObjElement3: "Global Object Element 3",
  });

  const [globalObj2, setGlobalObj2] = useState({
    globalObj2Element1: "Global Object 2 Element 1",
    globalObj2Element2: "Global Object 2 Element 2",
    globalObj2Element3: "Global Object 2 Element 3",
  });

  const context = {
    globalObj,
    globalObj2,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}

export default GlobalContext;
