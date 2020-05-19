import React from "react";
import styled from "styled-components";
import { circularStd, sofiaPro } from "../../utils/_dashVariables";
import { swatches } from "../../utils/_swatches";
import PropTypes, { node } from "prop-types";

//////////
// HEADERS
//////////

const H1 = styled.h1.attrs((props) => ({
  className: props.className,
}))`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "46px")};
  color: ${(props) =>
    props.theme && props.theme.header && !props.color
      ? props.theme.header
      : props.color
      ? props.color
      : swatches.blue};
  -webkit-font-smoothing: antialiased;
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}px` : "54px"};
  letter-spacing: normal;
  ${(props) => props.align === "center" && `text-align: center`};
  ${(props) => props.align === "left" && `text-align: left`};
  ${(props) => (props.style ? props.style : null)}
  font-family: CircularStd-Bold, -apple-system, BlinkMacSystemFont, Helvetica,
  Arial, sans-serif;
`;

const H2 = styled.h2.attrs((props) => ({
  className: props.className,
}))`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "40px")};
  color: ${(props) =>
    props.theme && props.theme.header && !props.color
      ? props.theme.header
      : props.color
      ? props.color
      : swatches.blue};
  -webkit-font-smoothing: antialiased;
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}px` : "48px"};
  letter-spacing: normal;
  ${(props) => props.align === "center" && `text-align: center`};
  ${(props) => props.align === "left" && `text-align: left`};
  ${(props) => (props.style ? props.style : null)}
  font-family: CircularStd-Bold, -apple-system, BlinkMacSystemFont, Helvetica,
  Arial, sans-serif;
`;

//////////
// BODY FONTS
//////////

const P1 = styled.p.attrs((props) => ({
  className: props.className,
}))`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "22px")};
  color: ${(props) =>
    props.theme && props.theme.subtext && !props.color
      ? props.theme.subtext
      : props.color
      ? props.color
      : swatches.black};
  -webkit-font-smoothing: antialiased;
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}px` : "30px"};
  letter-spacing: normal;
  ${(props) => props.align === "center" && `text-align: center`};
  ${(props) => props.align === "left" && `text-align: left`};
  ${(props) => (props.style ? props.style : null)}
  font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif;
`;

const P2 = styled.p.attrs((props) => ({
  className: props.className,
}))`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "18px")};
  color: ${(props) =>
    props.theme && props.theme.body && !props.color
      ? props.theme.body
      : props.color
      ? props.color
      : swatches.black};
  -webkit-font-smoothing: antialiased;
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}px` : "26px"};
  letter-spacing: normal;
  ${(props) => props.align === "center" && `text-align: center`};
  ${(props) => props.align === "left" && `text-align: left`};
  ${(props) => (props.style ? props.style : null)}
  font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
  sans-serif;
`;

const P3 = styled.p.attrs((props) => ({
  className: props.className,
}))`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "15px")};
  color: ${(props) =>
    props.theme && props.theme.body && !props.color
      ? props.theme.body
      : props.color
      ? props.color
      : swatches.gray};
  -webkit-font-smoothing: antialiased;
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}px` : "23px"};
  letter-spacing: normal;
  ${(props) => props.align === "center" && `text-align: center`};
  ${(props) => props.align === "left" && `text-align: left`};
  ${(props) => (props.style ? props.style : null)}
  font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif;
`;

export { H1, H2, P1, P2, P3 };
