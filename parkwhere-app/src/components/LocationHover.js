import { greatPlaceStyle, greatPlaceStyleHover } from "./LocationHoverStyle";

import React from "react";

export default function LocationHover({ text }) {
  //  const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;
  const style = greatPlaceStyle;

  return <div style={style}>{text}</div>;
}
