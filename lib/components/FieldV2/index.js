import React, { useState } from "react";
import PropTypes, { node } from "prop-types";
import { FieldColumn } from "../FieldColumn";

import {
  StyledField,
  StyledChildren,
  StyledFieldInfo,
  StyledLabel,
  StyledDescription,
  StyledErrors
} from "./styles";

const FieldV2 = props => {
  const {
    label,
    description,
    lastField,

    toggleState,
    setToggleState,
    errors,
    flexWrap,
    justifyContent,
    stretch,
    children
  } = props;

  console.log("children", children);

  return (
    <StyledField lastField={lastField}>
      {children.map((child, index) => {
        return React.cloneElement(
          <FieldColumn children={child} key={`${index}`} index={index} />
        );
      })}
    </StyledField>
  );
};
export { FieldV2 };

FieldV2.propTypes = {
  /**
   * Add to the last child Field of the Fields parent component
   * Removes the bottom border style
   */
  lastField: PropTypes.bool,
  /**
   * Makes the current field a ToggleField
   */
  toggleState: PropTypes.bool,

  /**
   * Used to receive errors object coming off of the FormWithErrors component
   */
  errors: PropTypes.object,
  /**
   * Allows field children to break to a new line/wrap
   */
  flexWrap: PropTypes.bool,
  /**
   * Alignment prop for children that separates the children inside of the field component
   */
  justifyContent: PropTypes.bool,

  children: PropTypes.node
};

FieldV2.defaultProps = {};
