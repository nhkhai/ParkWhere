import { PacmanLoader } from "react-spinners";

function Loading() {
  return (
    <div
      style={{
        width: 500,
        height: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PacmanLoader color="#5f3dc4" />
    </div>
  );
}

export default Loading;
