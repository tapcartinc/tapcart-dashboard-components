import React from "react";
import { StyledAccordionLabel } from "./styles";

const AccordionLabel = props => {
  console.log("label", props);
  return <StyledAccordionLabel>{props.children}</StyledAccordionLabel>;
};
export { AccordionLabel };
