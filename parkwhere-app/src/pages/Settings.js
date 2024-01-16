import { useState, useContext } from "react";

import Button from "../components/Button";
import Input from "../components/Input";

import GlobalContext from "../context/GlobalContext";

import styles from "./Settings.module.css";

function Settings() {
  const globalCtx = useContext(GlobalContext);

  const { globalObj, globalObj2 } = globalCtx;

  return (
    <div className={styles.settings}>
      <h1>Settings</h1>
      <h2>Personalization</h2>
      <p>Favorite Location: </p>
      <br />
      <input
        type="text"
        value={globalObj.globalObjElement1}
        className={styles.settings["setting-input"]}
      />
      <Button label={"Save"}></Button>
    </div>
  );
}

export default Settings;
