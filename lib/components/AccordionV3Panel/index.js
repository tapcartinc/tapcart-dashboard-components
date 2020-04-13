import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  StyledPanelWrapper,
  StyledPanelLabel,
  StyledPanelChildrenWrapper
} from "./styles";
import { AccordionContext } from "../AccordionV3";
import { isEmpty } from "../../hooks/useEmptyObjectCheck";

const AccordionV3Panel = ({ children, index }) => {
  const [isOpen, setOpen] = useState(false);
  const { open, onClickPanel } = React.useContext(AccordionContext);
  console.log("open", open);
  console.log("index", index);
  // if (open && !isEmpty(open)) {
  //   console.log("cat");
  //   Object.entries(open).filter(panel => {

  //   });
  // }
  console.log("open && open[index]", open && open[index]);
  return (
    <StyledPanelWrapper isOpen={open && open[index]}>
      <StyledPanelLabel onClick={() => onClickPanel(index)}>
        {children[0].props.children}
      </StyledPanelLabel>
      <StyledPanelChildrenWrapper isOpen={open && open[index]}>
        {children[1].props.children}
      </StyledPanelChildrenWrapper>
    </StyledPanelWrapper>
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

{
  /* {children.map((child, innerIndex) => {
          console.log("index", index);

          switch (innerIndex) {
            case 0:
              return (
                <StyledPanelLabel
                  onClick={() => onClickPanel(index)}
                  key={child.props.children}
                >
                  {child.props.children}
                </StyledPanelLabel>
              );
            case 1:
              return (
                <StyledPanelChildrenWrapper key={child.props.children}>
                  {child.props.children}
                </StyledPanelChildrenWrapper>
              );
            default:
              break;
          }
        })} */
}
