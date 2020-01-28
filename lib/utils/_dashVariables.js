import media from "./_media";
import styled from "styled-components";
import { colors } from "./_variables";

export const sofiaPro = {
  black: `font-family: "SofiaPro-Black";
	src: url("/fonts/SofiaPro-Black.woff2") format("woff2"), url("/fonts/SofiaPro-Black.woff") format("woff");
	font-weight: 900;
	font-style: normal;
  font-display: swap;`,
  regular: `font-family: "SofiaPro";
	src: url("/fonts/SofiaPro-Regular.woff2") format("woff2"), url("/fonts/SofiaPro-Regular.woff") format("woff");
	font-weight: 400;
	font-style: normal;
  font-display: swap;`,
  blackItalic: `
  font-family: "SofiaPro-BlackItalic";
	src: url("/fonts/SofiaPro-BlackItalic.woff2") format("woff2"), url("/fonts/SofiaPro-BlackItalic.woff") format("woff");
	font-weight: 900;
	font-style: italic;
  font-display: swap;
  `,
  light: `
  font-family: "SofiaPro-Light";
	src: url("/fonts/SofiaPro-Light.woff2") format("woff2"), url("/fonts/SofiaPro-Light.woff") format("woff");
	font-weight: 300;
	font-style: normal;
  font-display: swap;`,
  semiBold: `
  font-family: "SofiaPro-SemiBold";
	src: url("/fonts/SofiaPro-SemiBold.woff2") format("woff2"), url("/fonts/SofiaPro-SemiBold.woff") format("woff");
	font-weight: 600;
	font-style: normal;
	font-display: swap;
  `,
  bold: `font-family: "SofiaPro-Bold";
	src: url("/fonts/SofiaPro-Bold.woff2") format("woff2"), url("/fonts/SofiaPro-Bold.woff") format("woff");
	font-weight: bold;
	font-style: normal;
  font-display: swap;`,
  medium: `
  font-family: "SofiaPro-Medium";
	src: url("/fonts/SofiaPro-Medium.woff2") format("woff2"), url("/fonts/SofiaPro-Medium.woff") format("woff");
	font-weight: 500;
	font-style: normal;
	font-display: swap;`
};

export const circularStd = {
  black: `font-family: "CircularStd-Black";
	src: url("/fonts/CircularStd-Black.woff") format("woff"), url("/fonts/CircularStd-Black.woff2") format("woff2");
	font-weight: 800;
	font-style: normal;
	font-display: swap;`,
  blackItalic: `font-family: "CircularStd-BlackItalic";
	src: url("/fonts/CircularStd-BlackItalic.woff") format("woff"),
		url("/fonts/CircularStd-BlackItalic.woff2") format("woff2");
	font-weight: 800;
	font-style: italic;
	font-display: swap;`,
  bold: `font-family: "CircularStd-Bold";
	src: url("/fonts/CircularStd-Bold.woff") format("woff"), url("/fonts/CircularStd-Bold.woff2") format("woff2");
	font-weight: bold;
	font-style: normal;
	font-display: swap;`,
  medium: `font-family: "CircularStd-Medium";
	src: url("/fonts/CircularStd-Medium.woff") format("woff"), url("/fonts/CircularStd-Medium.woff2") format("woff2");
	font-weight: 500;
	font-style: normal;
	font-display: swap;`,
  book: `font-family: "CircularStd-Book";
	src: url("/fonts/CircularStd-Book.woff") format("woff"), url("/fonts/CircularStd-Book.woff2") format("woff2");
	font-weight: 400;
	font-style: normal;
	font-display: swap;`,
  mediumItalic: `font-family: "CircularStd-MediumItalic";
	src: url("/fonts/CircularStd-MediumItalic.woff") format("woff2"),
		url("/fonts/CircularStd-MediumItalic.woff") format("woff2");
	font-weight: 500;
	font-style: italic;
	font-display: swap;`
};

export const colorPicker = {
  gray50: "#d8d8d8",
  gray25: "#efefef",
  blue: "#373AAF",
  grayBlue: "#BAC4E0",
  lightBlue: "#E3EFFD",
  offWhite: "#FCFEFF",
  modalBg: "#FBFBFB",
  black: "#000000",
  gray: "#A1A8B9",
  warmGray: "#D8D8D8",
  lightGray: "#F0F2F5",
  green100: "#1BDFBA",
  green50: "#E0FBF6",
  androidGreen: "#A3C73B",
  red: "#DF4F4E",
  yellow: "#F6B343"
};

export const DashHeader = styled.h1`
  font-family: CircularStd-Book, -apple-system, BlinkMacSystemFont, Helvetica,
    Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  font-size: 25px;
  line-height: 31px;
  margin-bottom: 5px;
  z-index: 3;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  -webkit-font-smoothing: antialiased;
  color: ${props => (props.color ? props.color : colors.blue)};

  ${props => (props.style ? props.style : null)}
`;

export const DashSubheader = styled.p`
  font-family: CircularStd-Book, -apple-system, BlinkMacSystemFont, Helvetica,
    Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: 0.25px;
  z-index: 3;
  -webkit-font-smoothing: antialiased;
  color: ${props => (props.color ? props.color : colors.grayText)};

  ${props => (props.style ? props.style : null)}
`;
