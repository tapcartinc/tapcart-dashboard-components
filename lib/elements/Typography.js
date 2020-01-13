import styled from "styled-components";
import { colors, sofia } from "../utils/_variables";
import { getColors } from "../utils/_functions";

//////////
// HEADERS
//////////

const H1 = styled.h1.attrs({
  className: "h1"
})`
  font-size: 25px;
  color: ${props => (props.color ? props.color : colors.blue)};
  font-family: CircularStd-Book, -apple-system, BlinkMacSystemFont, Helvetica,
    Arial, sans-serif;
  line-height: 35px;
  ${props => (props.style ? props.style : null)}
`;

const H2 = styled.h2`
  font-size: 15px;
  color: ${colors.blue};
  text-transform: uppercase;
  font-family: CircularStd-Medium, -apple-system, BlinkMacSystemFont, Helvetica,
    Arial, sans-serif;
  ${props => (props.style ? props.style : null)}
`;

const H3 = styled.h3.attrs({
  className: "h3"
})`
  font-size: 20px;
  color: ${colors.blue};
  font-family: CircularStd-Book, -apple-system, BlinkMacSystemFont, Helvetica,
    Arial, sans-serif;

  ${props => (props.style ? props.style : null)}
`;

const H4 = styled.h4`
  font-size: 15px;
  color: ${props => (props.color ? props.color : colors.black)};
  text-transform: uppercase;
  font-family: CircularStd-Medium, -apple-system, BlinkMacSystemFont, Helvetica,
    Arial, sans-serif;
  ${props => (props.style ? props.style : null)}
`;

const H5 = styled.h5`
  font-size: 15px;
  color: ${props => (props.color ? props.color : colors.black)};
  font-family: CircularStd-Book, -apple-system, BlinkMacSystemFont, Helvetica,
    Arial, sans-serif;
  ${props => (props.style ? props.style : null)}
`;

const placeholder = {
  fontSize: "18px",
  color: "#DBE1EF",
  fontFamily:
    "Sofia Pro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
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

const Body = styled.p`
  -webkit-font-smoothing: antialiased;
  font-size: ${props => {
    if (props.fontSize) {
      return props.fontSize;
    } else {
      return "16px";
    }
  }};
  line-height: 26px;
  color: ${props => (props.color ? props.color : "#000000")};
  ${sofia.sofiaRegular};
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 5px;
  ${props => (props.style ? props.style : null)}
`;

export { H1, H2, H3, H4, H5, Body, placeholder, input };
