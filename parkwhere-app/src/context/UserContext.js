import { createContext, useState } from "react";

const UserContext = createContext();

const initialCredentials = {
  username: "",
  password: "",
};

export function UserProvider({ children }) {
  const [credentials, setCredentials] = useState(initialCredentials);
  const [LoggedIn, setLoggedIn] = useState(false);

  const handlerChangeCredentials = (e) => {
    setCredentials((prevCredentials) => {
      return {
        ...prevCredentials,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    alert("Login succcessfully!");
    setLoggedIn(true);
  };

  const handlerLogout = () => {
    setLoggedIn(false);
    setCredentials(initialCredentials);
  };

  const context = {
    credentials,
    LoggedIn,
    handlerChangeCredentials,
    handlerSubmit,
    handlerLogout,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}

export default UserContext;
