import React from "react";
import { StyledAccordionLabel } from "./styles";
import PropTypes, { node } from "prop-types";

const AccordionLabel = ({ labelClassName, children, ...rest }) => {
  return (
    <StyledAccordionLabel className={labelClassName}>
      {children}
    </StyledAccordionLabel>
  );
};
export { AccordionLabel };

AccordionLabel.propTypes = {
  /**
   * Classname that can be added for css to panel label
   */
  labelClassName: PropTypes.string
};
