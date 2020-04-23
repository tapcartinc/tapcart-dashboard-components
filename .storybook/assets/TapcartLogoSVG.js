import React from "react";
import logo from "./tapcart-logo.svg";

const TapcartLogoSVG = (props) => {
  return (
    <div
      style={{
        width: "600px",
        transform: "scale(1.5)",
      }}
    >
      <img src={logo} />
    </div>
  );
};
export default TapcartLogoSVG;
