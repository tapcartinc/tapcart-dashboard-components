import React, { useEffect, useState, useRef } from "react";
import PropTypes, { node } from "prop-types";
import { colorPicker } from "../../utils/_dashVariables";
import { Icon } from "../../elements/Icon";
import {
  StyledDropdownWrapper,
  StyledChild,
  StyledClickableDropdown,
  StyledClickableDropdownItem,
} from "./styles";

const DropdownContainer = ({
  options,
  icon,
  children,
  hoverBorder,
  ...props
}) => {
  const hoverNode = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mouseover", handleHover);

    return () => {
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  const handleHover = (e) => {
    if (hoverNode.current && hoverNode.current.contains(e.target)) {
      return;
    }
  };

  return (
    <StyledDropdownWrapper
      onMouseEnter={() => setOpen(true)}
      ref={hoverNode}
      onMouseLeave={() => setOpen(false)}
    >
      <StyledChild {...props} open={open} hoverBorder={hoverBorder}>
        {children}
      </StyledChild>

      <StyledClickableDropdown {...props} open={open}>
        {options.map((option, idx) => {
          return (
            <StyledClickableDropdownItem
              onClick={option.onClick}
              key={option.label}
              lastOption={idx === options.length - 1}
            >
              {option.icon && (
                <Icon iconLeft type={option.icon} fill={colorPicker.blue} />
              )}
              {option.label}
            </StyledClickableDropdownItem>
          );
        })}
      </StyledClickableDropdown>
    </StyledDropdownWrapper>
  );
};

export { DropdownContainer };

DropdownContainer.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Text for the clickable option
       */
      label: PropTypes.string,
      /**
       * Function returned once option is clicked
       */
      onClick: PropTypes.func,
    })
  ),
  icon: PropTypes.string,
};
DropdownContainer.defaultProps = {};
