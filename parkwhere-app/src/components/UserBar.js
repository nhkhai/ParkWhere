import { useContext } from "react";
import UserContext from "../context/UserContext";
import styles from "./UserBar.module.css";
import ModeContext from "../context/ModeContext";

function UserBar() {
  const userCtx = useContext(UserContext);
  const modeCtx = useContext(ModeContext);
  //Destructure state and handler fn in UserContext
  const {
    credentials,
    LoggedIn,
    handlerChangeCredentials,
    handlerSubmit,
    handlerLogout,
  } = userCtx;

  if (LoggedIn)
    return (
      <div
        className={`${
          modeCtx.isLight
            ? styles.userBarContainer
            : styles.userBarContainerDark
        }`}
      >
        <p style={{ fontSize: 20, fontWeight: 500 }}>
          Welcome {credentials.username}
        </p>
        <button onClick={handlerLogout}>LOGOUT</button>
      </div>
    );

  return (
    <div
      className={`${
        modeCtx.isLight ? styles.userBarContainer : styles.userBarContainerDark
      }`}
    >
      <form className={styles.userBarForm} onSubmit={handlerSubmit}>
        <label>username</label>
        <input
          name="username"
          value={credentials.username}
          onChange={handlerChangeCredentials}
        />
        <label>password</label>
        <input
          name="password"
          type="password"
          value={credentials.password}
          onChange={handlerChangeCredentials}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default UserBar;
