import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Icon } from "../elements/Icon";
import { inputBorder, sofia, colors, boxShadow } from "../utils/_variables";
import PropTypes, { node } from "prop-types";
import { Body } from "../elements/Typography";
import { colorPicker } from "../utils/_dashVariables";

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
            style={{ transform: "rotate(90deg)", zIndex: 100, marginLeft: 14 }}
            fill="darkgray"
          />
        </DropdownHeader>
        {open && (
          <div style={{ position: "relative" }}>
            <ClickableDropdown {...props} position={position}>
              {options.map((option, index) => {
                return (
                  <ClickableDropdownItem
                    onClick={option.onClick}
                    key={option.title}
                    lastItem={index === options.length - 1}
                  >
                    {option.icon && <Icon iconLeft type={option.icon} />}
                    <Body style={{ marginLeft: 8 }}>{option.title}</Body>
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
  z-index: 100;

  ${props =>
    props.position === "right" &&
    `
  position: absolute;
  right: 10px`};
  ${props =>
    props.position === "left" &&
    `
  position: absolute;
  left: 10px`};
  z-index: 100;

  ${props => (props.style ? props.style : null)};
`;

const ClickableDropdown = styled.ul`
  margin: 0px;
  border-radius: 3px;
  list-style: none;
  box-shadow: ${boxShadow.medium};
  ${sofia.sofiaRegular};
  position: absolute;
  padding: 0px;
  z-index: 1;
  background: white;
  width: 218px;
  ${props => props.position === "right" && `right: 0;`}
  ${props => props.position === "left" && `left: 0;`}
  ${props => (props.style ? props.style : null)};
`;
const ClickableDropdownItem = styled.li`
  font-size: 15px;
  background: white;
  border-bottom: 1px solid ${colorPicker.lightGray};
  ${props => props.lastItem && `border-bottom: none;`}
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  padding: 10px 17px;

  &:hover {
    cursor: pointer;
    background: ${colors.gray10};
  }

  ${props => (props.style ? props.style : null)};
`;
const DropdownHeader = styled.div`
  width: 37px;
  height: 100%;
  background: white;
  z-index: 100;
  &:hover {
    cursor: pointer;
  }
  ${props => (props.style ? props.style : null)};
`;

ClickDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      icon: PropTypes.string
    })
  ).isRequired,
  /**
   * options: "right" | "left"
   */
  position: PropTypes.string.isRequired
};
ClickDropdown.defaultProps = {};
