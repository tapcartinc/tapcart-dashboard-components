import { createGlobalStyle } from "styled-components";

import sofiaProRegularWoff from "../../fonts/SofiaPro-Regular.woff";
import sofiaProRegularWoff2 from "../../fonts/SofiaPro-Regular.woff2";

import sofiaProBlackWoff from "../../fonts/SofiaPro-Black.woff";
import sofiaProBlackWoff2 from "../../fonts/SofiaPro-Black.woff2";

import sofiaProLightWoff from "../../fonts/SofiaPro-Light.woff";
import sofiaProLightWoff2 from "../../fonts/SofiaPro-Light.woff2";

import sofiaProSemiBold from "../../fonts/SofiaPro-SemiBold.woff";
import sofiaProSemiBold2 from "../../fonts/SofiaPro-SemiBold.woff2";

import sofiaProLightItalicWoff from "../../fonts/SofiaPro-LightItalic.woff";
import sofiaProLightItalicWoff2 from "../../fonts/SofiaPro-LightItalic.woff2";

import sofiaProBoldWoff from "../../fonts/SofiaPro-Bold.woff";
import sofiaProBoldWoff2 from "../../fonts/SofiaPro-Bold.woff2";

import sofiaProItalicWoff from "../../fonts/SofiaPro-RegularItalic.woff";
import sofiaProItalicWoff2 from "../../fonts/SofiaPro-RegularItalic.woff2";

import sofiaProMediumWoff from "../../fonts/SofiaPro-Medium.woff";
import sofiaProMediumWoff2 from "../../fonts/SofiaPro-Medium.woff2";

import circularBoldWoff from "../../fonts/CircularStd-Bold.woff";
import circularBoldWoff2 from "../../fonts/CircularStd-Bold.woff2";

import circularMediumWoff from "../../fonts/CircularStd-Medium.woff";
import circularMediumWoff2 from "../../fonts/CircularStd-Medium.woff2";

import circularBookWoff from "../../fonts/CircularStd-Book.woff";
import circularBookWoff2 from "../../fonts/CircularStd-Book.woff2";

import circularBookItalicWoff from "../../fonts/CircularStd-BookItalic.woff";
import circularBookItalicWoff2 from "../../fonts/CircularStd-BookItalic.woff2";

import { css } from "styled-components";

const fonts = css`

  @font-face {
    font-family: "CircularStd-Bold";
    src: url("${circularBoldWoff}") format("woff"),
      url("${circularBoldWoff2}") format("woff2");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }


  @font-face {
    font-family: "CircularStd-Medium";
    src: url("${circularMediumWoff}") format("woff"),
      url("${circularMediumWoff2}") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }


  @font-face {
    font-family: "CircularStd-Book";
    src: url("${circularBookWoff}") format("woff"),
      url("${circularBookWoff2}") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "CircularStd-BookItalic";
    src: url("${circularBookItalicWoff}") format("woff"),
      url("${circularBookItalicWoff2}") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "SofiaPro-Black";
    src: url("${sofiaProBlackWoff2}") format("woff2"),
      url("${sofiaProBlackWoff}") format("woff");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "SofiaPro";
    src: url("${sofiaProRegularWoff2}") format("woff2"),
      url("${sofiaProRegularWoff}") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }


  @font-face {
    font-family: "SofiaPro-Light";
    src: url("${sofiaProLightWoff2}") format("woff2"),
      url("${sofiaProLightWoff}") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "SofiaPro-SemiBold";
    src: url("${sofiaProSemiBold2}") format("woff2"),
      url("${sofiaProSemiBold}") format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "SofiaPro-LightItalic";
    src: url("${sofiaProLightItalicWoff2}") format("woff2"),
      url("${sofiaProLightItalicWoff}") format("woff");
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "SofiaPro-Bold";
    src: url("${sofiaProBoldWoff2}") format("woff2"),
      url("${sofiaProBoldWoff}") format("woff");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }


  @font-face {
    font-family: "SofiaPro-Italic";
    src: url("${sofiaProItalicWoff2}") format("woff2"),
      url("${sofiaProItalicWoff}") format("woff");
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }


  @font-face {
    font-family: "SofiaPro-Medium";
    src: url("${sofiaProMediumWoff2}") format("woff2"),
      url("${sofiaProMediumWoff}") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "ITCAvantGardeStd-XLt";
    src: url("/fonts/ITCAvantGardeStd-XLt.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: fallback; /* <- this can be added to each @font-face definition */
  }
`;

const reset = `
  html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
    vertical-align: baseline;
    text-align: left;
	}
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
    text-align: left;
    line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
  }
  *, *::before, *::after{
    box-sizing: border-box;
  }

  .sbdocs-h2 {
    margin-bottom: 40px !important;
  }

  .sbdocs-pre {
    display: inline;
  }
`;

const modal = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .ReactModal__Body--open-full {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.4);

    .ReactModal__Overlay--after-open {
      overflow-y: hidden;
    }

    .ReactModal {
      &__Overlay {
        position: fixed;
        top: 0;
        left: 0;

        animation-duration: 0.5s;
        animation-fill-mode: both;
        animation-name: fadeIn;
      }
      &__Content {
        width: auto;
        max-width: 600px;
        padding: 20px;
        box-sizing: border-box;
        outline: transparent;
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
	${reset}
	${fonts}
	${modal}
`;

export default GlobalStyle;
