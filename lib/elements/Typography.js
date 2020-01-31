import styled from "styled-components";
import { colors, sofia } from "../utils/_variables";
import { circularStd, colorPicker } from "../utils/_dashVariables";
import { getColors } from "../utils/_functions";
import PropTypes, { node } from "prop-types";

//////////
// HEADERS
//////////

const Header = styled.h1.attrs({
  className: "h1"
})`
  font-size: 25px;
  color: ${props => (props.color ? props.color : colorPicker.blue)};
  font-weight: 500;
  font-style: normal;
  ${circularStd.medium}
  -webkit-font-smoothing: antialiased;
  line-height: 29px;
  letter-spacing: normal;
  text-transform: capitalize;
  ${props => props.align === "center" && `text-align: center`};
  ${props => props.align === "left" && `text-align: left`};
  ${props => (props.style ? props.style : null)}
`;

const Description = styled.p.attrs({
  className: "p"
})`
  ${circularStd.book}
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 18px;
  letter-spacing: normal;
  color: ${props => (props.color ? props.color : colorPicker.gray)};
  ${props => props.align === "center" && `text-align: center`};
  ${props => props.align === "left" && `text-align: left`};
  ${props => (props.style ? props.style : null)}
`;

const Body = styled.p.attrs({
  className: "p"
})`
  ${circularStd.book}
  margin-top: 8px;
  margin-bottom: 8px;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: normal;
  color: ${props => (props.color ? props.color : colorPicker.black)};
  ${props => props.align === "center" && `text-align: center`};
  ${props => props.align === "left" && `text-align: left`};
  ${props => (props.style ? props.style : null)}
`;

const placeholder = {
  fontSize: "18px",
  color: "#DBE1EF",
  fontFamily:
    "SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
  fontWeight: 500,
  fontStyle: "normal"
};

const input = {
  color: colors.black,
  fontSize: "15px",
  fontFamily:
    "CircularStd-Book, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
  fontWeight: "normal",
  fontStyle: "normal"
};

export { Header, Description, Body, placeholder, input };
