import React, { useState } from "react";
import { StyledAccordionWrapper } from "./styles";

const AccordionContext = React.createContext({ parent: "AccordionV3" });

const AccordionV3 = ({
  children,
  onePanelOpen,
  steps,
  includeBorder,
  spacing,
  panelHeight,
  includeArrows
}) => {
  const [state, setState] = useState({
    open: null
  });

  const onClickPanel = panel => {
    if (onePanelOpen) {
      if (state.open && Number(Object.keys(state.open)[0]) === panel) {
        if (state.open[panel]) {
          return setState(prevState => ({
            ...prevState,
            open: null
          }));
        }
      }
      if (state.open && Object.keys(state.open) !== panel) {
        return setState(prevState => ({
          ...prevState,
          open: {
            [panel]: true
          }
        }));
      }
      if (!state.open) {
        return setState(prevState => ({
          ...prevState,
          open: {
            [panel]: true
          }
        }));
      }
    } else {
      if (state.open && state.open[panel]) {
        setState(prevState => ({
          ...prevState,
          open: {
            ...prevState.open,
            [panel]: !prevState.open[panel]
          }
        }));
      } else {
        let newOpenState = { ...state.open };
        newOpenState[panel] = true;
        setState(prevState => ({
          ...prevState,
          open: newOpenState
        }));
      }
    }
  };

  return (
    <StyledAccordionWrapper>
      <AccordionContext.Provider
        value={{ open: state.open, onClickPanel: onClickPanel }}
      >
        {children.map((child, index) => {
          return React.cloneElement(child, {
            index,
            key: child.props.children[0].props.children,
            steps,
            includeBorder,
            spacing,
            panelHeight,
            includeArrows
          });
        })}
      </AccordionContext.Provider>
    </StyledAccordionWrapper>
  );
};

export { AccordionV3 as default, AccordionContext };
