import styled from "styled-components";
import { colors, sofia } from "../utils/_variables";
import { getColors } from "../utils/_functions";
import media from "../utils/_media";
import { sofiaPro } from "../utils/_dashVariables";

const Header = styled.h1`
  font-family: CircularStd-Bold, -apple-system, BlinkMacSystemFont, Helvetica,
    Arial, sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 15px;
  margin-top: 20px;
  z-index: 3;
  -webkit-font-smoothing: antialiased;

  color: ${props => {
    if (props.color) {
      return getColors(props.color);
    } else {
      return props.theme ? props.theme.header : colors.black;
    }
  }};

  ${media.xs`
  font-size: 35px;
  line-height: 45px;

  `}

  ${props => (props.style ? props.style : null)}
`;

const Subheader = styled.p`
  -webkit-font-smoothing: antialiased;
  z-index: 3;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 30px;
  font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif;
  font-weight: 400;
  color: ${props => {
    if (props.color) {
      return getColors(props.color);
    } else {
      return props.theme ? props.theme.subtext : colors.black;
    }
  }};

  ${media.sm`
  font-size: 18px;
  line-height: 28px;
`};

  ${props => (props.style ? props.style : null)}
`;

const FooterLink = styled.span`
  font-smooth: antialiased;
  ${sofia.sofiaMedium};
  font-size: 18px;
  line-height: 28px;
  color: ${colors.black};
  ${props => (props.style ? props.style : null)}
`;

export { Header, Subheader, FooterLink };
