"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _sizes = require("./_sizes");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t", "\n\t", "\n\t", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fonts = "\n@font-face {\n  font-family: 'CircularStd';\n  src: url('/fonts/CircularStd-Black.woff') format('woff'), url('/fonts/CircularStd-Black.woff2') format('woff2');\n  font-weight: 800;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: 'CircularStd';\n  src: url('/fonts/CircularStd-BlackItalic.woff') format('woff'), url('/fonts/CircularStd-BlackItalic.woff2') format('woff2');\n  font-weight: 800;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: 'CircularStd-Bold';\n  src: url('/fonts/CircularStd-Bold.woff') format('woff'), url('/fonts/CircularStd-Bold.woff2') format('woff2');\n  font-weight: bold;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: 'CircularStd';\n  src: url('/fonts/CircularStd-BoldItalic.woff') format('woff'), url('/fonts/CircularStd-BoldItalic.woff2') format('woff2');\n  font-weight: 600;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: 'CircularStd-Medium';\n  src: url('/fonts/CircularStd-Medium.woff') format('woff'), url('/fonts/CircularStd-Medium.woff2') format('woff2');\n  font-weight: 500;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: 'CircularStd';\n  src: url('/fonts/CircularStd-MediumItalic.woff') format('woff2'), url('/fonts/CircularStd-MediumItalic.woff') format('woff2');\n  font-weight: 500;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: 'CircularStd-Book';\n  src: url('/fonts/CircularStd-Book.woff') format('woff'), url('/fonts/CircularStd-Book.woff2') format('woff2');\n  font-weight: 400;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: 'CircularStd';\n  src: url('/fonts/CircularStd-BookItalic.woff') format('woff'), url('/fonts/CircularStd-BookItalic.woff2') format('woff2');\n  font-weight: 400;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-Black.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-Black.woff\") format(\"woff\");\n  font-weight: 900;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-Regular.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-BlackItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-BlackItalic.woff\") format(\"woff\");\n  font-weight: 900;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-Light.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-Light.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-SemiBold.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-SemiBold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-LightItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-LightItalic.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-Bold.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-Bold.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-ExtraLightItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-ExtraLightItalic.woff\") format(\"woff\");\n  font-weight: 200;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-RegularItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-RegularItalic.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-ExtraLight.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-ExtraLight.woff\") format(\"woff\");\n  font-weight: 200;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-UltraLight.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-UltraLight.woff\") format(\"woff\");\n  font-weight: 100;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-SemiBoldItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-SemiBoldItalic.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-UltraLightItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-UltraLightItalic.woff\") format(\"woff\");\n  font-weight: 100;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-Medium.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-MediumItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-MediumItalic.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"Sofia Pro\";\n  src: url(\"/fonts/SofiaPro-BoldItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SofiaPro-BoldItalic.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Text\";\n  src: url(\"/fonts/SFProText-Regular.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProText-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Text\";\n  src: url(\"/fonts/SFProText-RegularItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProText-RegularItalic.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-Ultralight.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-Ultralight.woff\") format(\"woff\");\n  font-weight: 200;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Text\";\n  src: url(\"/fonts/SFProText-Light.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProText-Light.woff\") format(\"woff\");\n  font-weight: 200;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-Light.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-Light.woff\") format(\"woff\");\n  font-weight: 200;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-Black.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-Black.woff\") format(\"woff\");\n  font-weight: 900;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-RegularItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-RegularItalic.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-Heavy.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-Heavy.woff\") format(\"woff\");\n  font-weight: 900;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-ThinItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-ThinItalic.woff\") format(\"woff\");\n  font-weight: 100;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Text\";\n  src: url(\"/fonts/SFProText-Medium.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProText-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-UltralightItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-UltralightItalic.woff\") format(\"woff\");\n  font-weight: 200;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-LightItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-LightItalic.woff\") format(\"woff\");\n  font-weight: 200;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-Semibold.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-Semibold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-BoldItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-BoldItalic.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Text\";\n  src: url(\"/fonts/SFProText-BoldItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProText-BoldItalic.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Text\";\n  src: url(\"/fonts/SFProText-MediumItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProText-MediumItalic.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-Regular.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-Regular.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Text\";\n  src: url(\"/fonts/SFProText-HeavyItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProText-HeavyItalic.woff\") format(\"woff\");\n  font-weight: 900;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-Thin.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-Thin.woff\") format(\"woff\");\n  font-weight: 100;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Text\";\n  src: url(\"/fonts/SFProText-Bold.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProText-Bold.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-HeavyItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-HeavyItalic.woff\") format(\"woff\");\n  font-weight: 900;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Text\";\n  src: url(\"/fonts/SFProText-Heavy.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProText-Heavy.woff\") format(\"woff\");\n  font-weight: 900;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-SemiboldItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-SemiboldItalic.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-MediumItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-MediumItalic.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-BlackItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-BlackItalic.woff\") format(\"woff\");\n  font-weight: 900;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Text\";\n  src: url(\"/fonts/SFProText-SemiboldItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProText-SemiboldItalic.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Text\";\n  src: url(\"/fonts/SFProText-Semibold.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProText-Semibold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Text\";\n  src: url(\"/fonts/SFProText-LightItalic.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProText-LightItalic.woff\") format(\"woff\");\n  font-weight: 200;\n  font-style: italic;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-Bold.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-Bold.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"SF Pro Display\";\n  src: url(\"/fonts/SFProDisplay-Medium.woff2\") format(\"woff2\"),\n    url(\"/fonts/SFProDisplay-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n\n@font-face {\n  font-family: \"ITCAvantGardeStd-XLt\";\n  src: url(\"/fonts/ITCAvantGardeStd-XLt.woff2\") format(\"woff2\");\n  font-weight: 500;\n  font-style: normal;\n  font-display: fallback; /* <- this can be added to each @font-face definition */\n}\n";
var reset = "\n  html, body, div, span, applet, object, iframe,\n\th1, h2, h3, h4, h5, h6, p, blockquote, pre,\n\ta, abbr, acronym, address, big, cite, code,\n\tdel, dfn, em, img, ins, kbd, q, s, samp,\n\tsmall, strike, strong, sub, sup, tt, var,\n\tb, u, i, center,\n\tdl, dt, dd, ol, ul, li,\n\tfieldset, form, label, legend,\n\ttable, caption, tbody, tfoot, thead, tr, th, td,\n\tarticle, aside, canvas, details, embed,\n\tfigure, figcaption, footer, header, hgroup,\n\tmenu, nav, output, ruby, section, summary,\n\ttime, mark, audio, video {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tborder: 0;\n\t\tfont-size: 100%;\n\t\tfont: inherit;\n\t\tvertical-align: baseline;\n\t}\n\tarticle, aside, details, figcaption, figure,\n\tfooter, header, hgroup, menu, nav, section {\n\t\tdisplay: block;\n\t}\n\tbody {\n    line-height: 1;\n\t}\n\tol, ul {\n\t\tlist-style: none;\n\t}\n\tblockquote, q {\n\t\tquotes: none;\n\t}\n\tblockquote:before, blockquote:after,\n\tq:before, q:after {\n\t\tcontent: '';\n\t\tcontent: none;\n\t}\n\ttable {\n\t\tborder-collapse: collapse;\n\t\tborder-spacing: 0;\n  }\n  *, *::before, *::after{\n    box-sizing: border-box;\n  }\n";
var modal = "\n\t@keyframes fadeInUp {\n\t\tfrom {\n\t\t\topacity: 0;\n\t\t\t-webkit-transform: translate3d(0, 100%, 0);\n\t\t\ttransform: translate3d(0, 100%, 0);\n\t\t}\n\n\t\tto {\n\t\t\topacity: 1;\n\t\t\t-webkit-transform: translate3d(0, 0, 0);\n\t\t\ttransform: translate3d(0, 0, 0);\n\t\t}\n\t}\n\n\t.ReactModal__Body--open-full {\n\t\twidth: 100%;\n\t\theight: 100%;\n    overflow: hidden;\n    background: red;\n\n\t\t.ReactModal__Overlay--after-open {\n\t\t\toverflow-y: hidden;\n\t\t}\n\n\t\t.ReactModal {\n\t\t\t&__Overlay {\n\t\t\t\tposition: fixed;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\n\t\t\t\tanimation-duration: .5s;\n\t\t\t\tanimation-fill-mode: both;\n\t\t\t\tanimation-name: fadeInUp;\n\t\t\t}\n\t\t\t&__Content {\n        border: 1px solid red;\n\t\t\t\twidth: auto;\n        height: 100%;\n        max-width: 600px;\n      }\n\t\t}\n\t}\n";
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), reset, fonts, modal);
var _default = GlobalStyle;
exports["default"] = _default;