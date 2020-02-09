import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { sofia, colors } from "../utils/_variables";
import PropTypes, { node } from "prop-types";

const HoverDropdown = ({ options, title }, ...props) => {
  const hoverNode = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mouseover", handleHover);

    return () => {
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  const handleHover = e => {
    if (hoverNode.current && hoverNode.current.contains(e.target)) {
      return;
    }
  };

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      ref={hoverNode}
      onMouseLeave={() => setOpen(false)}
      style={{ width: 150, position: "relative" }}
    >
      <DropdownHeader {...props}>{title}</DropdownHeader>

      <ClickableDropdown {...props} open={open}>
        {options.map(option => {
          return (
            <ClickableDropdownItem onClick={option.onClick} key={option.title}>
              <DDCircle {...props} />
              {option.title}
            </ClickableDropdownItem>
          );
        })}
      </ClickableDropdown>
    </div>
  );
};

export { HoverDropdown };

const ClickableDropdown = styled.ul`
  margin: 0px;
  list-style: none;
  background: white;
  width: 150px;
  ${sofia.sofiaMedium};
  padding: 0px;
  color: ${colors.blue};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
  position: absolute;
  z-index: 1;
  visibility: hidden;
  margin-top: -20px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  ${props => props.open && `visibility: visible; opacity: 1; margin-top: 0px;`}
  ${props => (props.style ? props.style : null)};
`;
const ClickableDropdownItem = styled.li`
  padding: 10px;
  font-size: 18px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 150px;

  ${props => (props.style ? props.style : null)};
`;
const DropdownHeader = styled.div`
  padding: 10px;
  width: 100px;
  ${sofia.sofiaMedium};
  font-size: 20px;
  color: ${colors.blue};
  &:hover {
    cursor: pointer;
  }
  text-transform: uppercase;

  ${props => (props.style ? props.style : null)};
`;

const DDCircle = styled.div`
  background: transparent;
  box-shadow: inset 0px 0px 0px 1px ${colors.blue};
  height: 10px;
  width: 10px;
  border-radius: 50px;
  margin-right: 15px;
  ${ClickableDropdownItem}:hover & {
    background: ${colors.blue};
    box-shadow: none;
  }

  ${props => (props.style ? props.style : null)};
`;

HoverDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};
HoverDropdown.defaultProps = {};
