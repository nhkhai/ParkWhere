import Button from "../components/Button";

import styles from "./Support.module.css";

function Support() {
  return (
    <div className={styles.support}>
      <h1>Support</h1>
      <h2>Contact Support</h2>
      <Button label={"Call"}></Button>
    </div>
  );
}

export default Support;
