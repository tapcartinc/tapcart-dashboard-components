import React from "react";
import {
  StyledPanelWrapper,
  StyledPanelChildren,
  StyledPanelLabel,
  StyledPanelChildrenWrapper
} from "./styles";

const AccordionPanel = props => {
  // console.log("props", props);
  const onClick = () => {
    props.onClick(props.index);
  };
  const childrenWithProps = React.Children.map(props.children, child =>
    React.cloneElement(child, { ...props, isOpen: props.isOpen })
  );
  return (
    <StyledPanelWrapper>
      <StyledPanelLabel onClick={onClick} isOpen={props.isOpen}>
        {props.label}
      </StyledPanelLabel>
      <StyledPanelChildrenWrapper isOpen={props.isOpen}>
        <StyledPanelChildren onClick={onClick} isOpen={props.isOpen}>
          {/* {React.cloneElement(props.children, { ...props })} */}
          {childrenWithProps}
        </StyledPanelChildren>
      </StyledPanelChildrenWrapper>
    </StyledPanelWrapper>
  );
};

export { AccordionPanel };
