import React from "react";
import styled from "styled-components";
import { getColors } from "../utils/_functions";
import { colors, sofia } from "../utils/_variables";
import { sofiaPro } from "../utils/_dashVariables";
import PropTypes, { node } from "prop-types";
import { hover, transition } from "../utils/_animations";

const options = [
  "primary",
  "primary--reversed",
  "secondary",
  "transparent--blue",
  "transparent--green",
  "transparent--red",
  "transparent--white",
  "save",
  "save--reversed",
  "delete",
  "delete--reversed",
  "inverted",
  "inverted--reversed",
  "secondary--green",
  "submit"
];

const StyledButtonWrapper = styled.button.attrs(props => {
  let kind = options.includes(props.kind) ? props.kind : "primary";
  return {
    kind: kind
  };
})`
  border-radius: 3px;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  font-family: SofiaPro-Medium, -apple-system, BlinkMacSystemFont, Helvetica,
    Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.5;
  letter-spacing: 1px;
  padding-top: 12px;
  padding-bottom: 12px;
  z-index: 3;

  padding-right: ${props =>
    props.kind.includes("transparent") ? "0px" : "20px"};
  padding-left: ${props =>
    props.kind.includes("transparent") ? "0px" : "20px"};
  outline: none;
  border: none;
  ${transition}
  &:hover {
    ${hover};
    cursor: pointer;
  }
  ${props => getColors(props.kind)}

  ${props =>
    props.stacked &&
    `flex-direction: column; align-items: center; text-transform: none;`}

  a {
    font-size: 14px;
    font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
      sans-serif;
    font-weight: 500;
    font-style: normal;
    ${sofiaPro.medium};
    font-family: SofiaPro-Medium, -apple-system, BlinkMacSystemFont, Helvetica,
      Arial, sans-serif;
    font-weight: 500;
    ${props => getColors(props.kind)}
    text-decoration: none;
    box-shadow: none;
  }

  img {
    margin-right: 4px;
    margin-left: 4px;
  }
  position: relative;
  display: flex;
  justify-content: center;

  ${props =>
    props.isDisabled &&
    `background: ${colors.darkgray}; color: ${colors.gray}; border: none; box-shadow: none;
    &:hover{
      cursor: default;
      transform: translateY(0px)
    }
    `}
  ${props => props.thin && `padding: 8px 16px`};
  ${props => (props.mobileHide ? `display: none` : `display: flex`)};
  ${props => (props.style ? props.style : null)}
`;

const Button = ({ label, ...props }) => {
  return (
    <StyledButtonWrapper {...props}>
      {props.isLoading && !props.isDisabled ? (
        <>
          <Loader {...props} />
          <div style={{ color: "transparent" }}>{props.children}</div>
        </>
      ) : (
        props.children
      )}
    </StyledButtonWrapper>
  );
};

export { Button };

const Loader = styled.span`
  text-indent: -9999em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => {
    return props.kind
      ? getColors(props.kind).background === "transparent"
        ? "#D8D8D8"
        : "rgba(255, 255, 255, 0.2)"
      : "white";
  }};

  position: absolute;
  -webkit-animation: load3 1s infinite linear;
  animation: load3 1s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: ${props => {
      return props.kind ? getColors(props.kind).color : "white";
    }};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  &:after {
    width: 78%;
    height: 78%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: ${props => {
      return props.kind
        ? getColors(props.kind).background === "transparent"
          ? "white"
          : getColors(props.kind).background
        : "white";
    }};
  }

  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

Button.propTypes = {
  /**
   * options: "primary",
  "primary--reversed",
  "secondary",
  "transparent--blue",
  "transparent--green",
  "transparent--red",
  "transparent--white",
  "save",
  "save--reversed",
  "delete",
  "delete--reversed",
  "inverted",
  "inverted--reversed",
  "secondary--green",
  "submit"
   */
  kind: PropTypes.string,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  /**
   * Reduces vertical padding of button
   */
  thin: PropTypes.bool,
  children: node.isRequired
};

Button.defaultProps = {
  kind: "primary",
  isLoading: false,
  isDisabled: false
};
