import styled from "styled-components";
import { boxShadow } from "../../utils/_variables";
import { sofiaPro, colorPicker } from "../../utils/_dashVariables";

const StyledDropDownSection = styled.div`
  ${(props) => props.disabled && `display: none;`};
  position: relative;
  display: inline-block;
  overflow: visible;
  width: auto;
  ${(props) => (props.style ? props.style : null)}
`;

const StyledClickableDropdown = styled.div`
  margin: 0px;
  list-style: none;
  width: 200px;
  ${sofiaPro.medium}
  padding: 0px;
  color: ${colorPicker.blue};
  position: absolute;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  top: ${(props) => (props.top ? props.top : "0")};

  ${(props) =>
    props.direction === "right" &&
    `
  right: 0;
  `}
  ${(props) =>
    props.direction === "left" &&
    `
  left: 0;
  `}
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.direction === "right" &&
    props.open &&
    `
  visibility: visible; opacity: 1; right: -200px;
  `}
  ${(props) =>
    props.direction === "left" &&
    props.open &&
    `
  visibility: visible; opacity: 1; left: -200px;
  `}
  ${(props) => (props.style ? props.style : null)};
  ${(props) => props.disabled && `display: none`};

  ul {
    background: white;
    width: 195px;
    border-radius: 3px;
    overflow: hidden;
    ${(props) => props.direction === "right" && `margin-left: 5px`};
    ${(props) => props.direction === "left" && `margin-right: 5px`};
    box-shadow: ${boxShadow.medium};
  }
`;

const StyledDropdownHeader = styled.div`
  position: relative;
  z-index: 5;
  &:hover {
    cursor: pointer;
    ${(props) => props.disabled && `cursor: default`};
  }
  ${(props) => (props.style ? props.style : null)};
`;

export { StyledDropDownSection, StyledClickableDropdown, StyledDropdownHeader };
