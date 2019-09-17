import styled from "styled-components";
import { colors, sofia } from "../utils/_variables";
import { getColors } from "../utils/_functions";

//////////
// HEADERS
//////////

const font = styled.p`
  font-size: 15px
  font-family: "CircularStd-Medium";
`;

const H1 = styled.h1.attrs({
  className: "h1"
})`
  font-size: 25px;
  color: ${props => (props.color ? props.color : colors.blue)};
  font-family: "CircularStd-Book";
  line-height: 35px;
  ${props => (props.style ? props.style : null)}
`;

const H2 = styled.h2`
  font-size: 15px;
  color: ${colors.blue};
  text-transform: uppercase;
  font-family: "CircularStd-Medium";
  ${props => (props.style ? props.style : null)}
`;

const H3 = styled.h3.attrs({
  className: "h3"
})`
  font-size: 20px;
  color: ${colors.blue};
  font-family: "CircularStd-Book";

  ${props => (props.style ? props.style : null)}
`;

const H4 = styled.h4`
  font-size: 15px;
  color: ${props => (props.color ? props.color : colors.black)};
  text-transform: uppercase;
  font-family: "CircularStd-Medium";
  ${props => (props.style ? props.style : null)}
`;

const H5 = styled.h5`
  font-size: 15px;
  color: ${props => (props.color ? props.color : colors.black)};
  font-family: "CircularStd-Book";
  ${props => (props.style ? props.style : null)}
`;

const Subtext = styled(font)`
  color: ${props => (props.color ? props.color : colors.black)};
  font-size: 15px;
  ${sofia.sofiaRegular};
  ${props => (props.style ? props.style : null)}
`;

const Body = styled(font)`
  color: ${props => (props.color ? props.color : colors.black)};
  font-size: 15px;
  ${sofia.sofiaRegular};
  letter-spacing: 0.2px;
  line-height: 23px;
  ${props => (props.style ? props.style : null)}
`;

const placeholder = {
  fontSize: "15px",
  color: "#DBE1EF",
  fontFamily: "Sofia Pro",
  fontWeight: 500,
  fontStyle: "normal"
};

const input = {
  color: colors.black,
  fontSize: "15px",
  fontFamily: "CircularStd-Book",
  fontWeight: "normal",
  fontStyle: "normal"
};

const Generic = styled.p`
  font-size: ${props => {
    if (props.fontSize) {
      return props.fontSize;
    } else {
      return "15px";
    }
  }};
  letter-spacing: 0.3px;
  font-weight: 400;
  color: ${props => {
    if (props.color) {
      return getColors(props.color);
    } else {
      return colors.black;
    }
  }};
  font-family: CircularStd-Book;
  margin-top: 5px;
  margin-bottom: 5px;

  ${props => (props.style ? props.style : null)}
`;

const Paragraph = styled.p`
  font-size: ${props => {
    if (props.fontSize) {
      return props.fontSize;
    } else {
      return "15px";
    }
  }};
  ${sofia.sofiaRegular};
  letter-spacing: 0.3px;
  color: ${props => {
    if (props.color) {
      return getColors(props.color);
    } else {
      return colors.black;
    }
  }};
  margin-top: 5px;
  line-height: 20px;
  margin-bottom: 5px;

  ${props => (props.style ? props.style : null)};
`;

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  Subtext,
  Body,
  Generic,
  Paragraph,
  placeholder,
  input
};
