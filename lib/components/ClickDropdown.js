import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Icon } from "../elements/Icon";
import { inputBorder, sofia, colors } from "../utils/_variables";
import PropTypes, { node } from "prop-types";

const ClickDropdown = ({ options, position, style }, ...props) => {
  const node = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current && node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <DDWrapper ref={node} position={position} style={style}>
      <div style={{ position: "relative" }}>
        <DropdownHeader {...props} onClick={() => setOpen(!open)}>
          <Icon
            type="dot-dot-dot"
            style={{ transform: "rotate(90deg)" }}
            fill="darkgray"
          />
        </DropdownHeader>
        {open && (
          <div style={{ position: "relative" }}>
            <ClickableDropdown {...props}>
              {options.map(option => {
                return (
                  <ClickableDropdownItem
                    onClick={option.onClick}
                    key={option.title}
                  >
                    {option.title}
                  </ClickableDropdownItem>
                );
              })}
            </ClickableDropdown>
          </div>
        )}
      </div>
    </DDWrapper>
  );
};

export { ClickDropdown };

const DDWrapper = styled.div`
  position: relative;
  ${props =>
    props.position === "right" &&
    `
  position: absolute;
  right: 30px`};
  ${props =>
    props.position === "left" &&
    `
  position: absolute;
  left: 30px`};
  z-index: 100;
  ${props => (props.style ? props.style : null)};
`;

const ClickableDropdown = styled.ul`
  ${inputBorder}
  margin: 0px;
  list-style: none;

  width: 150px;
  ${sofia.sofiaRegular};
  position: absolute;
  padding: 0px;
  z-index: 1;
  background: white;
  ${props => (props.style ? props.style : null)};
`;
const ClickableDropdownItem = styled.li`
  padding: 5px;
  font-size: 15px;
  background: white;
  &:hover {
    cursor: pointer;
    background: ${colors.gray10};
  }

  ${props => (props.style ? props.style : null)};
`;
const DropdownHeader = styled.div`
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
  ${props => (props.style ? props.style : null)};
`;

ClickDropdown.propTypes = {
  options: PropTypes.array.isRequired
};
ClickDropdown.defaultProps = {};
