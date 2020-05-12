import React from "react";
import { StyledPanelChildrenWrapper } from "./styles";
import PropTypes, { node } from "prop-types";

const AccordionBody = (props) => {
  return (
    <StyledPanelChildrenWrapper
      isOpen={props.isOpen}
      className={props.bodyClassName}
    >
      {props.children}
    </StyledPanelChildrenWrapper>
  );
};
export { AccordionBody };

AccordionBody.propTypes = {
  /**
   * Classname that can be added for css to panel children
   */
  bodyClassName: PropTypes.string,
};
