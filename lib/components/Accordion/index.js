import React, { useState } from "react";
import PropTypes, { node } from "prop-types";
import { StyledAccordionWrapper } from "./styles";

const AccordionContext = React.createContext({ parent: "Accordion" });

const Accordion = ({
  children,
  onePanelOpen,
  steps,
  includeBorder,
  spacing,
  panelHeight,
  includeArrows,
  className,
}) => {
  const [state, setState] = useState({
    open: null,
  });

  const onClickPanel = (panel) => {
    if (onePanelOpen) {
      if (state.open && Number(Object.keys(state.open)[0]) === panel) {
        if (state.open[panel]) {
          return setState((prevState) => ({
            ...prevState,
            open: null,
          }));
        }
      }
      if (state.open && Object.keys(state.open) !== panel) {
        return setState((prevState) => ({
          ...prevState,
          open: {
            [panel]: true,
          },
        }));
      }
      if (!state.open) {
        return setState((prevState) => ({
          ...prevState,
          open: {
            [panel]: true,
          },
        }));
      }
    } else {
      if (state.open && state.open[panel]) {
        setState((prevState) => ({
          ...prevState,
          open: {
            ...prevState.open,
            [panel]: !prevState.open[panel],
          },
        }));
      } else {
        let newOpenState = { ...state.open };
        newOpenState[panel] = true;
        setState((prevState) => ({
          ...prevState,
          open: newOpenState,
        }));
      }
    }
  };

  return (
    <StyledAccordionWrapper className={className}>
      <AccordionContext.Provider
        value={{
          open: state.open,
          onClickPanel: onClickPanel,
          steps,
          includeBorder,
          includeArrows,
          spacing,
          panelHeight,
        }}
      >
        {children}
      </AccordionContext.Provider>
    </StyledAccordionWrapper>
  );
};

export { Accordion, AccordionContext };

Accordion.propTypes = {
  /**
   * Controls whether more than one panel can be opened at a time in the accordion
   */
  onePanelOpen: PropTypes.bool,

  /**
   * Adds designed and label steps in each panel that update with panel completion and panel errors
   * Functionality for panel completion and errors are handled on a panel by panel basis
   */
  steps: PropTypes.bool,

  /**
   * Adds border style and border style functionality to wrap each pannel for focused panel, errors on panel, etc
   */
  includeBorder: PropTypes.bool,

  /**
   * Adds spacing (in pixels) between panels
   */
  spacing: PropTypes.number,

  /**
   * Panel height
   */
  panelHeight: PropTypes.number,

  /**
   * Includes interactive, generic dropdown arrow on right side of panel
   */
  includeArrows: PropTypes.bool,
  /**
   * Classname that can be added for css to entire accordion wrapper
   */
  className: PropTypes.string,

  children: PropTypes.node.isRequired,
};

Accordion.defaultProps = {
  onePanelOpen: false,
  steps: false,
  includeBorder: false,
  spacing: 0,
  panelHeight: 35,
  includeArrows: false,
};
