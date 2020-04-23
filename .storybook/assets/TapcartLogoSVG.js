import React from "react";
import logo from "./tapcart-logo.svg";

const TapcartLogoSVG = (props) => {
  return (
    <div
      style={{
        transform: "scale(1.4)",
        marginBottom: "-5px",
        marginLeft: "20px",
      }}
    >
      <img src={logo} />
    </div>
  );
};
export default TapcartLogoSVG;
