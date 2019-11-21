import styled from "styled-components";
import { colors, sofia } from "../utils/_variables";
import { transition, hover } from "../utils/_animations";
import { getColors } from "../utils/_functions";

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
  "secondary--green"
];

const LinkTag = styled.a.attrs(props => {
  let type = options.includes(props.type) ? props.type : "primary";
  return {
    type: type
  };
})`
  border-radius: 3px;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  font-size: 14px;
  ${sofia.sofiaMedium};
  text-transform: uppercase;
  line-height: 1.5;
  letter-spacing: 1px;
  padding-top: 12px;
  padding-bottom: 12px;
  z-index: 3;
  padding-right: ${props =>
    props.type.includes("transparent") ? "0px" : "20px"};
  padding-left: ${props =>
    props.type.includes("transparent") ? "0px" : "20px"};
  outline: none;
  border: none;
  ${transition}
  &:hover {
    ${hover};
    cursor: pointer;
  }
  ${props => getColors(props.type)}

  a {
    font-size: 14px;
    ${sofia.sofiaMedium};
    ${props => getColors(props.type)}
    text-decoration: none;
    box-shadow: none;
  }

  img {
    margin-right: 4px;
    margin-left: 4px;
  }
  text-decoration: none;
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
  ${props => (props.mobileHide ? `display: none` : `display: flex`)};
  ${props => (props.style ? props.style : null)}
`;

export { LinkTag };
