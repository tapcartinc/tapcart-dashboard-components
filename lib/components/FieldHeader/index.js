import React from "react";
import PropTypes, { node } from "prop-types";
import { StyledFieldHeader } from "./styles";

const FieldHeader = ({ labelClassName, children, stretch, ...rest }) => {
  return (
    <StyledFieldHeader stretch={stretch} className={labelClassName}>
      {children}
    </StyledFieldHeader>
  );
};
export { FieldHeader };

FieldHeader.propTypes = {
  /**
   * Classname that can be added for css to field label
   */
  labelClassName: PropTypes.string,
  /**
   * Prop that controls weather the label and description stretch across the top layer of the field, wrapping the field children to the next row
   */
  stretch: PropTypes.bool,

  children: PropTypes.node
};
