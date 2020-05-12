import React from "react";
import { StyledFieldLabel } from "./styles";

const FieldLabel = props => {
  return <StyledFieldLabel {...props}>{props.children}</StyledFieldLabel>;
};
export { FieldLabel };
