import React, { Component, useContext } from "react";
import styled from "styled-components";
import { AccordionContext } from "../AccordionV3";

const AccordionV3Panel = ({ children, index }) => {
  const { open, onClickPanel } = React.useContext(AccordionContext);

  return (
    <>
      <StyledOpen open={open}>
        {children.map((child, innerIndex) => {
          switch (innerIndex) {
            case 0:
              return (
                <StyledLabel
                  onClick={() => onClickPanel(index)}
                  key={child.props.children}
                >
                  {child.props.children}
                </StyledLabel>
              );
            case 1:
              return (
                <StyledBody key={child.props.children}>
                  {child.props.children}
                </StyledBody>
              );
            default:
              break;
          }
        })}
      </StyledOpen>
    </>
  );
};
export default AccordionV3Panel;

const StyledOpen = styled.div``;
const StyledLabel = styled.div`
  height: 50px;
  background: red;
`;
const StyledBody = styled.div`
  height: auto;
  background: blue;
`;
const StyledNotOpen = styled.div``;
