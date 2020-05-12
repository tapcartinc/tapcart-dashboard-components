import styled from "styled-components";
import { boxShadow } from "../../utils/_variables";
import { colorPicker, circularStd } from "../../utils/_dashVariables";

const StyledDropdownWrapper = styled.div`
  display: inline-block;
  width: auto;
  height: auto;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const StyledChild = styled.div`
  position: relative;
  z-index: 5;
  ${(props) =>
    props.open && props.hoverBorder
      ? `box-shadow:  0 0 0  2px ${colorPicker.blue}; border-radius: 3px;`
      : `box-shadow: 0 0 0 2px transparent; border-radius: 3px;`}
`;

const StyledClickableDropdown = styled.ul`
  margin: 0px;
  list-style: none;
  background: white;
  width: 200px;
  ${circularStd.book};
  padding: 0px;
  color: ${colorPicker.black};
  box-shadow: ${boxShadow.medium};
  position: absolute;
  letter-spacing: 0.25px;
  z-index: 1;

  ${(props) => (props.open ? `margin-top: 0px;` : `margin-top: -10px;`)}
  ${(props) => (props.open ? `opacity: 1;` : `opacity: 0;`)}
  ${(props) => (props.open ? `visibility: visible;` : `visibility: hidden;`)}
  transition: all 0.1s ease-in-out;

  ${(props) => (props.style ? props.style : null)};
`;
const StyledClickableDropdownItem = styled.li`
  padding: 10px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.1s ease-in-out;
  ${circularStd.book};
  color: ${colorPicker.black};
  padding: 18px 14px;

  &:hover {
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    color: ${colorPicker.blue};
  }

  ${(props) =>
    !props.lastOption && `border-bottom: 1px solid ${colorPicker.lightGray}`};
  ${(props) => (props.style ? props.style : null)};
`;

export {
  StyledDropdownWrapper,
  StyledChild,
  StyledClickableDropdown,
  StyledClickableDropdownItem,
};
