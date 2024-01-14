import { useContext } from "react";
import ModeContext from "../context/ModeContext";
import Button from "./Button";

function Toggle() {
  const ctx = useContext(ModeContext);

  const modeLabel = ctx.isLight ? "🌞" : "🌘";

  return (
    <span>
      <Button label={modeLabel} onClick={ctx.handlerToggle} />
    </span>
  );
}

export default Toggle;
