import styled from "styled-components";
import { colors, sofia } from "../utils/_variables";
import { getColors } from "../utils/_functions";

const MarketingHeading = styled.h1`
  font-family: "CircularStd-Bold";
  font-size: 48px;
  line-height: 1.15;
  margin-bottom: 20px;
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

const MarketingSubHeading = styled.p`
  font-size: 26px;
  line-height: 1.15;
  margin-bottom: 20px;
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

const MarketingNavLink = styled.span`
  ${sofia.sofiaMedium};
  font-size: 20px;
  letter-spacing: 0.8px;
  color: #ffffff;
  ${props => (props.style ? props.style : null)}
`;

const MarketingFooterLink = styled.span`
  ${sofia.sofiaMedium};
  font-size: 18px;
  line-height: 2;
  color: ${colors.black};
  ${props => (props.style ? props.style : null)}
`;

export {
  MarketingHeading,
  MarketingSubHeading,
  MarketingNavLink,
  MarketingFooterLink
};
