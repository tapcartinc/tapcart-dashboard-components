import React, { useContext, useState } from "react";
import PropTypes, { node } from "prop-types";
import { OptionBoxesContext } from "../index";
import { StyledOption } from "./styles";

const OptionBox = ({ id, children, onClick, style, value, className }) => {
  const { selectedOptions, length } = useContext(OptionBoxesContext);

  return (
    <StyledOption
      selectedOption={selectedOptions.includes(value)}
      onClick={() => onClick(value)}
      optionCount={length}
      style={style}
      className={className}
      first={id === 1}
      last={id === length}
    >
      {children}
    </StyledOption>
  );
};
export { OptionBox };

OptionBox.propTypes = {
  /**
   * Order of option (starting index should be 1)
   */
  id: PropTypes.number.isRequired,
  /**
   * Value of current option that is used for parent component functionality
   */
  value: PropTypes.string.isRequired,
  /**
   * Click handler that gets called that either selects or deselects the current option
   */
  onClick: PropTypes.func,
  /**
   * Option className for current option specifically; className will not be applied to other option boxes
   */
  className: PropTypes.string,
  /**
   * Option styles for current option specifically; styles will not be applied to other option boxes
   */
  style: PropTypes.object,

  children: PropTypes.node,
};

OptionBox.defaultProps = {};
