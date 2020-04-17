import React from "react";
import { StyledFieldColumn } from "./styles";

const FieldColumn = ({ children, className, index, style }) => {
  return (
    <StyledFieldColumn
      stretch={children.props.stretch}
      className={className}
      style={style}
      index={index}
    >
      {children}
    </StyledFieldColumn>
  );
};
export { FieldColumn };
