import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import {
  StyledDropDownSection,
  StyledClickableDropdown,
  StyledDropdownHeader,
} from "./styles";
import PropTypes, { node } from "prop-types";
import { Icon } from "../../elements/Icon";

const PopoutContainerContext = React.createContext({
  parent: "PopoutContainer",
});

const PopoutContainer = (props) => {
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
    <StyledDropDownSection
      {...props}
      disabled={props.disabled}
      onMouseEnter={() => setOpen(true)}
      ref={hoverNode}
      onMouseLeave={() => setOpen(false)}
    >
      <StyledDropdownHeader {...props} open={open} disabled={props.disabled}>
        {props.children[0]}
      </StyledDropdownHeader>

      <StyledClickableDropdown
        direction={props.direction}
        open={open}
        disabled={props.disabled}
      >
        <PopoutContainerContext.Provider
          value={{
            open: open,
            disabled: props.disabled,
          }}
        >
          {props.children[1]}
        </PopoutContainerContext.Provider>
      </StyledClickableDropdown>
    </StyledDropDownSection>
  );
};

export { PopoutContainer, PopoutContainerContext };

PopoutContainer.propTypes = {
  /**
   * Must be "right" or "left"; determines which way the container pops out behind the current item
   * */
  direction: PropTypes.string.isRequired,
  /**
   * If set to true, disables the popout on the container
   * */
  disabled: PropTypes.bool,
};
PopoutContainer.defaultProps = {
  disabled: false,
};

// width
// height
// children
