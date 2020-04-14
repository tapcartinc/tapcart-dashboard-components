import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  StyledPanelWrapper,
  StyledPanelLabel,
  StyledPanelChildrenWrapper,
  StyledPanelInnerChildren,
  StyledStep,
  StyledLabelChildren
} from "./styles";
import { AccordionContext } from "../AccordionV3";
import { Icon } from "../../elements/Icon";
import { colorPicker } from "../../utils/_dashVariables";

const AccordionV3Panel = ({
  children,
  index,
  steps,
  complete,
  errors,
  includeBorder,
  spacing,
  panelHeight,
  includeArrows
}) => {
  const { open, onClickPanel } = React.useContext(AccordionContext);

  return (
    <StyledPanelWrapper
      spacing={spacing}
      error={errors && errors.length > 0 && !complete}
      isOpen={open && open[index]}
      includeBorder={includeBorder}
    >
      <StyledPanelLabel
        onClick={() => onClickPanel(index)}
        panelHeight={panelHeight}
      >
        {steps && (
          <StyledStep
            stepComplete={complete}
            error={errors && errors.length > 0 && !complete}
          >
            {!complete && <span>{index + 1}</span>}
            {complete && <Icon type="checkmark" fill="#ffffff" />}
          </StyledStep>
        )}
        <StyledLabelChildren>
          {children[0].props.children}
          {includeArrows && (
            <Icon
              type="arrow-down"
              fill={colorPicker.blue}
              style={
                open && open[index]
                  ? {
                      transform: "rotate(-180deg)",
                      transition: "transform .2s ease-in"
                    }
                  : {
                      transform: "rotate(0deg)",
                      transition: "transform .2s ease-in"
                    }
              }
            />
          )}
        </StyledLabelChildren>
      </StyledPanelLabel>
      <StyledPanelChildrenWrapper isOpen={open && open[index]}>
        <StyledPanelInnerChildren isOpen={open && open[index]}>
          {children[1].props.children}
        </StyledPanelInnerChildren>
      </StyledPanelChildrenWrapper>
    </StyledPanelWrapper>
  );
};
export default AccordionV3Panel;
