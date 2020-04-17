import React from "react";
import { StyledDescription } from "./styles";

const FieldDescription = props => {
  return (
    <StyledDescription errors={props.errors}>
      {props.children}
    </StyledDescription>
  );
};
export { FieldDescription };
