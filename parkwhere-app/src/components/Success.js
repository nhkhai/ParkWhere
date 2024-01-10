import styles from "./Success.module.css";

function Success({ message }) {
  return (
    <div className={styles.success}>
      <h3 style={{ marginBottom: 15 }}>✅ Success</h3>
      <p>{message}</p>
    </div>
  );
}

export default Success;
