import React from "react";
import PropTypes, { node } from "prop-types";
import { StyledOptionBoxesWrapper } from "./styles";

const OptionBoxesContext = React.createContext({ parent: "OptionBoxes" });

const OptionBoxes = (props) => {
  const { selectedOptions, children } = props;
  const length = children.length;
  return (
    <StyledOptionBoxesWrapper {...props}>
      <OptionBoxesContext.Provider
        value={{
          selectedOptions,
          length,
        }}
      >
        {children}
      </OptionBoxesContext.Provider>
    </StyledOptionBoxesWrapper>
  );
};
export { OptionBoxes, OptionBoxesContext };

OptionBoxes.propTypes = {
  /**
   * Array of current options that are "selected"
   */
  selectedOptions: PropTypes.array,

  children: PropTypes.node,
};

OptionBoxes.defaultProps = {};
