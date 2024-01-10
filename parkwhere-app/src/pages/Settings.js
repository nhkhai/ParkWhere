import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./Settings.module.css";

function Settings() {
  return (
    <div className={styles.settings}>
      <h1>Settings Page</h1>
      <h2>Change your settings here. </h2>
      <p>Favorite Location: </p>
      <input type="text" className={styles.settings["setting-input"]} />
      <Button label={"Save"}></Button>
    </div>
  );
}

export default Settings;
