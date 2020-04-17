import React from "react";
import styled from "styled-components";
import { StyledPanelChildrenWrapper } from "./styles";
import PropTypes, { node } from "prop-types";

const AccordionPanelBody = props => {
  console.log("props", props);
  return (
    <StyledPanelChildrenWrapper
      isOpen={props.isOpen}
      className={props.bodyClassName}
    >
      {props.children}
    </StyledPanelChildrenWrapper>
  );
};
export { AccordionPanelBody };

AccordionPanelBody.propTypes = {
  /**
   * Classname that can be added for css to panel children
   */
  bodyClassName: PropTypes.string
};
