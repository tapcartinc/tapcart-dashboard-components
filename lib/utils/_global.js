import { createGlobalStyle } from 'styled-components';

const fonts = `
@font-face {
  font-family: 'CircularStd';
  src: url('/fonts/CircularStd-Black.woff') format('woff'), url('/fonts/CircularStd-Black.woff2') format('woff2');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'CircularStd';
  src: url('/fonts/CircularStd-BlackItalic.woff') format('woff'), url('/fonts/CircularStd-BlackItalic.woff2') format('woff2');
  font-weight: 800;
  font-style: italic;
}

@font-face {
  font-family: 'CircularStd';
  src: url('/fonts/CircularStd-Bold.woff') format('woff'), url('/fonts/CircularStd-Bold.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'CircularStd';
  src: url('/fonts/CircularStd-BoldItalic.woff') format('woff'), url('/fonts/CircularStd-BoldItalic.woff2') format('woff2');
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: 'CircularStd';
  src: url('/fonts/CircularStd-Medium.woff') format('woff'), url('/fonts/CircularStd-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'CircularStd';
  src: url('/fonts/CircularStd-MediumItalic.woff') format('woff2'), url('/fonts/CircularStd-MediumItalic.woff') format('woff2');
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: 'CircularStd';
  src: url('/fonts/CircularStd-Book.woff') format('woff'), url('/fonts/CircularStd-Book.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'CircularStd';
  src: url('/fonts/CircularStd-BookItalic.woff') format('woff'), url('/fonts/CircularStd-BookItalic.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-Black.woff2") format("woff2"),
    url("/fonts/SofiaPro-Black.woff") format("woff");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-Regular.woff2") format("woff2"),
    url("/fonts/SofiaPro-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-BlackItalic.woff2") format("woff2"),
    url("/fonts/SofiaPro-BlackItalic.woff") format("woff");
  font-weight: 900;
  font-style: italic;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-Light.woff2") format("woff2"),
    url("/fonts/SofiaPro-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-SemiBold.woff2") format("woff2"),
    url("/fonts/SofiaPro-SemiBold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-LightItalic.woff2") format("woff2"),
    url("/fonts/SofiaPro-LightItalic.woff") format("woff");
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-Bold.woff2") format("woff2"),
    url("/fonts/SofiaPro-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-ExtraLightItalic.woff2") format("woff2"),
    url("/fonts/SofiaPro-ExtraLightItalic.woff") format("woff");
  font-weight: 200;
  font-style: italic;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-RegularItalic.woff2") format("woff2"),
    url("/fonts/SofiaPro-RegularItalic.woff") format("woff");
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-ExtraLight.woff2") format("woff2"),
    url("/fonts/SofiaPro-ExtraLight.woff") format("woff");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-UltraLight.woff2") format("woff2"),
    url("/fonts/SofiaPro-UltraLight.woff") format("woff");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-SemiBoldItalic.woff2") format("woff2"),
    url("/fonts/SofiaPro-SemiBoldItalic.woff") format("woff");
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-UltraLightItalic.woff2") format("woff2"),
    url("/fonts/SofiaPro-UltraLightItalic.woff") format("woff");
  font-weight: 100;
  font-style: italic;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-Medium.woff2") format("woff2"),
    url("/fonts/SofiaPro-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-MediumItalic.woff2") format("woff2"),
    url("/fonts/SofiaPro-MediumItalic.woff") format("woff");
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaPro-BoldItalic.woff2") format("woff2"),
    url("/fonts/SofiaPro-BoldItalic.woff") format("woff");
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("/fonts/SFProText-Regular.woff2") format("woff2"),
    url("/fonts/SFProText-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("/fonts/SFProText-RegularItalic.woff2") format("woff2"),
    url("/fonts/SFProText-RegularItalic.woff") format("woff");
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-Ultralight.woff2") format("woff2"),
    url("/fonts/SFProDisplay-Ultralight.woff") format("woff");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("/fonts/SFProText-Light.woff2") format("woff2"),
    url("/fonts/SFProText-Light.woff") format("woff");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-Light.woff2") format("woff2"),
    url("/fonts/SFProDisplay-Light.woff") format("woff");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-Black.woff2") format("woff2"),
    url("/fonts/SFProDisplay-Black.woff") format("woff");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-RegularItalic.woff2") format("woff2"),
    url("/fonts/SFProDisplay-RegularItalic.woff") format("woff");
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-Heavy.woff2") format("woff2"),
    url("/fonts/SFProDisplay-Heavy.woff") format("woff");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-ThinItalic.woff2") format("woff2"),
    url("/fonts/SFProDisplay-ThinItalic.woff") format("woff");
  font-weight: 100;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("/fonts/SFProText-Medium.woff2") format("woff2"),
    url("/fonts/SFProText-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-UltralightItalic.woff2") format("woff2"),
    url("/fonts/SFProDisplay-UltralightItalic.woff") format("woff");
  font-weight: 200;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-LightItalic.woff2") format("woff2"),
    url("/fonts/SFProDisplay-LightItalic.woff") format("woff");
  font-weight: 200;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-Semibold.woff2") format("woff2"),
    url("/fonts/SFProDisplay-Semibold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-BoldItalic.woff2") format("woff2"),
    url("/fonts/SFProDisplay-BoldItalic.woff") format("woff");
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("/fonts/SFProText-BoldItalic.woff2") format("woff2"),
    url("/fonts/SFProText-BoldItalic.woff") format("woff");
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("/fonts/SFProText-MediumItalic.woff2") format("woff2"),
    url("/fonts/SFProText-MediumItalic.woff") format("woff");
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-Regular.woff2") format("woff2"),
    url("/fonts/SFProDisplay-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("/fonts/SFProText-HeavyItalic.woff2") format("woff2"),
    url("/fonts/SFProText-HeavyItalic.woff") format("woff");
  font-weight: 900;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-Thin.woff2") format("woff2"),
    url("/fonts/SFProDisplay-Thin.woff") format("woff");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("/fonts/SFProText-Bold.woff2") format("woff2"),
    url("/fonts/SFProText-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-HeavyItalic.woff2") format("woff2"),
    url("/fonts/SFProDisplay-HeavyItalic.woff") format("woff");
  font-weight: 900;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("/fonts/SFProText-Heavy.woff2") format("woff2"),
    url("/fonts/SFProText-Heavy.woff") format("woff");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-SemiboldItalic.woff2") format("woff2"),
    url("/fonts/SFProDisplay-SemiboldItalic.woff") format("woff");
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-MediumItalic.woff2") format("woff2"),
    url("/fonts/SFProDisplay-MediumItalic.woff") format("woff");
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-BlackItalic.woff2") format("woff2"),
    url("/fonts/SFProDisplay-BlackItalic.woff") format("woff");
  font-weight: 900;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("/fonts/SFProText-SemiboldItalic.woff2") format("woff2"),
    url("/fonts/SFProText-SemiboldItalic.woff") format("woff");
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("/fonts/SFProText-Semibold.woff2") format("woff2"),
    url("/fonts/SFProText-Semibold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("/fonts/SFProText-LightItalic.woff2") format("woff2"),
    url("/fonts/SFProText-LightItalic.woff") format("woff");
  font-weight: 200;
  font-style: italic;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-Bold.woff2") format("woff2"),
    url("/fonts/SFProDisplay-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("/fonts/SFProDisplay-Medium.woff2") format("woff2"),
    url("/fonts/SFProDisplay-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "ITCAvantGardeStd-XLt";
  src: url("/fonts/ITCAvantGardeStd-XLt.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
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
	}
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
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
`;

const GlobalStyle = createGlobalStyle`
	${reset}
	${fonts}
`;

export default GlobalStyle;
