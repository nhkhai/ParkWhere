import { PacmanLoader } from "react-spinners";

import styles from "./Loading.module.css";

function Loading() {
  return (
    <div class={styles.loading}>
      <PacmanLoader color="#5f3dc4" />
    </div>
  );
}

export default Loading;
