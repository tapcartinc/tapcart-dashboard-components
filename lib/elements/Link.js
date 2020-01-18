import React from "react";
import styled from "styled-components";
import { sofia, colors } from "../utils/_variables";
import { colorPicker, sofiaPro } from "../utils/_dashVariables";
import PropTypes, { node } from "prop-types";
import { hover, transition } from "../utils/_animations";

const options = ["blue", "green", "red", "black", "gray"];

const getColor = color => {
  switch (color) {
    case "blue":
      return colors.blue;
    case "green":
      return colorPicker.green100;
    case "red":
      return colors.red;
    case "black":
      return "#000000";
    case "gray":
      return colors.grayText;
    default:
      break;
  }
};

const StyledLinkWrapper = styled.button`
  ${sofiaPro.regular};
  line-height: 1.5;
  letter-spacing: 0.5px;
  z-index: 3;
  outline: none;
  border: none;
  ${transition}
  &:hover {
    ${hover};
    cursor: pointer;
  }
  ${sofia.sofiaRegular};
  font-family: "SofiaPro-Medium";
  src: url("/fonts/SofiaPro-Medium.woff2") format("woff2"),
    url("/fonts/SofiaPro-Medium.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  font-size: 14px;
  text-decoration: ${props => props.underline && `underline`};
  text-transform: ${props => props.caps && `uppercase`};
  color: ${props => (props.color ? getColor(props.color) : colors.blue)};
  ${props => (props.style ? props.style : null)}
`;

const Link = ({ label, ...props }) => {
  return <StyledLinkWrapper {...props}>{props.children}</StyledLinkWrapper>;
};

export { Link };

Link.propTypes = {
  color: PropTypes.string
};

Link.defaultProps = {
  type: "blue"
};
