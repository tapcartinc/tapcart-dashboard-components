import styled from "styled-components";
import { colors, sofia } from "../utils/_variables";
import { getColors } from "../utils/_functions";

const Header = styled.h1`
  font-family: "CircularStd-Bold";
  font-size: 48px;
  line-height: 58px;
  margin-bottom: 15px;
  margin-top: 20px;
  text-align: ${props => (props.layout ? props.layout.text : "left")};
  color: ${props => {
    if (props.color) {
      return getColors(props.color);
    } else {
      return props.theme.header;
    }
  }};
  ${props => (props.style ? props.style : null)}
`;

const Subheader = styled.p`
  font-size: 26px;
  line-height: 36px;
  margin-bottom: 30px;
  text-align: ${props => (props.layout ? props.layout.text : "left")};
  ${sofia.sofiaRegular};
  color: ${props => {
    if (props.color) {
      return getColors(props.color);
    } else {
      return props.theme.subtext;
    }
  }};
  ${props => (props.style ? props.style : null)}
`;

const Body = styled.p`
  color: ${props => {
    if (props.color) {
      return getColors(props.color);
    } else {
      return props.theme.header;
    }
  }};
  font-size: 18px;
  ${sofia.sofiaRegular};
  letter-spacing: 0.2px;
  line-height: 28px;
  ${props => (props.style ? props.style : null)}
`;

const FooterLink = styled.span`
  ${sofia.sofiaMedium};
  font-size: 18px;
  line-height: 2;
  color: ${colors.black};
  ${props => (props.style ? props.style : null)}
`;

export { Header, Subheader, Body, FooterLink };
