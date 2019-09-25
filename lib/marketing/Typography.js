import styled from "styled-components";
import { colors, sofia } from "../utils/_variables";
import { getColors } from "../utils/_functions";
import media from "../utils/_media";

const Header = styled.h1`
  font-family: CircularStd-Bold;
  font-size: 48px;
  line-height: 58px;
  margin-bottom: 15px;
  margin-top: 20px;

  color: ${props => {
    if (props.color) {
      return getColors(props.color);
    } else {
      return props.theme.header;
    }
  }};

  ${media.mdlg`
  font-size: 38px;
  line-height: 48px;
`};
  ${media.sm`
  font-size: 38px;
  line-height: 48px;
`};

  ${props => (props.style ? props.style : null)}
`;

const Subheader = styled.p`
  font-size: 26px;
  line-height: 36px;
  margin-bottom: 30px;
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

const FooterLink = styled.span`
  ${sofia.sofiaMedium};
  font-size: 18px;
  line-height: 2;
  color: ${colors.black};
  ${props => (props.style ? props.style : null)}
`;

export { Header, Subheader, FooterLink };
