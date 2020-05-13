import styled from "styled-components";
import { sofiaPro } from "../../utils/_dashVariables";
import { swatches } from "../../utils/_swatches";
import { transition, btnHover } from "../../utils/_animations";

const getColor = (color) => {
  switch (color) {
    case "blue":
      return swatches.blue;
    case "green":
      return swatches.green;
    case "red":
      return swatches.red;
    case "white":
      return "#FFFFFF";
    case "gray":
      return swatches.gray;
    default:
      break;
  }
};

const StyledButtonWrapper = styled.button.attrs((props) => ({
  className: props.className,
}))`
  text-transform: uppercase;
  outline: none;
  line-height: 1.5;
  letter-spacing: 1px;
  font-size: 14px;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  position: relative;
  ${transition}
  &:hover {
    ${btnHover};
    cursor: pointer;
  }

  padding: ${(props) => (props.theme ? `12px 20px` : `8px 16px`)};
  ${(props) => props.thin && `padding-top: 8px; padding-bottom: 8px`};

  background: ${(props) =>
    props.color
      ? getColor(props.color)
      : props.theme
      ? props.theme.fg
      : swatches.blue};
  ${(props) => props.invert && `background: transparent`};

  color: ${(props) =>
    props.color === "white" && !props.plainText && !props.invert
      ? swatches.blue
      : !props.invert && !props.plainText
      ? "#FFFFFF"
      : props.color
      ? getColor(props.color)
      : swatches.blue};

  border-color: ${(props) =>
    !props.invert
      ? "transparent"
      : props.color
      ? getColor(props.color)
      : "transparent"};
  border-width: ${(props) => (props.plainText ? "0px" : "1px")};
  border-style: solid;
  border-radius: 3px;

  ${(props) =>
    props.plainText &&
    `color: ${(props) =>
      props.color}; background: transparent;padding-left: 0px; padding-right: 0px`};

  ${(props) => props.style && props.style}

  ${sofiaPro.medium}

  a {
    font-size: 14px;
    color: ${(props) =>
      !props.invert && !props.plainText
        ? "#FFFFFF"
        : props.color
        ? getColor(props.color)
        : swatches.blue};
    text-decoration: none;
    box-shadow: none;
    ${sofiaPro.medium}
    ${(props) => props.plainText && `color: ${(props) => props.color}`};
    ${(props) => props.isDisabled && `color: ${swatches.gray}`};
  }

  ${(props) =>
    props.isDisabled &&
    `background: ${swatches.gray};
    color: ${swatches.disabledState};
    border: 1px solid transparent;
    box-shadow: none;
    &:hover {
      cursor: default;
      transform: translateY(0px);
    }`}

  ${(props) =>
    props.isDisabled &&
    props.plainText &&
    `color: ${swatches.gray}; background: transparent`};
`;

export { StyledButtonWrapper };
