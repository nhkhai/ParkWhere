function Error({ message }) {
  return (
    <div className="error">
      <h3 style={{ marginBottom: 15 }}>❌ Error</h3>
      <p>{message}</p>
    </div>
  );
}

export default Error;
