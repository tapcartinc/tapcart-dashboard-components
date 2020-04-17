import React, { useContext, useState } from "react";
import PropTypes, { node } from "prop-types";
import { AccordionLabel } from "../AccordionLabel";

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
import { AccordionPanelBody } from "../AccordionPanelBody";

const AccordionV3Panel = ({
  id,
  children,
  complete,
  errors,
  style,
  className,
  bodyClassName
}) => {
  const {
    open,
    onClickPanel,
    spacing,
    panelHeight,
    includeArrows,
    steps,
    includeBorder
  } = useContext(AccordionContext);

  return (
    <StyledPanelWrapper
      spacing={spacing}
      error={errors && errors.length > 0 && !complete}
      isOpen={open && open[id]}
      includeBorder={includeBorder}
      style={style}
      className={className}
    >
      <StyledPanelLabel
        onClick={() => onClickPanel(id)}
        panelHeight={panelHeight}
      >
        {steps && (
          <StyledStep
            stepComplete={complete}
            error={errors && errors.length > 0 && !complete}
          >
            {!complete && <span>{id}</span>}
            {complete && <Icon type="checkmark" fill="#ffffff" />}
          </StyledStep>
        )}
        <StyledLabelChildren>
          {React.cloneElement(
            <AccordionLabel
              children={children[0].props.children}
              labelClassName={children[0].props.labelClassName}
            />
          )}
          {includeArrows && (
            <Icon
              type="arrow-down"
              fill={colorPicker.blue}
              style={
                open && open[id]
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
      <StyledPanelChildrenWrapper isOpen={open && open[id]}>
        <StyledPanelInnerChildren isOpen={open && open[id]}>
          {React.cloneElement(
            <AccordionPanelBody
              children={children[1].props.children}
              isOpen={open && open[id]}
              bodyClassName={children[1].props.bodyClassName}
            />
          )}
        </StyledPanelInnerChildren>
      </StyledPanelChildrenWrapper>
    </StyledPanelWrapper>
  );
};
export default AccordionV3Panel;

AccordionV3Panel.propTypes = {
  /**
   * Order of panel in the correct order
   */
  id: PropTypes.number.isRequired,
  /**
   * Array of error messages that come back from validation check; first index is rendered
   */
  errors: PropTypes.array,
  /**
   * Holds state values for determining if the panel has all required values fulfilled; not required
   */
  complete: PropTypes.bool,
  /**
   * Applies style to the individual panel
   */
  style: PropTypes.object,
  /**
   * Classname that can be added for css to entire panel component
   */
  className: PropTypes.string,
  /**
   * Classname that can be added for css to panel label
   */

  children: PropTypes.node.isRequired
};

AccordionV3Panel.defaultProps = {};
