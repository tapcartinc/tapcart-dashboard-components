import React, { useState, useEffect, useRef, Fragment } from "react";
import { StyledAccordionWrapper } from "./styles";
import { AccordionPanel } from "../AccordionPanel";
import PropTypes, { node } from "prop-types";

const AccordionV2 = props => {
  const [state, setState] = useState({
    openSections: {},
    errors: null
  });

  const onClick = index => {
    const { openSections } = state;

    const isOpen = !!openSections[index];

    setState(prevState => ({
      ...prevState,
      openSections: {
        [index]: !isOpen
      }
    }));
  };

  const { children } = props;

  return (
    <StyledAccordionWrapper>
      {children.map((panel, index) => {
        console.log("panel", panel);

        return <AccordionPanel />;

        return React.createElement(AccordionPanel, {
          key: panel.props.children[0].props.children,
          isOpen: state.openSections[index],
          onClick: onClick,
          label: panel.props.children[0].props.children,
          children: panel.props.children[1],
          index: index
        });
      })}
    </StyledAccordionWrapper>
  );
};
export { AccordionV2 };
