import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { colorPicker, sofiaPro } from "../utils/_dashVariables";
import PropTypes, { node } from "prop-types";

const HoverDropdown = ({ options, title, children }, ...props) => {
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
    >
      <DropdownHeader {...props}>{children}</DropdownHeader>

      <ClickableDropdownWrapper {...props} open={open}>
        <ClickableDropdown {...props} open={open}>
          {options.map((option, index) => {
            return (
              <ClickableDropdownItem
                active={option.active}
                onClick={option.onClick}
                key={option.title}
                lastOption={index === options.length - 1}
                firstOption={index === 0}
              >
                {/* <DDCircle {...props} /> */}
                {option.title}
                {/* <Divider /> */}
              </ClickableDropdownItem>
            );
          })}
        </ClickableDropdown>
      </ClickableDropdownWrapper>
    </div>
  );
};

export { HoverDropdown };

const ClickableDropdownWrapper = styled.div`
  margin: 0px;
  list-style: none;
  width: 150px;
  padding: 0px;
  position: absolute;
  z-index: 1;
  visibility: hidden;
  margin-top: -20px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  ${props => props.width && `width: ${props.width}`};
  ${props => props.open && `visibility: visible; opacity: 1; margin-top: 0px;`}
  ${sofiaPro.medium}
  ${props => (props.style ? props.style : null)};
`;

const ClickableDropdown = styled.ul`
  margin: 0px;
  list-style: none;
  width: 100%;
  padding: 0px;
  background: white;
  margin-top: 8px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
  ${sofiaPro.medium}
  ${props => (props.style ? props.style : null)};
`;

const ClickableDropdownItem = styled.li`
  font-size: 13px;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%
  max-width: 150px;
  padding: 15px 17px;
  &:hover {
    cursor: pointer;
  }

  ${props => props.firstOption && `margin-top: 10px`};
  ${props =>
    props.active ? `color: ${colorPicker.blue}` : `color: ${colorPicker.gray}`};
  ${props =>
    props.lastOption
      ? `border-bottom: 1px solid transparent`
      : `border-bottom: 1px solid ${colorPicker.gray25}`};
  ${props => (props.style ? props.style : null)};
`;

const DropdownHeader = styled.div`
  // padding-bottom: 10px;
  // width: 100px;
  // ${sofia.sofiaMedium};
  // font-size: 20px;
  // color: ${colorPicker.blue};
  &:hover {
    cursor: pointer;
  }
  // text-transform: uppercase;

  ${props => (props.style ? props.style : null)};
`;

// const DDCircle = styled.div`
//   background: transparent;
//   box-shadow: inset 0px 0px 0px 1px ${colorPicker.blue};
//   height: 10px;
//   width: 10px;
//   border-radius: 50px;
//   margin-right: 15px;
//   ${ClickableDropdownItem}:hover & {
//     background: ${colors.blue};
//     box-shadow: none;
//   }

//   ${props => (props.style ? props.style : null)};
// `;

HoverDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string
};
HoverDropdown.defaultProps = {};
