import { createContext, useState } from "react";

const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [isLight, setIsLight] = useState(true);

  const handlerToggle = () => {
    setIsLight(() => !isLight);
  };

  const context = {
    isLight,
    handlerToggle,
  };

  return (
    <ModeContext.Provider value={context}>{children}</ModeContext.Provider>
  );
}

export default ModeContext;
