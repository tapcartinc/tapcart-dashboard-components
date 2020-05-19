import styled from "styled-components";
import { swatches } from "../../utils/_swatches";
import { sofiaPro } from "../../utils/dash";
import PropTypes from "prop-types";

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

export { Sofia };

Sofia.propTypes = {
  letterSpacing: PropTypes.string,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  textTransform: PropTypes.string,
  color: PropTypes.string,
  light: PropTypes.bool,
  regular: PropTypes.bool,
  medium: PropTypes.bool,
  bold: PropTypes.bold,
};
