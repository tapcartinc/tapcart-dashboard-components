import React, { useState } from "react";
import { StyledAccordionWrapper } from "./styles";

const AccordionContext = React.createContext({ parent: "AccordionV3" });

const AccordionV3 = ({ children }) => {
  const [state, setState] = useState({
    open: null
  });

  const onClickPanel = panel => {
    if (state.open && state.open[panel]) {
      let updatedOpenState = { ...state.open };

      setState(prevState => ({
        ...prevState,
        open: {
          ...prevState.open,
          [panel]: !prevState.open[panel]
        }
        // open: !prevState.open[panel]
      }));
    } else {
      let newOpenState = { ...state.open };
      newOpenState[panel] = true;
      setState(prevState => ({
        ...prevState,
        open: newOpenState
      }));
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
            key: child.props.children[0].props.children
          });
        })}
      </AccordionContext.Provider>
    </StyledAccordionWrapper>
  );
};

export { AccordionV3 as default, AccordionContext };
