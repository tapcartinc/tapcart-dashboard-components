import styled from "styled-components";
import { colors } from "../utils/_variables";
import { circularStd, sofiaPro } from "../utils/_dashVariables";
import { swatches } from "../utils/_swatches";
import PropTypes, { node } from "prop-types";

//////////
// HEADERS
//////////

const Header = styled.h1.attrs({
  className: "h1",
})`
  font-size: 25px;
  color: ${(props) =>
    props.theme && !props.color
      ? props.theme.header
      : props.color
      ? props.color
      : swatches.blue};
  font-weight: 500;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  line-height: 29px;
  letter-spacing: normal;
  text-transform: capitalize;
  ${(props) => props.align === "center" && `text-align: center`};
  ${(props) => props.align === "left" && `text-align: left`};
  ${(props) => (props.style ? props.style : null)}
`;

const Description = styled.p.attrs({
  className: "p",
})`
  -webkit-font-smoothing: antialiased;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  line-height: 18px;
  letter-spacing: normal;
  color: ${(props) => props.color};
  ${(props) => props.align === "center" && `text-align: center`};
  ${(props) => props.align === "left" && `text-align: left`};
  ${sofiaPro.regular}
  ${(props) => (props.style ? props.style : null)}
`;

const Body = styled.p.attrs({
  className: "p",
})`
  ${circularStd.book}
  margin-top: 8px;
  margin-bottom: 8px;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${(props) => props.color};
  ${(props) => props.align === "center" && `text-align: center`};
  ${(props) => props.align === "left" && `text-align: left`};
  ${(props) => (props.style ? props.style : null)}
`;

const Label = styled.p`
  color: ${swatches.black};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  line-height: 20px;
  margin-bottom: 3px;
  ${circularStd.book}
  -webkit-font-smoothing: antialiased;
  letter-spacing: normal;
  color: ${(props) => (props.errors ? colors.red : `#000000`)};
  ${(props) => (props.style ? props.style : null)}
`;

const Sofia = styled.p`
  -webkit-font-smoothing: antialiased;
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "normal"};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "5px"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "5px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "13px")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "normal")};
  text-transform: ${(props) => props.textTransform};
  color: ${(props) => (props.color ? props.color : swatches.gray)};
  ${(props) =>
    props.light
      ? sofiaPro.light
      : props.regular
      ? sofiaPro.regular
      : props.medium
      ? sofiaPro.medium
      : props.bold
      ? sofiaPro.bold
      : sofiaPro.medium};
  ${(props) => props.align === "center" && `text-align: center`};
  ${(props) => props.align === "left" && `text-align: left`};
  ${(props) => (props.style ? props.style : null)}
`;

const Circular = styled.p`
  -webkit-font-smoothing: antialiased;
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "normal"};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "5px"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "5px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "13px")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "normal")};
  text-transform: ${(props) => props.textTransform};
  color: ${(props) => (props.color ? props.color : swatches.gray)};
  ${(props) =>
    props.book
      ? circularStd.book
      : props.medium
      ? circularStd.medium
      : props.bold
      ? circularStd.bold
      : circularStd.book};
  ${(props) => props.align === "center" && `text-align: center`};
  ${(props) => props.align === "left" && `text-align: left`};
  ${(props) => (props.style ? props.style : null)}
`;

const placeholder = {
  fontSize: "18px",
  color: "#DBE1EF",
  fontFamily:
    "SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
  fontWeight: 500,
  fontStyle: "normal",
};

const input = {
  color: colors.black,
  fontSize: "15px",
  fontFamily:
    "CircularStd-Book, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
  fontWeight: "normal",
  fontStyle: "normal",
};

export {
  Header,
  Description,
  Body,
  placeholder,
  input,
  Label,
  Sofia,
  Circular,
};
