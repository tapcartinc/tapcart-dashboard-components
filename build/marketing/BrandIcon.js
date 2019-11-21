"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// <BrandAbstractIconWrapper {...props}>
// <BrandAbstractIconSVG
//   {...props}
//   viewBox="0 0 75 54"
//   version="1.1"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   </BrandAbstractIconSVG>
//   </BrandAbstractIconWrapper>
//import './.css';
var BrandIcon = function BrandIcon(props) {
  var type = props.type,
      fill = props.fill;

  switch (type) {
    case "many-more":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 66 63",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Features",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        opacity: "0.404017857"
      }, _react["default"].createElement("g", {
        id: "5.0-Features-Page",
        transform: "translate(-1187.000000, -743.000000)"
      }, _react["default"].createElement("g", {
        id: "Table-of-contents",
        transform: "translate(100.000000, 542.000000)"
      }, _react["default"].createElement("g", {
        id: "Push-Copy-4",
        transform: "translate(1030.000000, 196.000000)"
      }, _react["default"].createElement("g", {
        id: "Engagement-push",
        transform: "translate(53.000000, 0.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "75",
        height: "75"
      }), _react["default"].createElement("circle", {
        id: "Oval-Copy-26",
        fill: "#3951EA",
        cx: "46.8436688",
        cy: "22.8709416",
        r: "11.8709416"
      }), _react["default"].createElement("path", {
        d: "M7.7,27.8871753 C27.3626325,28.0871704 43.2477776,43.9439834 43.3128247,63.5 L7.7,63.5 L7.7,27.8871753 Z",
        id: "Combined-Shape-Copy-4",
        fill: "#FFB8AD",
        transform: "translate(25.506507, 45.753873) rotate(-10.000000) translate(-25.506507, -45.753873) "
      }), _react["default"].createElement("g", {
        id: "Confetti",
        transform: "translate(60.000000, 38.000000)",
        stroke: "#1BDFBA",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, _react["default"].createElement("path", {
        d: "M3.5,0.5 L3.5,7.5",
        id: "Line"
      }), _react["default"].createElement("path", {
        d: "M7,4 L0,4",
        id: "Line"
      })), _react["default"].createElement("g", {
        id: "Confetti-Copy",
        transform: "translate(13.500000, 19.000000) rotate(82.000000) translate(-13.500000, -19.000000) translate(10.000000, 15.000000)",
        stroke: "#738EDA",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, _react["default"].createElement("path", {
        d: "M3.5,0.5 L3.5,7.5",
        id: "Line"
      }), _react["default"].createElement("path", {
        d: "M7,4 L0,4",
        id: "Line"
      })), _react["default"].createElement("circle", {
        id: "Oval",
        fill: "#F0CD4B",
        cx: "47.5",
        cy: "66.5",
        r: "1.5"
      }), _react["default"].createElement("circle", {
        id: "Oval-Copy",
        fill: "#7B7DFF",
        cx: "67",
        cy: "8",
        r: "3"
      }))))))));

    case "brand-content":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 75 72",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Features",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "5.0-Features-Page",
        transform: "translate(-933.000000, -739.000000)"
      }, _react["default"].createElement("g", {
        id: "Table-of-contents",
        transform: "translate(100.000000, 542.000000)"
      }, _react["default"].createElement("g", {
        id: "Push-Copy-3",
        transform: "translate(780.000000, 196.000000)"
      }, _react["default"].createElement("g", {
        id: "Content",
        transform: "translate(53.000000, 0.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "75",
        height: "75"
      }), _react["default"].createElement("g", {
        id: "content",
        transform: "translate(0.000000, 1.000000)"
      }, _react["default"].createElement("g", {
        id: "Why-work-with-us"
      }, _react["default"].createElement("path", {
        d: "M37.0774648,57.6760563 C49.212172,57.6760563 59.0492958,47.8389325 59.0492958,35.7042254 C59.0492958,23.5695182 49.212172,13.7323944 37.0774648,13.7323944 C24.9427576,13.7323944 15.1056338,23.5695182 15.1056338,35.7042254 C15.1056338,47.8389325 24.9427576,57.6760563 37.0774648,57.6760563 Z M37.0774648,46.6901408 C31.0101112,46.6901408 26.0915493,41.7715789 26.0915493,35.7042254 C26.0915493,29.6368718 31.0101112,24.7183099 37.0774648,24.7183099 C43.1448184,24.7183099 48.0633803,29.6368718 48.0633803,35.7042254 C48.0633803,41.7715789 43.1448184,46.6901408 37.0774648,46.6901408 Z",
        id: "Combined-Shape-Copy-17",
        fill: "#FFB8AD",
        fillRule: "nonzero"
      }), _react["default"].createElement("path", {
        d: "M37,57.7 L37.000003,46.7 C43.0751342,46.6999953 47.9999944,41.7751294 47.9999944,35.7 L58.9999925,35.7 C58.9999925,47.8502612 49.1502682,57.6999946 37.0000025,57.7 Z",
        id: "Combined-Shape",
        fill: "#FFFFFF"
      }), _react["default"].createElement("path", {
        d: "M37.0774698,57.6760563 C49.2121747,57.6760536 59.0492958,47.8389309 59.0492958,35.7042254 L74.1549393,35.7042254 C74.1549393,55.4231245 58.1696131,71.4084507 38.450714,71.4084507 C37.9908822,71.4084507 37.5330807,71.399758 37.0774648,71.382528 L37.0774685,57.6760563 Z M37.0774715,46.6901408 L37.0774745,35.7042254 L48.0633803,35.7042254 C48.0633803,41.7715767 43.144822,46.6901372 37.0774715,46.6901408 Z",
        id: "Combined-Shape",
        fill: "#36F4D0",
        style: {
          mixBlendMode: "multiply"
        }
      }), _react["default"].createElement("path", {
        d: "M9.41469125e-14,35.7042254 C9.96163969e-14,15.9853262 15.9853262,0 35.7042254,0 C36.1640572,0 36.6218587,0.00869268975 37.0774745,0.0259227064 L37.0774648,35.7042254 L9.59232693e-14,35.7042254 Z",
        id: "Combined-Shape",
        fill: "#3951EA",
        transform: "translate(18.538737, 17.852113) rotate(-360.000000) translate(-18.538737, -17.852113) "
      }))))))))));

    case "customer-accounts":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 74 74",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Features",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "5.0-Features-Page",
        transform: "translate(-683.000000, -739.000000)"
      }, _react["default"].createElement("g", {
        id: "Table-of-contents",
        transform: "translate(100.000000, 542.000000)"
      }, _react["default"].createElement("g", {
        id: "Drag-&-drop-Copy-4",
        transform: "translate(530.000000, 196.000000)"
      }, _react["default"].createElement("g", {
        id: "Customer-accounts",
        transform: "translate(53.000000, 0.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "75",
        height: "75"
      }), _react["default"].createElement("g", {
        id: "customer-accounts",
        transform: "translate(0.000000, 1.000000)"
      }, _react["default"].createElement("path", {
        d: "M0.00455723665,38.0769231 L73.8415966,38.0769231 C73.528474,57.8842934 57.1194096,73.8461538 36.9230769,73.8461538 C16.7267442,73.8461538 0.317679843,57.8842934 0.00455723665,38.0769231 Z",
        id: "Combined-Shape-Copy-2",
        fill: "#36F4D0"
      }), _react["default"].createElement("path", {
        d: "M0.0176861995,38.0769284 C0.00592405045,37.6937522 6.66133815e-16,37.3091064 6.66133815e-16,36.9230769 C6.66133815e-16,16.5310246 16.5310246,0 36.9230769,0 C57.3151292,0 73.8461538,16.5310246 73.8461538,36.9230769 C73.8461538,37.3091064 73.8402298,37.6937522 73.8284676,38.0769284 L0.0176860369,38.0769231 Z",
        id: "Combined-Shape-Copy-3",
        fill: "#FFB8AD"
      }), _react["default"].createElement("circle", {
        id: "Oval-Copy-2",
        fill: "#FFFFFF",
        cx: "36.3461538",
        cy: "37.5",
        r: "21.3461538"
      }), _react["default"].createElement("ellipse", {
        id: "Combined-Shape-Copy-18",
        fill: "#3951EA",
        transform: "translate(36.384615, 37.538462) rotate(-270.000000) translate(-36.384615, -37.538462) ",
        cx: "36.3846154",
        cy: "37.5384615",
        rx: "10.7936508",
        ry: "11"
      })))))))));

    case "abstract-design":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 73 75",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Features",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "5.0-Features-Page",
        transform: "translate(-184.000000, -576.000000)"
      }, _react["default"].createElement("g", {
        id: "Table-of-contents",
        transform: "translate(100.000000, 542.000000)"
      }, _react["default"].createElement("g", {
        id: "Drag-&-drop",
        transform: "translate(30.000000, 34.000000)"
      }, _react["default"].createElement("g", {
        id: "Design",
        transform: "translate(53.000000, 0.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "75",
        height: "75"
      }), _react["default"].createElement("g", {
        id: "design",
        transform: "translate(1.000000, 0.000000)"
      }, _react["default"].createElement("path", {
        d: "M50.8458642,66.2134099 C50.216088,62.6277866 49.2149863,59.168838 47.8833486,55.877066 C54.2841785,52.2527049 58.6038961,45.3808145 58.6038961,37.5 C58.6038961,25.84464 49.15536,16.3961039 37.5,16.3961039 C29.5975117,16.3961039 22.7095046,20.7396143 19.0931046,27.1695093 C15.8048167,25.8418891 12.3493635,24.8377027 8.76680061,24.1967232 C13.7925992,13.3599426 24.7685966,5.84415584 37.5,5.84415584 C54.98304,5.84415584 69.1558442,20.01696 69.1558442,37.5 C69.1558442,50.214719 61.6597433,61.1786299 50.8458642,66.2134099 Z",
        id: "Combined-Shape",
        fill: "#36F4D0",
        fillRule: "nonzero"
      }), _react["default"].createElement("path", {
        d: "M37.5,69.1558442 C54.98304,69.1558442 69.1558442,54.98304 69.1558442,37.5 C69.1558442,20.01696 54.98304,5.84415584 37.5,5.84415584 C20.01696,5.84415584 5.84415584,20.01696 5.84415584,37.5 C5.84415584,54.98304 20.01696,69.1558442 37.5,69.1558442 Z M37.5,58.6038961 C25.84464,58.6038961 16.3961039,49.15536 16.3961039,37.5 C16.3961039,25.84464 25.84464,16.3961039 37.5,16.3961039 C49.15536,16.3961039 58.6038961,25.84464 58.6038961,37.5 C58.6038961,49.15536 49.15536,58.6038961 37.5,58.6038961 Z",
        id: "Combined-Shape",
        fill: "#36F4D0",
        fillRule: "nonzero"
      }), _react["default"].createElement("circle", {
        id: "Oval-Copy-26",
        fill: "#3951EA",
        cx: "55.9195269",
        cy: "16.9584879",
        r: "16.9584879"
      }), _react["default"].createElement("path", {
        d: "M-4.97935027e-14,24.1245362 C28.0894749,24.4102434 50.7825394,47.0628334 50.8754638,75 L-5.68434189e-14,75 L-4.97379915e-14,24.1245362 Z",
        id: "Combined-Shape-Copy-4",
        fill: "#FFB8AD"
      }), _react["default"].createElement("path", {
        d: "M50.1421942,66.530594 C46.2699055,68.2192494 41.9943295,69.1558442 37.5,69.1558442 C20.01696,69.1558442 5.84415584,54.98304 5.84415584,37.5 C5.84415584,33.0217538 6.77405923,28.7606981 8.45130601,24.899393 C12.0203013,25.5242768 15.4623304,26.5147124 18.7367717,27.8303649 C17.2408575,30.7272118 16.3961039,34.0149545 16.3961039,37.5 C16.3961039,49.15536 25.84464,58.6038961 37.5,58.6038961 C41.0062943,58.6038961 44.3128726,57.7488099 47.222579,56.2357933 C48.5418869,59.5135194 49.5288775,62.9588079 50.1421942,66.530594 Z",
        id: "Combined-Shape",
        fill: "#FFFFFF",
        fillRule: "nonzero"
      })))))))));

    case "engagement-push":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 75 53",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Landing-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "1.0-Landing-Page",
        transform: "translate(-805.000000, -3951.000000)"
      }, _react["default"].createElement("g", {
        id: "Push",
        transform: "translate(99.000000, 3940.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-21",
        transform: "translate(706.000000, 0.000000)"
      }, _react["default"].createElement("g", {
        id: "Section-1-header"
      }, _react["default"].createElement("g", {
        id: "Header,-title,-"
      }, _react["default"].createElement("g", {
        id: "Engagement-push"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "75",
        height: "75"
      }), _react["default"].createElement("g", {
        id: "push",
        transform: "translate(0.000000, 11.000000)"
      }, _react["default"].createElement("path", {
        d: "M26.4423077,52.8846154 C41.045991,52.8846154 52.8846154,41.045991 52.8846154,26.4423077 C52.8846154,11.8386244 41.045991,0 26.4423077,0 C11.8386244,0 0,11.8386244 0,26.4423077 C0,41.045991 11.8386244,52.8846154 26.4423077,52.8846154 Z M26.4423077,45.1923077 C16.0869686,45.1923077 7.69230769,36.7976468 7.69230769,26.4423077 C7.69230769,16.0869686 16.0869686,7.69230769 26.4423077,7.69230769 C36.7976468,7.69230769 45.1923077,16.0869686 45.1923077,26.4423077 C45.1923077,36.7976468 36.7976468,45.1923077 26.4423077,45.1923077 Z",
        id: "Oval-Copy-13",
        fill: "#3EF5D6",
        fillRule: "nonzero"
      }), _react["default"].createElement("circle", {
        id: "Oval-Copy-34",
        fill: "#FFB8AD",
        transform: "translate(49.519231, 26.442308) rotate(-360.000000) translate(-49.519231, -26.442308) ",
        cx: "49.5192308",
        cy: "26.4423077",
        r: "25.4807692"
      }), _react["default"].createElement("path", {
        d: "M39.0613271,49.6849922 C36.2423568,48.4146381 33.6960291,46.6465112 31.5343432,44.4926106 C39.4152929,42.273857 45.1923077,35.0327294 45.1923077,26.4423077 C45.1923077,17.851886 39.4152929,10.6107584 31.5343432,8.39200483 C33.6960291,6.23810422 36.2423568,4.46997725 39.0613271,3.19962321 C47.2958239,7.67979507 52.8846154,16.4083853 52.8846154,26.4423077 C52.8846154,36.4762301 47.2958239,45.2048203 39.0613271,49.6849922 Z",
        id: "Combined-Shape",
        fill: "#FFFFFF",
        fillRule: "nonzero"
      }), _react["default"].createElement("circle", {
        id: "Oval-Copy-36",
        fill: "#3951EA",
        cx: "50",
        cy: "26",
        r: "11"
      })))))))))));

    case "abstract-integrations":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 62 75",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Landing-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "1.0-Landing-Page",
        transform: "translate(-107.000000, -4961.000000)"
      }, _react["default"].createElement("g", {
        id: "Integrations-Section",
        transform: "translate(101.000000, 4945.000000)"
      }, _react["default"].createElement("g", {
        id: "Section-1-header",
        transform: "translate(0.000000, 16.000000)"
      }, _react["default"].createElement("g", {
        id: "Header,-title,-"
      }, _react["default"].createElement("g", {
        id: "Integrations"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "75",
        height: "75"
      }), _react["default"].createElement("g", {
        id: "integrations",
        transform: "translate(6.000000, 0.000000)"
      }, _react["default"].createElement("g", {
        id: "Integrations"
      }, _react["default"].createElement("g", {
        id: "Group-Copy"
      }, _react["default"].createElement("path", {
        d: "M0.0611468743,43.220339 L15.2429121,43.220339 C15.0690799,44.1227565 14.9781425,45.0538461 14.9781425,46.0057328 C14.9781425,54.2549012 21.8076972,60.9421735 30.2323798,60.9421735 C38.6570624,60.9421735 45.4866171,54.2549012 45.4866171,46.0057328 C45.4866171,45.0538461 45.3956797,44.1227565 45.2218474,43.220339 L60.9558023,43.220339 C60.9963627,43.8508243 61.0169492,44.4866174 61.0169492,45.1271186 C61.0169492,61.6254554 47.3578398,75 30.5084746,75 C13.6591093,75 1.34406375e-14,61.6254554 1.34406375e-14,45.1271186 C1.34406375e-14,44.4866174 0.0205864733,43.8508243 0.0611468743,43.220339 Z",
        id: "Combined-Shape-Copy-13",
        fill: "#3951EA",
        style: {
          mixBlendMode: "multiply"
        }
      }), _react["default"].createElement("g", {
        id: "Group-11-Copy-4"
      }, _react["default"].createElement("g", {
        id: "Group-11-Copy-2"
      }, _react["default"].createElement("circle", {
        id: "Combined-Shape-Copy-17",
        fill: "#36F4D0",
        style: {
          mixBlendMode: "multiply"
        },
        cx: "30.2966102",
        cy: "12.5",
        r: "12.5"
      }), _react["default"].createElement("path", {
        d: "M1.34700316e-30,43.220339 C4.95296052e-15,26.3709737 13.6591093,12.7118644 30.5084746,12.7118644 C47.3578398,12.7118644 61.0169492,26.3709737 61.0169492,43.220339 L0,43.220339 Z",
        id: "Combined-Shape",
        fill: "#FFB8AD",
        style: {
          mixBlendMode: "multiply"
        }
      }), _react["default"].createElement("path", {
        d: "M18.1180952,15.3328865 C21.9042807,13.6481664 26.0970351,12.7118644 30.5084746,12.7118644 C34.7730014,12.7118644 38.8331663,13.5868421 42.5192382,15.1670666 C41.2986106,20.7928965 36.291469,25.0069464 30.3000834,25.0069464 C24.3677093,25.0069464 19.4002864,20.8754995 18.1180952,15.3328865 Z",
        id: "Combined-Shape",
        fill: "#FFFFFF"
      }))))))))))))));

    case "shoppable-instagram":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 75 68",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Features",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "5.0-Features-Page",
        transform: "translate(-933.000000, -579.000000)"
      }, _react["default"].createElement("g", {
        id: "Table-of-contents",
        transform: "translate(100.000000, 542.000000)"
      }, _react["default"].createElement("g", {
        id: "Push-Copy",
        transform: "translate(780.000000, 34.000000)"
      }, _react["default"].createElement("g", {
        id: "Shoppable-IG",
        transform: "translate(53.000000, 0.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "75",
        height: "75"
      }), _react["default"].createElement("g", {
        id: "shoppable-ig",
        transform: "translate(0.000000, 3.000000)"
      }, _react["default"].createElement("ellipse", {
        id: "Oval",
        fill: "#36F4D0",
        cx: "33.2549913",
        cy: "34.2316372",
        rx: "33.2549913",
        ry: "33.1168831"
      }), _react["default"].createElement("ellipse", {
        id: "Oval-Copy-7",
        fill: "#3951EA",
        transform: "translate(62.439426, 12.913775) rotate(-1.000000) translate(-62.439426, -12.913775) ",
        cx: "62.4394262",
        cy: "12.9137747",
        rx: "12.3134173",
        ry: "12.2623107"
      }), _react["default"].createElement("path", {
        d: "M33.6329715,53.609538 C44.1709692,53.609538 52.7137042,45.102281 52.7137042,34.6080477 C52.7137042,24.1138144 44.1709692,15.6065574 33.6329715,15.6065574 C23.0949738,15.6065574 14.5522388,24.1138144 14.5522388,34.6080477 C14.5522388,45.102281 23.0949738,53.609538 33.6329715,53.609538 Z",
        id: "Oval-Copy-3",
        fill: "#FFFFFF",
        fillRule: "nonzero"
      }), _react["default"].createElement("path", {
        d: "M33.5820896,46.8196721 C40.3826107,46.8196721 45.8955224,41.3296556 45.8955224,34.557377 C45.8955224,27.7850985 40.3826107,22.295082 33.5820896,22.295082 C26.7815684,22.295082 21.2686567,27.7850985 21.2686567,34.557377 C21.2686567,41.3296556 26.7815684,46.8196721 33.5820896,46.8196721 Z",
        id: "Oval-Copy-3",
        fill: "#FFB8AD",
        fillRule: "nonzero"
      })))))))));

    case "3d-shopping":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 66.9 74.1",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("title", null, "3D Shopping"), _react["default"].createElement("g", null, _react["default"].createElement("polygon", {
        points: "33.8 64.3 33.2 64.6 27.8 61.8 17.9 56.2 33.4 47.2 33.8 47.4 33.8 38 33.6 37.9 33.2 37.7 1.3 56 1.7 56.2 1.5 56.3 15.4 63.9 33.5 74.1 33.8 73.9 33.8 73.5 33.8 64.3",
        style: {
          fill: "#3ef5d6"
        }
      }), _react["default"].createElement("polygon", {
        points: "48.8 46.6 41.9 42.5 41.8 42.6 41.8 42.6 41.8 52 48.5 55.8 41.8 59.6 41.8 60.4 57.5 51.6 48.8 46.6",
        style: {
          fill: "#3ef5d6"
        }
      }), _react["default"].createElement("polygon", {
        points: "33.8 38 33.8 38 66.4 18.7 33.6 0 0 19.3 33.2 37.7 33.6 37.9 33.8 38",
        style: {
          fill: "#ffb8ad"
        }
      }), _react["default"].createElement("path", {
        d: "M67.3,56l-.5-36.8L34.2,38.5h0V74.6ZM42.2,60.1v-17h.1L59,33.1l.3,18.2-1.4.8L42.2,60.9Z",
        transform: "translate(-0.4 -0.5)",
        style: {
          fill: "#3951ea"
        }
      }))));

    case "faster-checkout":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 75 75",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("title", null, "checkout"), _react["default"].createElement("g", null, _react["default"].createElement("path", {
        d: "M0-15H75V60H0Z",
        transform: "translate(0 15)",
        style: {
          fill: "none"
        }
      }), _react["default"].createElement("g", null, _react["default"].createElement("path", {
        d: "M52.5,0A22.5,22.5,0,1,1,38,39.7,22.1,22.1,0,0,0,38,5.3,22.5,22.5,0,0,1,52.5,0Z",
        transform: "translate(0 15)",
        style: {
          fill: "#3951ea",
          fillRule: "evenodd"
        }
      }), _react["default"].createElement("ellipse", {
        cx: "23.1",
        cy: "37.5",
        rx: "23.1",
        ry: "22.5",
        style: {
          fill: "#36f4d0"
        }
      }), _react["default"].createElement("path", {
        d: "M38,5.3a22.1,22.1,0,0,1,0,34.4,22.5,22.5,0,0,1-.1-34.3Z",
        transform: "translate(0 15)",
        style: {
          fill: "#ffffff",
          fillRule: "evenodd"
        }
      }), _react["default"].createElement("circle", {
        cx: "52",
        cy: "37",
        r: "11",
        style: {
          fill: "#ffb8ad"
        }
      })))));

    case "convert-more-customers":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 73 59",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Landing-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "1.0-Landing-Page",
        transform: "translate(-296.000000, -1378.000000)"
      }, _react["default"].createElement("g", {
        id: "Section-1",
        transform: "translate(220.000000, 1158.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-4",
        transform: "translate(45.000000, 174.000000)"
      }, _react["default"].createElement("g", {
        id: "Why-1"
      }, _react["default"].createElement("g", {
        id: "Oval-+-Oval-Copy-Mask"
      }, _react["default"].createElement("g", {
        id: "Convert-more-customers",
        transform: "translate(30.000000, 38.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "75",
        height: "75"
      }), _react["default"].createElement("g", {
        id: "convert-moer-customers",
        transform: "translate(1.000000, 8.000000)"
      }, _react["default"].createElement("path", {
        d: "M72.4349518,59 L0.0226753684,59 C0.00760048907,58.5780888 4.97072296e-13,58.1543096 4.97379915e-13,57.7287864 C4.97379915e-13,38.0711868 16.2201923,22.1355932 36.2288136,22.1355932 C56.2374348,22.1355932 72.4576271,38.0711868 72.4576271,57.7287864 C72.4576271,58.1543096 72.4500266,58.5780888 72.4349518,59 Z",
        id: "Combined-Shape",
        fill: "#3951EA",
        style: {
          mixBlendMode: "multiply"
        }
      }), _react["default"].createElement("path", {
        d: "M60,59 L14,59 C14,46.2974295 24.2974508,36 37,36 C49.7025492,36 60,46.2974295 60,58.9999881 Z",
        id: "Combined-Shape",
        fill: "#FFB8AD"
      }), _react["default"].createElement("path", {
        d: "M37,30 C45.2842712,30 52,23.2842712 52,15 C52,6.71572875 45.2842712,0 37,0 C28.7157288,0 22,6.71572875 22,15 C22,23.2842712 28.7157288,30 37,30 Z M37,21 C33.6862915,21 31,18.3137085 31,15 C31,11.6862915 33.6862915,9 37,9 C40.3137085,9 43,11.6862915 43,15 C43,18.3137085 40.3137085,21 37,21 Z",
        id: "Oval-Copy-2",
        fill: "#3EF5D6",
        fillRule: "nonzero",
        transform: "translate(37.000000, 15.000000) rotate(-270.000000) translate(-37.000000, -15.000000) "
      }), _react["default"].createElement("path", {
        d: "M24.9259321,23.9020287 C28.4825381,22.7556529 32.2819713,22.1355932 36.2288136,22.1355932 C40.6314061,22.1355932 44.8505807,22.9071198 48.7539012,24.3200611 C46.0061086,27.7807649 41.7622194,30 37,30 C32.0486965,30 27.657701,27.6010366 24.9259321,23.9020287 Z",
        id: "Combined-Shape",
        fill: "#FFFFFF"
      })))))))))));

    case "increase-order-value":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 75 59",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("defs", null, _react["default"].createElement("mask", {
        id: "a",
        x: "-8",
        y: "9",
        width: "87",
        height: "87.92",
        maskUnits: "userSpaceOnUse"
      }, _react["default"].createElement("g", {
        transform: "translate(0 10)"
      }, _react["default"].createElement("rect", {
        x: "-8",
        y: "-1",
        width: "87",
        height: "50",
        style: {
          fill: "#ffffff"
        }
      })))), _react["default"].createElement("title", null, "Increase order value"), _react["default"].createElement("g", null, _react["default"].createElement("rect", {
        width: "75",
        height: "75",
        style: {
          fill: "none"
        }
      }), _react["default"].createElement("polygon", {
        points: "61.5 10.3 46 33.7 58.4 33.8 69.9 16 61.5 10.3",
        style: {
          fill: "#ffb8ad"
        }
      }), _react["default"].createElement("g", {
        style: {
          mask: "url(#a)"
        }
      }, _react["default"].createElement("g", null, _react["default"].createElement("circle", {
        cx: "37.1",
        cy: "58.5",
        r: "15.1",
        style: {
          fill: "#3349da"
        }
      }), _react["default"].createElement("path", {
        d: "M64,75.8a37.8,37.8,0,0,0,0-53.4,37.2,37.2,0,0,0-53,0,37.8,37.8,0,0,0,0,53.4A37.2,37.2,0,0,0,64,75.8ZM20.8,66a24,24,0,0,1,0-33.8,23.5,23.5,0,0,1,33.4,0,24,24,0,0,1,0,33.8A23.5,23.5,0,0,1,20.8,66Z",
        transform: "translate(0 10)",
        style: {
          fill: "#3ef5d6"
        }
      }), _react["default"].createElement("path", {
        d: "M52.3,14.3a38.6,38.6,0,0,1,8.8,5.4L41.8,50H29.3Z",
        transform: "translate(0 10)",
        style: {
          fill: "#ffffff",
          fillRule: "evenodd"
        }
      }))))));

    case "reduce-abandoned-checkouts":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 75 75",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Landing-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "1.0-Landing-Page",
        transform: "translate(-295.000000, -1774.000000)"
      }, _react["default"].createElement("g", {
        id: "Section-1",
        transform: "translate(220.000000, 1158.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-4",
        transform: "translate(45.000000, 174.000000)"
      }, _react["default"].createElement("g", {
        id: "Why-1-Copy-2",
        transform: "translate(0.000000, 404.000000)"
      }, _react["default"].createElement("g", {
        id: "Oval-+-Oval-Copy-Mask"
      }, _react["default"].createElement("g", {
        id: "Reduce-abandonned-checkouts",
        transform: "translate(30.000000, 38.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "75",
        height: "75"
      }), _react["default"].createElement("g", {
        id: "reduce-abandoned-checkouts"
      }, _react["default"].createElement("g", {
        id: "Group-13-Copy-6"
      }, _react["default"].createElement("g", {
        id: "Group-3",
        transform: "translate(21.975410, 21.975410)"
      }, _react["default"].createElement("circle", {
        id: "Combined-Shape-Copy-5",
        fill: "#FFC0B6",
        style: {
          mixBlendMode: "multiply"
        },
        cx: "15.0245902",
        cy: "15.0245902",
        r: "15"
      }), _react["default"].createElement("circle", {
        id: "Oval-Copy-9",
        fill: "#3951EA",
        cx: "15.2824716",
        cy: "15.3770492",
        r: "6"
      })), _react["default"].createElement("path", {
        d: "M37.5,75 C16.7893219,75 0,58.2106781 0,37.5 C0,16.7893219 16.7893219,0 37.5,0 C58.2106781,0 75,16.7893219 75,37.5 C75,58.2106781 58.2106781,75 37.5,75 Z M37.5,61.4754098 C50.7412532,61.4754098 61.4754098,50.7412532 61.4754098,37.5 C61.4754098,24.2587468 50.7412532,13.5245902 37.5,13.5245902 C24.2587468,13.5245902 13.5245902,24.2587468 13.5245902,37.5 C13.5245902,50.7412532 24.2587468,61.4754098 37.5,61.4754098 Z",
        id: "Combined-Shape-Copy-21",
        fill: "#3EF5D6"
      })), _react["default"].createElement("path", {
        d: "M36.8852459,74.9950629 L36.8852459,61.4676819 C37.0895394,61.4728236 37.2944677,61.4754098 37.5,61.4754098 C50.7412532,61.4754098 61.4754098,50.7412532 61.4754098,37.5 C61.4754098,24.2587468 50.7412532,13.5245902 37.5,13.5245902 C37.2944677,13.5245902 37.0895394,13.5271764 36.8852459,13.5323181 L36.8852459,0.00493712793 C37.0897702,0.00164988781 37.2946924,0 37.5,0 C58.2106781,0 75,16.7893219 75,37.5 C75,58.2106781 58.2106781,75 37.5,75 C37.2946924,75 37.0897702,74.9983501 36.8852459,74.9950629 Z",
        id: "Combined-Shape",
        fill: "#3951EA"
      })))))))))));

    case "product-reviews":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 75 74",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Features",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "5.0-Features-Page",
        transform: "translate(-433.000000, -739.000000)"
      }, _react["default"].createElement("g", {
        id: "Table-of-contents",
        transform: "translate(100.000000, 542.000000)"
      }, _react["default"].createElement("g", {
        id: "Push-Copy-2",
        transform: "translate(280.000000, 196.000000)"
      }, _react["default"].createElement("g", {
        id: "Reviews",
        transform: "translate(53.000000, 0.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "75",
        height: "75"
      }), _react["default"].createElement("g", {
        id: "reviews",
        transform: "translate(0.000000, 1.000000)",
        fillRule: "nonzero"
      }, _react["default"].createElement("polygon", {
        id: "Line-4",
        fill: "#36F4D0",
        points: "15.2777778 0 15.2777778 73.6111111 30.5555556 73.6111111 30.5555556 0"
      }), _react["default"].createElement("path", {
        d: "M59.7222222,23.1530363 L44.4444444,27.2467045 L44.4444444,0 L59.7222222,0 L59.7222222,23.1530363 Z M59.7222222,38.9697557 L59.7222222,73.6111111 L44.4444444,73.6111111 L44.4444444,43.0634239 L59.7222222,38.9697557 Z",
        id: "Combined-Shape",
        fill: "#FFB8AD"
      }), _react["default"].createElement("path", {
        d: "M59.7222222,38.9697557 L59.7222222,23.1530363 L70.8722162,20.1654044 L74.826396,34.9226045 L59.7222222,38.9697557 Z M44.4444444,43.0634239 L4.20062913,53.8467217 L0.246449276,39.0895216 L44.4444444,27.2467045 L44.4444444,43.0634239 Z",
        id: "Combined-Shape",
        fill: "#3951EA"
      }), _react["default"].createElement("polygon", {
        id: "Line-4",
        fill: "#36F4D0",
        points: "15.2777778 0 15.2777778 73.6111111 30.5555556 73.6111111 30.5555556 0"
      })))))))));

    case "optimized-search":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 75 54",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Features",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "5.0-Features-Page",
        transform: "translate(-183.000000, -749.000000)"
      }, _react["default"].createElement("g", {
        id: "Table-of-contents",
        transform: "translate(100.000000, 542.000000)"
      }, _react["default"].createElement("g", {
        id: "Drag-&-drop-Copy-3",
        transform: "translate(30.000000, 196.000000)"
      }, _react["default"].createElement("g", {
        id: "SEARCH",
        transform: "translate(53.000000, 0.000000)"
      }, _react["default"].createElement("g", {
        id: "search",
        transform: "translate(0.000000, 11.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-19"
      }, _react["default"].createElement("circle", {
        id: "Combined-Shape-Copy-11",
        fill: "#36F4D0",
        style: {
          mixBlendMode: "multiply"
        },
        cx: "37.1875",
        cy: "37.1875",
        r: "16.40625"
      }), _react["default"].createElement("circle", {
        id: "Oval-Copy-5",
        fill: "#3951EA",
        cx: "37",
        cy: "37",
        r: "11"
      }), _react["default"].createElement("g", {
        id: "Group-9-Copy-2",
        fill: "#FFB8AD"
      }, _react["default"].createElement("path", {
        d: "M-2.7000624e-13,1.42108547e-14 L12.2168,1.42108547e-14 C13.241272,13.6131123 24.0612813,24.324005 37.2580446,24.324005 C50.454808,24.324005 61.2748173,13.6131123 62.2992893,1.68942638e-12 L74.375,1.42108547e-14 C73.1484818,20.1464719 56.967901,36.09375 37.1875,36.09375 C17.407099,36.09375 1.22651821,20.1464719 -2.00665873e-13,4.49307258e-13 Z",
        id: "Combined-Shape-Copy-10",
        style: {
          mixBlendMode: "multiply"
        },
        transform: "translate(37.187500, 18.046875) rotate(-180.000000) translate(-37.187500, -18.046875) "
      })))))))))));

    case "optimal-mobile-experience":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 65 75",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("title", null, "Load products faster"), _react["default"].createElement("g", null, _react["default"].createElement("path", {
        d: "M28,45V26.2a16.4,16.4,0,0,0-7.5,4.4,16.9,16.9,0,0,0,24,23.8A16.9,16.9,0,0,0,38,26.5V45Z",
        transform: "translate(0 0)",
        style: {
          fill: "none"
        }
      }), _react["default"].createElement("path", {
        d: "M55.5,19.5A35.1,35.1,0,0,0,47,13.4a32.6,32.6,0,0,0-9-2.9V26.4h0a16.9,16.9,0,0,1,6.5,27.9,16.9,16.9,0,0,1-24-23.8A16.4,16.4,0,0,1,28,26.2h0V10.3a33.1,33.1,0,0,0-10,3.1,35.1,35.1,0,0,0-8.5,6.1,32.5,32.5,0,1,0,46,0Z",
        transform: "translate(0 0)",
        style: {
          fill: "#3ef5d6"
        }
      }), _react["default"].createElement("path", {
        d: "M32.5,10a34.1,34.1,0,0,1,5.5.5,32.6,32.6,0,0,1,9,2.9,14.3,14.3,0,0,0-4.2-9.3,14.9,14.9,0,0,0-20.6,0A14.3,14.3,0,0,0,18,13.4a33.1,33.1,0,0,1,10-3.1A34,34,0,0,1,32.5,10Z",
        transform: "translate(0 0)",
        style: {
          fill: "#3349da"
        }
      }), _react["default"].createElement("path", {
        d: "M28,10.3V26.2h.5a20.1,20.1,0,0,1,4.2-.5H33a17.4,17.4,0,0,1,5,.8V10.5a34.1,34.1,0,0,0-5.5-.5A34,34,0,0,0,28,10.3Z",
        transform: "translate(0 0)",
        style: {
          fill: "#ffffff"
        }
      }), _react["default"].createElement("path", {
        d: "M32.7,25.6a20.1,20.1,0,0,0-4.2.5H28V45H38V26.5h0a17.4,17.4,0,0,0-5-.8Z",
        transform: "translate(0 0)",
        style: {
          fill: "#ffb8ad"
        }
      }))));

    case "healthy-snacks":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 61.1 66.4",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("title", null, "healthy snacks"), _react["default"].createElement("g", null, _react["default"].createElement("path", {
        d: "M55.5,52.4a27,27,0,0,1-34-42l1.6-1.2L16.8,1.4,16,2A37,37,0,1,0,62.6,59.5l.7-.6L57,51Z",
        transform: "translate(-2.3 -1.4)",
        fill: "#36f4d0"
      }), _react["default"].createElement("path", {
        d: "M31.5,37.1a10.1,10.1,0,0,0,14.1,1.4l.7-.6L33.8,22.4,33,23A10,10,0,0,0,31.5,37.1Z",
        transform: "translate(-2.3 -1.4)",
        fill: "#3951ea"
      }), _react["default"].createElement("path", {
        d: "M17.5,48.4a27,27,0,0,0,38,4L57,51l-4.4-5.4-.7.7A20,20,0,1,1,26.7,15.2l.8-.6L23.1,9.2l-1.6,1.2A27,27,0,0,0,17.5,48.4Z",
        transform: "translate(-2.3 -1.4)",
        fill: "#3951ea"
      }), _react["default"].createElement("path", {
        d: "M54.8,18.2a19.2,19.2,0,0,0-13.4-7.3,19.6,19.6,0,0,0-13.9,3.7l6.3,7.8a9.6,9.6,0,0,1,5.5-1.6h1a10.1,10.1,0,0,1,6.8,3.7h0a10.1,10.1,0,0,1-.8,13.4l6.3,7.7A19.9,19.9,0,0,0,54.8,18.2Z",
        transform: "translate(-2.3 -1.4)",
        fill: "#ffb8ad"
      }))));

    case "abstract-chat":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 74 61",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Resources",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "8.0_resources_web",
        transform: "translate(-683.000000, -3660.000000)"
      }, _react["default"].createElement("g", {
        id: "Header,-title,-",
        transform: "translate(269.000000, 3653.000000)"
      }, _react["default"].createElement("g", {
        id: "Chat",
        transform: "translate(414.000000, 0.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "75",
        height: "75"
      }), _react["default"].createElement("path", {
        d: "M54,17.63 C55.6300096,19.4498339 57.0273975,21.4652972 58.16,23.63 C55.4819255,23.3497512 52.7749753,23.6603849 50.23,24.54 C49.7263609,23.8446844 49.185575,23.1770475 48.61,22.54 C44.637119,18.1470137 39.0810497,15.5132824 33.1653588,15.2188107 C27.2496679,14.9243391 21.4595088,16.9932772 17.07,20.97 C11.54,25.97 8.15,38.8 7.81,59.27 C25.98,60.88 38.38,59.45 44.81,55.6 C46.9238995,57.3277067 49.4031104,58.551924 52.06,59.18 L51.75,59.46 L51.75,59.46 C43.65,66.72 26.5966667,68.8166667 0.59,65.75 C0.263333333,39.57 4.15333333,22.83 12.26,15.53 C24.3696957,4.59385922 43.0491025,5.5336473 54,17.63 Z",
        id: "Combined-Shape",
        fill: "#FFC0B6",
        fillRule: "nonzero"
      }), _react["default"].createElement("path", {
        d: "M38.3099877,41.59 C38.3042513,46.9129862 40.6547902,51.9655466 44.73,55.39 C49.7344618,52.1871176 53.1870474,47.0527493 54.2654271,41.2097885 C55.3438068,35.3668277 53.9514553,29.3382755 50.42,24.56 C43.1641379,27.0725989 38.3010663,33.9114189 38.3099877,41.59 L38.3099877,41.59 Z",
        id: "Path",
        fill: "#3EF5D6"
      }), _react["default"].createElement("path", {
        d: "M58.48,23.67 C64.8651788,35.5478438 62.1467237,50.2665742 51.94,59.08 C61.7182015,60.8859711 71.1090289,54.4232015 72.915,44.645 C74.7209711,34.8667985 68.2582015,25.4759711 58.48,23.67 Z",
        id: "Path",
        fill: "#3EF5D6"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        fill: "#3951EA",
        fillRule: "nonzero",
        cx: "18.8",
        cy: "39.05",
        r: "3.8"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        fill: "#3951EA",
        fillRule: "nonzero",
        cx: "32.19",
        cy: "39.05",
        r: "3.8"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        fill: "#3951EA",
        fillRule: "nonzero",
        cx: "45.57",
        cy: "39.05",
        r: "3.8"
      })))))));

    case "healthcare":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 86 86",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "Style-guide",
        transform: "translate(-2692.000000, -275.000000)"
      }, _react["default"].createElement("g", {
        id: "Large-icons",
        transform: "translate(2617.920000, 103.000000)"
      }, _react["default"].createElement("g", {
        transform: "translate(74.844000, 171.318000)",
        id: "healthcare"
      }, _react["default"].createElement("g", {
        transform: "translate(0.000000, 1.050000)"
      }, _react["default"].createElement("path", {
        d: "M42.525,0 C66.010909,0 85.05,19.039091 85.05,42.525 L42.525,42.525 L42.525,0 Z",
        id: "Combined-Shape",
        fill: "#3EF5D6"
      }), _react["default"].createElement("path", {
        d: "M0,42.525 C23.485909,42.525 42.525,61.564091 42.525,85.05 L0,85.05 L0,42.525 Z",
        id: "Combined-Shape",
        fill: "#FFB8AD",
        transform: "translate(21.262500, 63.787500) rotate(-180.000000) translate(-21.262500, -63.787500) "
      }), _react["default"].createElement("circle", {
        id: "Oval",
        fill: "#FFFFFF",
        cx: "43.284375",
        cy: "43.284375",
        r: "26.578125"
      }), _react["default"].createElement("path", {
        d: "M42.525,69.8518605 L42.525,42.525 L69.8518605,42.525 C69.8589377,42.7772615 69.8625,43.0304022 69.8625,43.284375 C69.8625,57.9630681 57.9630681,69.8625 43.284375,69.8625 C43.0304022,69.8625 42.7772615,69.8589377 42.525,69.8518605 Z",
        id: "Combined-Shape",
        fill: "#3951EA"
      }), _react["default"].createElement("path", {
        d: "M42.525,42.525 C66.010909,42.525 85.05,61.564091 85.05,85.05 L42.525,85.05 L42.525,42.525 Z",
        id: "Combined-Shape-Copy-2",
        fill: "#FFB8AD",
        transform: "translate(63.787500, 63.787500) rotate(-270.000000) translate(-63.787500, -63.787500) "
      }), _react["default"].createElement("path", {
        d: "M42.525,69.8518605 L42.525,42.525 L69.8518605,42.525 C69.8589377,42.7772615 69.8625,43.0304022 69.8625,43.284375 C69.8625,57.9630681 57.9630681,69.8625 43.284375,69.8625 C43.0304022,69.8625 42.7772615,69.8589377 42.525,69.8518605 Z",
        id: "Combined-Shape",
        fill: "#3951EA"
      }), _react["default"].createElement("path", {
        d: "M16.70625,42.525 C17.1012992,28.4439318 28.4439318,17.1012992 42.525,16.70625 L42.525,42.525 L16.70625,42.525 Z",
        id: "Combined-Shape",
        fill: "#FFB8AD"
      }))))))));

    case "tahoe":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 86 73",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "Style-guide",
        transform: "translate(-2834.000000, -282.000000)"
      }, _react["default"].createElement("g", {
        id: "Large-icons",
        transform: "translate(2617.920000, 103.000000)"
      }, _react["default"].createElement("g", {
        transform: "translate(74.844000, 171.318000)",
        id: "Group-2"
      }, _react["default"].createElement("g", {
        transform: "translate(141.750000, 1.050000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "85.05",
        height: "85.05"
      }), _react["default"].createElement("g", {
        id: "tahoe",
        transform: "translate(0.000000, 6.804000)"
      }, _react["default"].createElement("path", {
        d: "M5.92081051e-10,72.576 C5.92085063e-10,48.8233375 19.039091,29.568 42.525,29.568 C66.010909,29.568 85.05,48.8233375 85.05,72.576 L5.92081939e-10,72.576 Z",
        id: "Combined-Shape-Copy-5",
        fill: "#3951EA",
        transform: "translate(42.525000, 51.072000) rotate(-180.000000) translate(-42.525000, -51.072000) "
      }), _react["default"].createElement("ellipse", {
        id: "Oval",
        fill: "#3EF5D6",
        cx: "41.85",
        cy: "28.896",
        rx: "28.35",
        ry: "28.896"
      }), _react["default"].createElement("path", {
        d: "M13.5287658,29.568 L70.1712342,29.568 C69.4975467,45.2741644 57.0754037,57.792 41.85,57.792 C26.6245963,57.792 14.2024533,45.2741644 13.5287658,29.568 Z",
        id: "Combined-Shape",
        fill: "#FFFFFF"
      }), _react["default"].createElement("path", {
        d: "M27.0137836,29.568 L56.6862164,29.568 C56.3481811,37.7923501 49.8350996,44.352 41.85,44.352 C33.8649004,44.352 27.3518189,37.7923501 27.0137836,29.568 Z",
        id: "Combined-Shape",
        fill: "#FFB8AD"
      }), _react["default"].createElement("path", {
        d: "M27.0165402,16.1284033 L56.6834598,16.1284033 C56.3143645,23.610205 49.8143759,29.5684033 41.85,29.5684033 C33.8856241,29.5684033 27.3856355,23.610205 27.0165402,16.1284033 Z",
        id: "Combined-Shape",
        fill: "#FFFFFF",
        transform: "translate(41.850000, 22.848202) rotate(-180.000000) translate(-41.850000, -22.848202) "
      })))))))));

    case "unlimited-pto":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 86 67",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "Style-guide",
        transform: "translate(-3262.000000, -284.000000)"
      }, _react["default"].createElement("g", {
        id: "Large-icons",
        transform: "translate(2617.920000, 103.000000)"
      }, _react["default"].createElement("g", {
        transform: "translate(74.844000, 171.318000)",
        id: "Unlimited-PTO"
      }, _react["default"].createElement("g", {
        transform: "translate(569.268000, 1.050000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "85.05",
        height: "85.05"
      }), _react["default"].createElement("g", {
        id: "pto",
        transform: "translate(0.000000, 9.072000)"
      }, _react["default"].createElement("ellipse", {
        id: "Oval",
        stroke: "#36F4D0",
        strokeWidth: "9.072",
        fill: "#3951EA",
        cx: "33.3164495",
        cy: "33.1320566",
        rx: "28.2388376",
        ry: "28.0825472"
      }), _react["default"].createElement("path", {
        d: "M33.3164495,66.2641132 C51.7166165,66.2641132 66.6328991,51.4303862 66.6328991,33.1320566 C66.6328991,14.833727 51.7166165,0 33.3164495,0 C14.9162825,0 0,14.833727 0,33.1320566 C0,51.4303862 14.9162825,66.2641132 33.3164495,66.2641132 Z M33.3164495,56.1650943 C20.5248578,56.1650943 10.1552239,45.8528521 10.1552239,33.1320566 C10.1552239,20.4112611 20.5248578,10.0990189 33.3164495,10.0990189 C46.1080412,10.0990189 56.4776752,20.4112611 56.4776752,33.1320566 C56.4776752,45.8528521 46.1080412,56.1650943 33.3164495,56.1650943 Z",
        id: "Oval",
        fill: "#36F4D0",
        fillRule: "nonzero"
      }), _react["default"].createElement("path", {
        d: "M60.9313433,60.5941132 C74.2517096,60.5941132 85.05,49.8555869 85.05,36.6089434 C85.05,23.3622999 74.2517096,12.6237736 60.9313433,12.6237736 C47.610977,12.6237736 36.8126866,23.3622999 36.8126866,36.6089434 C36.8126866,49.8555869 47.610977,60.5941132 60.9313433,60.5941132 Z M60.9313433,50.4950943 C53.2195523,50.4950943 46.9679104,44.2780528 46.9679104,36.6089434 C46.9679104,28.939834 53.2195523,22.7227925 60.9313433,22.7227925 C68.6431343,22.7227925 74.8947761,28.939834 74.8947761,36.6089434 C74.8947761,44.2780528 68.6431343,50.4950943 60.9313433,50.4950943 Z",
        id: "Oval-Copy-2",
        fill: "#FFB8AD",
        fillRule: "nonzero"
      }), _react["default"].createElement("path", {
        d: "M53.5558629,59.4519058 C49.882525,58.2798979 46.592877,56.2559273 43.922097,53.6138706 C46.9980249,52.0355249 49.6726702,49.7920487 51.7537243,47.0746863 C54.2078564,49.2047801 57.4180767,50.4950943 60.9313433,50.4950943 C61.1926929,50.4950943 61.4523656,50.487954 61.7101748,50.4738589 C59.5643414,53.9410529 56.7943312,56.9853527 53.5558597,59.4519048 Z M65.1638589,23.3721643 C63.8288429,22.950374 62.4068183,22.7227925 60.9313433,22.7227925 C58.6797567,22.7227925 56.5526399,23.2527616 54.6692464,24.1941064 C53.3195813,21.0092104 51.2704287,18.1893353 48.7131345,15.9247676 C51.9148305,14.0503533 55.5899779,12.8901315 59.5171328,12.6643205 C62.0143568,15.8213395 63.9470356,19.4407784 65.1638589,23.3721643 Z",
        id: "Combined-Shape",
        fill: "#FFFFFF",
        fillRule: "nonzero"
      })))))))));

    case "taco-tuesday":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 86 50",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "Style-guide",
        transform: "translate(-2981.000000, -293.000000)"
      }, _react["default"].createElement("g", {
        id: "Large-icons",
        transform: "translate(2617.920000, 103.000000)"
      }, _react["default"].createElement("g", {
        transform: "translate(74.844000, 171.318000)",
        id: "Taco-tuesday"
      }, _react["default"].createElement("g", {
        transform: "translate(288.170000, 1.050000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "1",
        y: "0",
        width: "85.05",
        height: "85.05"
      }), _react["default"].createElement("g", {
        id: "taco",
        transform: "translate(0.000000, 18.144000)"
      }, _react["default"].createElement("path", {
        d: "M1.03847729,1.16201925 L74.5182795,1.16201925 C74.5438383,1.73922189 74.5567568,2.3198228 74.5567568,2.90351925 C74.5567568,23.7426036 58.0905159,40.6360193 37.7783784,40.6360193 C17.4662409,40.6360193 1,23.7426036 1,2.90351925 C1,2.3198228 1.01291848,1.73922189 1.0384781,1.16200106 Z",
        id: "Combined-Shape",
        fill: "#FFB8AD",
        transform: "translate(37.778378, 20.898510) rotate(-180.000000) translate(-37.778378, -20.898510) "
      }), _react["default"].createElement("path", {
        d: "M1,28.1770049 C5.12851019,11.9648475 19.5141751,-1.77635684e-13 36.6266109,-1.77635684e-13 C37.3692762,-1.77376167e-13 38.1068057,0.0225356345 38.8385838,0.0669760584 C38.8976172,0.810794791 38.9277027,1.56285205 38.9277027,2.322 C38.9277027,17.7108623 26.5648959,30.186 11.3146008,30.186 C7.66813869,30.186 4.18676136,29.4727656 1,28.1770049 Z",
        id: "Combined-Shape",
        fill: "#FFFFFF"
      }), _react["default"].createElement("path", {
        d: "M51.5790702,30.186 L86.0412001,30.186 C86.047052,30.3787505 86.05,30.5722659 86.05,30.7665 C86.05,40.7051402 78.3314496,48.762 68.8101351,48.762 C59.2888207,48.762 51.5702703,40.7051402 51.5702703,30.7665 C51.5702703,30.5722659 51.5732183,30.3787505 51.5790702,30.186 Z",
        id: "Combined-Shape",
        fill: "#3951EA"
      }), _react["default"].createElement("path", {
        d: "M5.5972973,20.6258342 C10.5902944,11.4946404 19.2466045,4.71183235 29.5517061,2.322 C29.6712252,3.14083797 29.7331081,3.97836334 29.7331081,4.83033229 C29.7331081,14.3454627 22.0142574,22.059 12.4925726,22.059 C10.0409708,22.059 7.70888547,21.5476411 5.5972973,20.6258342 Z",
        id: "Combined-Shape",
        fill: "#3EF5D6"
      })))))))));

    case "equity":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 84 85",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "Style-guide",
        transform: "translate(-3114.000000, -276.000000)"
      }, _react["default"].createElement("g", {
        id: "Large-icons",
        transform: "translate(2617.920000, 103.000000)"
      }, _react["default"].createElement("g", {
        transform: "translate(74.844000, 171.318000)",
        id: "equity"
      }, _react["default"].createElement("g", {
        transform: "translate(421.281000, 0.567000)"
      }, _react["default"].createElement("g", {
        id: "Group-3",
        transform: "translate(42.000000, 43.033000) rotate(-90.000000) translate(-42.000000, -43.033000) translate(-0.500000, 1.033000)"
      }, _react["default"].createElement("g", {
        id: "Group",
        transform: "translate(0.000000, 0.362017)"
      }, _react["default"].createElement("path", {
        d: "M47.6795455,82.7963911 C47.0712351,82.8202868 46.4598795,82.8323467 45.8457032,82.8323467 C20.5258205,82.8323467 -1.13686838e-13,62.3357176 -1.0658141e-13,37.0518443 C-9.9475983e-14,36.8480617 0.00133336056,36.6445901 0.00399184507,36.4414376 L47.6795313,36.4414376 L47.6795313,82.7963917 Z",
        id: "Rectangle-Copy-10",
        fill: "#FFB8AD"
      }), _react["default"].createElement("path", {
        d: "M48.3238636,-7.38964445e-13 C68.1850975,-7.38964445e-13 84.2858087,16.1007112 84.2858087,35.961945 C84.2858087,55.8231788 68.1850975,71.9238901 48.3238636,71.9238901 C28.4626298,71.9238901 12.3619186,55.8231788 12.3619186,35.961945 C12.3619186,16.1007112 28.4626298,-7.38964445e-13 48.3238636,-7.38964445e-13 Z M48.3238636,14.0720654 C36.234417,14.0720654 26.4339841,23.8724984 26.4339841,35.961945 C26.4339841,48.0513917 36.234417,57.8518246 48.3238636,57.8518246 C60.4133103,57.8518246 70.2137432,48.0513917 70.2137432,35.961945 C70.2137432,23.8724984 60.4133103,14.0720654 48.3238636,14.0720654 Z",
        id: "Combined-Shape",
        fill: "#FFFFFF"
      }), _react["default"].createElement("path", {
        d: "M48.3238636,-7.38520356e-13 L48.3238636,14.0720654 C36.234417,14.0720654 26.4339841,23.8724984 26.4339841,35.961945 C26.4339841,36.3388493 26.4435097,36.7135288 26.4623334,37.0857558 L12.3791443,37.0857558 C12.3676884,36.7125591 12.3619186,36.3379259 12.3619186,35.961945 C12.3619186,16.1007112 28.4626298,-7.38964445e-13 48.3238636,-7.38964445e-13 Z",
        id: "Combined-Shape",
        fill: "#34EECB"
      }), _react["default"].createElement("path", {
        d: "M84.2858087,-7.28306304e-13 L84.2858087,14.0720654 C72.196362,14.0720654 62.3959291,23.8724984 62.3959291,35.961945 C62.3959291,48.0513917 72.196362,57.8518246 84.2858087,57.8518246 L84.2858087,71.9238901 C64.4245749,71.9238901 48.3238636,55.8231788 48.3238636,35.961945 C48.3238636,16.1007112 64.4245749,-7.10453286e-13 84.2858087,-7.2475359e-13 Z",
        id: "Combined-Shape",
        fill: "#3951EA",
        transform: "translate(66.304836, 35.961945) rotate(-180.000000) translate(-66.304836, -35.961945) "
      }))))))))));

    case "work-with-us":
      return _react["default"].createElement(BrandAbstractIconWrapper, props, _react["default"].createElement(BrandAbstractIconSVG, _extends({}, props, {
        viewBox: "0 0 85 82",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Style-Guide",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "Style-guide",
        transform: "translate(-2981.000000, -529.000000)"
      }, _react["default"].createElement("g", {
        id: "Large-icons",
        transform: "translate(2617.920000, 103.000000)"
      }, _react["default"].createElement("g", {
        transform: "translate(74.844000, 171.318000)",
        id: "Content"
      }, _react["default"].createElement("g", {
        transform: "translate(289.170000, 253.932000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "85.05",
        height: "85.05"
      }), _react["default"].createElement("g", {
        id: "content",
        transform: "translate(0.000000, 1.134000)"
      }, _react["default"].createElement("g", {
        id: "Why-work-with-us"
      }, _react["default"].createElement("path", {
        d: "M42.0458451,65.4046479 C55.806603,65.4046479 66.9619014,54.2493495 66.9619014,40.4885915 C66.9619014,26.7278336 55.806603,15.5725352 42.0458451,15.5725352 C28.2850871,15.5725352 17.1297887,26.7278336 17.1297887,40.4885915 C17.1297887,54.2493495 28.2850871,65.4046479 42.0458451,65.4046479 Z M42.0458451,52.9466197 C35.1654661,52.9466197 29.5878169,47.3689705 29.5878169,40.4885915 C29.5878169,33.6082126 35.1654661,28.0305634 42.0458451,28.0305634 C48.926224,28.0305634 54.5038732,33.6082126 54.5038732,40.4885915 C54.5038732,47.3689705 48.926224,52.9466197 42.0458451,52.9466197 Z",
        id: "Combined-Shape-Copy-17",
        fill: "#FFB8AD",
        fillRule: "nonzero"
      }), _react["default"].createElement("path", {
        d: "M41.958,65.4318 L41.9580034,52.9578 C48.847201,52.9577959 54.4319979,47.3729974 54.4319979,40.4838 L66.906,40.4838 C66.906,54.2621981 55.7364011,65.4317969 41.9580014,65.4318 Z",
        id: "Combined-Shape",
        fill: "#FFFFFF"
      }), _react["default"].createElement("path", {
        d: "M42.0458507,65.4046479 C55.8066061,65.4046448 66.9619014,54.2493476 66.9619014,40.4885915 L84.0917012,40.4885915 C84.0917012,62.8498232 65.9643413,80.9771831 43.6031096,80.9771831 C43.0816604,80.9771831 42.5625135,80.9673256 42.0458451,80.9477867 L42.0458493,65.4046479 Z M42.0458527,52.9466197 L42.0458561,40.4885915 L54.5038732,40.4885915 C54.5038732,47.368968 48.9262282,52.9466156 42.0458527,52.9466197 Z",
        id: "Combined-Shape",
        fill: "#36F4D0",
        style: {
          mixBlendMode: "multiply"
        }
      }), _react["default"].createElement("path", {
        d: "M9.41469125e-14,40.4885915 C1.19847387e-13,18.1273599 18.1273599,0 40.4885915,0 C41.0100408,0 41.5291877,0.00985751018 42.0458561,0.029396349 L42.0458451,40.4885915 L9.41469125e-14,40.4885915 Z",
        id: "Combined-Shape",
        fill: "#3951EA",
        transform: "translate(21.022726, 20.244296) rotate(-360.000000) translate(-21.022726, -20.244296) "
      }))))))))));

    case "home":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "23px",
        viewBox: "0 0 24 23",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "404-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "10.0-404",
        transform: "translate(-338.000000, -496.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-14",
        transform: "translate(235.000000, 483.000000)"
      }, _react["default"].createElement("g", {
        id: "Btn-book-a-demo-Copy-2"
      }, _react["default"].createElement("g", {
        id: "Group",
        transform: "translate(46.000000, 12.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-home",
        transform: "translate(57.000000, 1.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "property-location",
        transform: "translate(1.000000, 1.000000)"
      }, _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#393CB4",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        points: "3 11 3 21 12 21"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#393CB4",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        points: "19.86 7.249 11 0 0 9"
      }), _react["default"].createElement("path", {
        d: "M22,13.817 C22,16.183 18,20 18,20 C18,20 14,16.183 14,13.817 C14.0139284,12.7770004 14.4457863,11.7863584 15.1982543,11.0683158 C15.9507222,10.3502732 16.9604879,9.96524593 18,10 C19.0395121,9.96524593 20.0492778,10.3502732 20.8017457,11.0683158 C21.5542137,11.7863584 21.9860716,12.7770004 22,13.817 L22,13.817 Z",
        id: "Path",
        stroke: "#1BDFBA",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        fill: "#1BDFBA",
        fillRule: "nonzero",
        cx: "18",
        cy: "14",
        r: "1"
      })))))))));

    case "support-center":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Resources",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "8.0-Resources-(dropdown)",
        transform: "translate(-800.000000, -3993.000000)"
      }, _react["default"].createElement("g", {
        id: "Header,-title,-",
        transform: "translate(273.000000, 3653.000000)"
      }, _react["default"].createElement("g", {
        id: "Button-Glyph---Large",
        transform: "translate(323.000000, 328.000000)"
      }, _react["default"].createElement("g", {
        id: "Help-Icon",
        transform: "translate(204.000000, 12.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "support-16",
        transform: "translate(1.000000, 1.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("path", {
        d: "M1.2,9 C1.995,5.082 5.082,1.995 9,1.2",
        id: "Path",
        stroke: "#373AAF"
      }), _react["default"].createElement("path", {
        d: "M9,20.8 C5.082,20.005 1.996,16.918 1.2,13",
        id: "Path",
        stroke: "#373AAF"
      }), _react["default"].createElement("path", {
        d: "M20.8,13 C20.005,16.918 16.918,20.004 13,20.8",
        id: "Path",
        stroke: "#373AAF"
      }), _react["default"].createElement("path", {
        d: "M13,1.2 C16.918,1.995 20.004,5.082 20.8,9",
        id: "Path",
        stroke: "#373AAF"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#1BDFBA",
        points: "9 6.416 9 0 13 0 13 6.416"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#1BDFBA",
        points: "15.584 9 22 9 22 13 15.584 13"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#1BDFBA",
        points: "13 15.584 13 22 9 22 9 15.584"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#1BDFBA",
        points: "6.416 13 0 13 0 9 6.416 9"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        stroke: "#373AAF",
        cx: "11",
        cy: "11",
        r: "5"
      }))))))));

    case "pricing":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "404-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "10.0-404",
        transform: "translate(-545.000000, -495.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-14",
        transform: "translate(235.000000, 483.000000)"
      }, _react["default"].createElement("g", {
        id: "Btn-book-a-demo-Copy-3",
        transform: "translate(200.000000, 0.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-pricing",
        transform: "translate(110.000000, 12.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "cheque-3",
        transform: "translate(1.000000, 1.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("path", {
        d: "M0,19 L0,22 L12,22 L12,19.417 C12,18.036 13.119,17 14.5,17 L2,17 C0.895,17 0,17.895 0,19 Z",
        id: "Path",
        stroke: "#393CB4"
      }), _react["default"].createElement("path", {
        d: "M14.5,17 C15.794,17 17,17.924 17,19.5 C17,20.881 18.119,22 19.5,22 L19.5,22 C20.881,22 22,20.881 22,19.5 L22,0 L6,0 L6,17",
        id: "Path",
        stroke: "#393CB4"
      }), _react["default"].createElement("path", {
        d: "M11,6 L17,6",
        id: "Path",
        stroke: "#1BDFBA"
      }), _react["default"].createElement("path", {
        d: "M11,11 L17,11",
        id: "Path",
        stroke: "#1BDFBA"
      }))))))));

    case "features":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "404-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "10.0-404",
        transform: "translate(-751.000000, -496.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-14",
        transform: "translate(235.000000, 483.000000)"
      }, _react["default"].createElement("g", {
        id: "Btn-book-a-demo-Copy-4",
        transform: "translate(400.000000, 0.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-features",
        transform: "translate(116.000000, 13.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "shape-adjust",
        transform: "translate(1.000000, 1.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        stroke: "#393CB4",
        x: "6",
        y: "6",
        width: "16",
        height: "16"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        stroke: "#1BDFBA",
        cx: "8",
        cy: "8",
        r: "8"
      }))))))));

    case "team":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "20px",
        viewBox: "0 0 24 20",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "404-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "10.0-404",
        transform: "translate(-948.000000, -496.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-14",
        transform: "translate(235.000000, 483.000000)"
      }, _react["default"].createElement("g", {
        id: "Btn-book-a-demo-Copy-5",
        transform: "translate(600.000000, 0.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-team",
        transform: "translate(113.000000, 11.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "users-mm",
        transform: "translate(1.000000, 2.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("path", {
        d: "M18,19 L22,19 L22,14.677 C21.9997412,14.2681728 21.7506505,13.9006748 21.371,13.749 L17.629,12.249 C17.2500254,12.0975967 17.001075,11.7310974 17,11.323 L17,10.445 C18.2344135,9.73660134 18.9968908,8.42323424 19,7 L19,5 C19.000321,3.57077716 18.2380521,2.24997496 17.0003891,1.53522455 C15.762726,0.820474126 14.2377433,0.820388527 13,1.535",
        id: "Path",
        stroke: "#1BDFBA"
      }), _react["default"].createElement("path", {
        d: "M13.371,14.749 L9.629,13.249 C9.25002543,13.0975967 9.00107504,12.7310974 9,12.323 L9,11.445 C10.2344135,10.7366013 10.9968908,9.42323424 11,8 L11,6 C11,3.790861 9.209139,2 7,2 C4.790861,2 3,3.790861 3,6 L3,8 C3.00310922,9.42323424 3.7655865,10.7366013 5,11.445 L5,12.323 C4.99974123,12.7318272 4.75065048,13.0993252 4.371,13.251 L0.629,14.751 C0.250025427,14.9024033 0.00107503532,15.2689026 0,15.677 L0,19 L14,19 L14,15.677 C13.9997412,15.2681728 13.7506505,14.9006748 13.371,14.749 Z",
        id: "Path",
        stroke: "#373AAF"
      }))))))));

    case "book-a-demo":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "404-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "10.0-404",
        transform: "translate(-1168.000000, -495.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-14",
        transform: "translate(235.000000, 483.000000)"
      }, _react["default"].createElement("g", {
        id: "Btn-book-a-demo-Copy-6",
        transform: "translate(800.000000, 0.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-9",
        transform: "translate(15.000000, 12.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-4"
      }, _react["default"].createElement("g", {
        id: "Group-7"
      }, _react["default"].createElement("g", {
        id: "Icon-book-a-demo",
        transform: "translate(118.000000, 0.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "customer-support",
        transform: "translate(1.000000, 1.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("path", {
        d: "M9,16 L3,16 C1.3,16 0,17.3 0,19 L0,22 L12,22 L12,19 C12,17.3 10.7,16 9,16 Z",
        id: "Path",
        stroke: "#343398"
      }), _react["default"].createElement("path", {
        d: "M6,13 L6,13 C4.3,13 3,11.7 3,10 L3,9 C3,7.3 4.3,6 6,6 L6,6 C7.7,6 9,7.3 9,9 L9,10 C9,11.7 7.7,13 6,13 Z",
        id: "Path",
        stroke: "#343398"
      }), _react["default"].createElement("polygon", {
        id: "Path",
        stroke: "#1BDFBA",
        points: "12 0 12 10 16 7 22 7 22 0"
      })))))))))));

    case "engineering":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "22px",
        viewBox: "0 0 24 22",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Careers-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "3.0-Careers-Page",
        transform: "translate(-150.000000, -3675.000000)"
      }, _react["default"].createElement("g", {
        id: "Open-positions",
        transform: "translate(100.000000, 3115.000000)"
      }, _react["default"].createElement("g", {
        id: "FAQ-2",
        transform: "translate(0.000000, 519.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-engineering",
        transform: "translate(50.000000, 40.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "window-code",
        transform: "translate(1.000000, 2.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        stroke: "#393CB4",
        x: "0",
        y: "0",
        width: "22",
        height: "20"
      }), _react["default"].createElement("path", {
        d: "M0,4 L22,4",
        id: "Path",
        stroke: "#393CB4"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#1BDFBA",
        points: "4 9 6 11 4 13"
      }), _react["default"].createElement("path", {
        d: "M9,13 L13,13",
        id: "Path",
        stroke: "#1BDFBA"
      }), _react["default"].createElement("path", {
        d: "M5,0 L5,4",
        id: "Path",
        stroke: "#393CB4"
      }))))))));

    case "design":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Careers-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "3.0-Careers-Page",
        transform: "translate(-150.000000, -4034.000000)"
      }, _react["default"].createElement("g", {
        id: "Open-positions",
        transform: "translate(100.000000, 3115.000000)"
      }, _react["default"].createElement("g", {
        id: "FAQ-2-Copy",
        transform: "translate(0.000000, 879.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-design",
        transform: "translate(50.000000, 40.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "shape-adjust",
        transform: "translate(1.000000, 1.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        stroke: "#1BDFBA",
        x: "6",
        y: "6",
        width: "16",
        height: "16"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        stroke: "#393CB4",
        cx: "8",
        cy: "8",
        r: "8"
      }))))))));

    case "customer success":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Careers-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "3.0-Careers-Page",
        transform: "translate(-150.000000, -4214.000000)"
      }, _react["default"].createElement("g", {
        id: "Open-positions",
        transform: "translate(100.000000, 3115.000000)"
      }, _react["default"].createElement("g", {
        id: "FAQ-2-Copy",
        transform: "translate(0.000000, 1059.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-customer-success",
        transform: "translate(50.000000, 40.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "b-meeting",
        transform: "translate(1.000000, 1.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("polygon", {
        id: "Path",
        stroke: "#373AAF",
        points: "22 0 10 0 10 10 15 6 22 6"
      }), _react["default"].createElement("path", {
        d: "M9,20.836 C9,20.232 8.735,19.657 8.262,19.282 C7.539,18.708 6.285,18 4.5,18 C2.715,18 1.461,18.708 0.738,19.282 C0.265,19.657 0,20.232 0,20.836 L0,22 L9,22 L9,20.836 Z",
        id: "Path",
        stroke: "#373AAF"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        stroke: "#373AAF",
        cx: "4.5",
        cy: "12.5",
        r: "2.5"
      }), _react["default"].createElement("path", {
        d: "M22,20.836 C22,20.232 21.735,19.657 21.262,19.282 C20.539,18.708 19.285,18 17.5,18 C15.715,18 14.461,18.708 13.738,19.282 C13.265,19.657 13,20.232 13,20.836 L13,22 L22,22 L22,20.836 Z",
        id: "Path",
        stroke: "#1BDFBA"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        stroke: "#1BDFBA",
        cx: "17.5",
        cy: "12.5",
        r: "2.5"
      }))))))));

    case "sales":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "22px",
        viewBox: "0 0 24 22",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Careers-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "3.0-Careers-Page",
        transform: "translate(-150.000000, -4575.000000)"
      }, _react["default"].createElement("g", {
        id: "Open-positions",
        transform: "translate(100.000000, 3115.000000)"
      }, _react["default"].createElement("g", {
        id: "FAQ-2-Copy",
        transform: "translate(0.000000, 1419.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-sales",
        transform: "translate(50.000000, 40.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "handshake",
        transform: "translate(1.000000, 2.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("path", {
        d: "M13,5 L10.828,7.172 C9.26600059,8.73352775 6.73399941,8.73352775 5.172,7.172 L5,7 L9.929,2.071 C12.6906369,-0.689909032 17.1673631,-0.689909032 19.929,2.071 L19.929,2.071 C22.2202883,4.3625083 22.6615678,7.91787763 21,10.7",
        id: "Path",
        stroke: "#393CB4"
      }), _react["default"].createElement("path", {
        d: "M14.266,8.266 L17.879,11.879 C19.0501458,13.0504996 19.0501458,14.9495004 17.879,16.121 L16.243,17.757 C15.1177525,18.8824381 13.591475,19.5147187 12,19.5147187 C10.408525,19.5147187 8.88224747,18.8824381 7.757,17.757 L2.071,12.071 C-0.689909032,9.30936307 -0.689909032,4.83263693 2.071,2.071 L2.071,2.071 C3.3782398,0.760107368 5.1487698,0.016190218 7,-1.77635684e-15",
        id: "Path",
        stroke: "#1BDFBA"
      }), _react["default"].createElement("path", {
        d: "M17.391,16.609 L13.5,12.719",
        id: "Path",
        stroke: "#1BDFBA"
      }), _react["default"].createElement("path", {
        d: "M14.513,18.965 L10.883,15.335",
        id: "Path",
        stroke: "#1BDFBA"
      }))))))));

    case "operations":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Careers-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "3.0-Careers-Page",
        transform: "translate(-150.000000, -4934.000000)"
      }, _react["default"].createElement("g", {
        id: "Open-positions",
        transform: "translate(100.000000, 3115.000000)"
      }, _react["default"].createElement("g", {
        id: "FAQ-2-Copy",
        transform: "translate(0.000000, 1779.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-operations",
        transform: "translate(50.000000, 40.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "preferences-circle-rotate",
        transform: "translate(1.000000, 1.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("path", {
        d: "M3,9 L3,0",
        id: "Path",
        stroke: "#373AAF"
      }), _react["default"].createElement("path", {
        d: "M3,22 L3,19",
        id: "Path",
        stroke: "#373AAF"
      }), _react["default"].createElement("path", {
        d: "M11,1 L11,0",
        id: "Path",
        stroke: "#373AAF"
      }), _react["default"].createElement("path", {
        d: "M11,22 L11,11",
        id: "Path",
        stroke: "#373AAF"
      }), _react["default"].createElement("path", {
        d: "M19,9 L19,0",
        id: "Path",
        stroke: "#373AAF"
      }), _react["default"].createElement("path", {
        d: "M19,22 L19,19",
        id: "Path",
        stroke: "#373AAF"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        stroke: "#1BDFBA",
        cx: "3",
        cy: "16",
        r: "3"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        stroke: "#1BDFBA",
        cx: "11",
        cy: "8",
        r: "3"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        stroke: "#1BDFBA",
        cx: "19",
        cy: "16",
        r: "3"
      }))))))));

    case "quote":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "22px",
        viewBox: "0 0 24 22",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Landing-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "1.0-Landing-Page",
        transform: "translate(-102.000000, -3453.000000)"
      }, _react["default"].createElement("g", {
        id: "Checkout",
        transform: "translate(-1.000000, 2804.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-22",
        transform: "translate(100.000000, 148.000000)"
      }, _react["default"].createElement("g", {
        id: "Section-1-header"
      }, _react["default"].createElement("g", {
        id: "Quote",
        transform: "translate(0.000000, 498.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-quote",
        transform: "translate(3.000000, 1.504473)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "language",
        transform: "translate(1.000000, 3.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("path", {
        d: "M0,19 L1,19 C2.1,19 3,18.1 3,17 L3,16 L0.8,14.8 C0.1,14.4 0.1,13.4 0.8,13 L3,12 L3,10 L5.3,9.4 C6.1,9.2 6.3,8.3 5.8,7.7 L3,5 L3,0",
        id: "Path",
        stroke: "#393CB4"
      }), _react["default"].createElement("path", {
        d: "M7,14 L10,10 L10,4 C10,2.9 10.9,2 12,2 L20,2 C21.1,2 22,2.9 22,4 L22,12 C22,13.1 21.1,14 20,14 L13,14 L7,14 Z",
        id: "Path",
        stroke: "#393CB4"
      }), _react["default"].createElement("path", {
        d: "M14,6 L18,6",
        id: "Path",
        stroke: "#1BDFBA"
      }), _react["default"].createElement("path", {
        d: "M14,10 L16,10",
        id: "Path",
        stroke: "#1BDFBA"
      }))))))))));

    case "chat":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "23px",
        viewBox: "0 0 24 23",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Landing-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "1.0-Landing-Page",
        transform: "translate(-225.000000, -7375.000000)"
      }, _react["default"].createElement("g", {
        id: "Support",
        transform: "translate(0.000000, 6812.000000)"
      }, _react["default"].createElement("g", {
        id: "Group-20",
        transform: "translate(100.000000, 147.000000)"
      }, _react["default"].createElement("g", {
        id: "Button-Full---Large",
        transform: "translate(0.000000, 402.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-chat",
        transform: "translate(125.000000, 13.500000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "b-comment",
        transform: "translate(1.000000, 1.500000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("path", {
        d: "M6.799,15.601 C8.092,17.61 10.826,19 14,19 C14.59,19 15.163,18.949 15.716,18.858 L20,21 L20,16.96 C21.241,15.903 22,14.52 22,13 C22,11.448 21.208,10.039 19.919,8.973",
        id: "Path",
        stroke: "#1BDFBA"
      }), _react["default"].createElement("path", {
        d: "M10,0 C4.477,0 0,3.582 0,8 C0,9.797 0.75,11.45 2,12.785 L2,18 L6.833,15.584 C7.829,15.85 8.892,16 10,16 C15.523,16 20,12.418 20,8 C20,3.582 15.523,0 10,0 Z",
        id: "Path",
        stroke: "#343398"
      })))))))));

    case "clock":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "25px",
        height: "22px",
        viewBox: "0 0 25 22",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Pricing-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "2.0-Pricing",
        transform: "translate(-245.000000, -2535.000000)"
      }, _react["default"].createElement("g", {
        id: "Feature-all-plans",
        transform: "translate(100.000000, 2221.000000)"
      }, _react["default"].createElement("g", {
        id: "Real-time-store-sync",
        transform: "translate(0.000000, 313.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-real-time",
        transform: "translate(145.000000, 0.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "restore",
        transform: "translate(0.000000, 2.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#1BDFBA",
        points: "14.0689655 4.96551724 14.0689655 9.93103448 18.0413793 13.9034483"
      }), _react["default"].createElement("path", {
        d: "M4.13793103,9.93103448 C4.13793103,15.3931034 8.60689655,19.862069 14.0689655,19.862069 C19.5310345,19.862069 24,15.3931034 24,9.93103448 C24,4.46896552 19.5310345,0 14.0689655,0 C10.1958621,0 6.81931034,2.18482759 5.23034483,5.46206897",
        id: "Path",
        stroke: "#393CB4"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#393CB4",
        transform: "translate(4.325441, 12.379034) rotate(126.000000) translate(-4.325441, -12.379034) ",
        points: "1.46232342 9.93103448 2.2925579 14.8270345 7.1885579 13.9968"
      }))))))));

    case "cart":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "26px",
        height: "26px",
        viewBox: "0 0 26 26",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Pricing-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "2.0-Pricing",
        transform: "translate(-707.000000, -2533.000000)"
      }, _react["default"].createElement("g", {
        id: "Feature-all-plans",
        transform: "translate(100.000000, 2221.000000)"
      }, _react["default"].createElement("g", {
        id: "Steamlined-checkout",
        transform: "translate(464.000000, 313.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-cart",
        transform: "translate(144.000000, 0.000000)"
      }, _react["default"].createElement("g", {
        id: "shopping-cart"
      }, _react["default"].createElement("circle", {
        id: "Oval",
        fill: "#393CB4",
        fillRule: "nonzero",
        cx: "5.53846154",
        cy: "22.1538462",
        r: "1.10769231"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        fill: "#393CB4",
        fillRule: "nonzero",
        cx: "21.0461538",
        cy: "22.1538462",
        r: "1.10769231"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        stroke: "#1BDFBA",
        strokeWidth: "2.4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        cx: "5.53846154",
        cy: "22.1538462",
        r: "1.10769231"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        stroke: "#1BDFBA",
        strokeWidth: "2.4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        cx: "21.0461538",
        cy: "22.1538462",
        r: "1.10769231"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#393CB4",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        points: "4.20923077 5.53846154 23.2615385 5.53846154 21.0461538 16.6153846 5.53846154 16.6153846 3.32307692 0 0 0"
      }))))))));

    case "dragdrop":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "26px",
        height: "26px",
        viewBox: "0 0 26 26",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Pricing-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "2.0-Pricing",
        transform: "translate(-1173.000000, -2532.000000)"
      }, _react["default"].createElement("g", {
        id: "Feature-all-plans",
        transform: "translate(100.000000, 2221.000000)"
      }, _react["default"].createElement("g", {
        id: "Drag-and-drop-blocks",
        transform: "translate(928.000000, 312.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-dragdrop",
        transform: "translate(146.000000, 0.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "path-exclude",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("polygon", {
        id: "Path",
        stroke: "#393CB4",
        points: "23.4666667 0 7.46666667 0 7.46666667 7.46666667 0 7.46666667 0 23.4666667 16 23.4666667 16 16 23.4666667 16"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#1BDFBA",
        points: "16 9.6 16 7.46666667 13.8666667 7.46666667"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#1BDFBA",
        points: "7.46666667 13.8666667 7.46666667 16 9.6 16"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#393CB4",
        points: "7.46666667 9.6 7.46666667 7.46666667 9.6 7.46666667"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#393CB4",
        points: "13.8666667 16 16 16 16 13.8666667"
      }))))))));

    case "customer-success":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Careers-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "3.0-Careers-Page",
        transform: "translate(-150.000000, -4214.000000)"
      }, _react["default"].createElement("g", {
        id: "Open-positions",
        transform: "translate(100.000000, 3115.000000)"
      }, _react["default"].createElement("g", {
        id: "FAQ-2-Copy",
        transform: "translate(0.000000, 1059.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-customer-success",
        transform: "translate(50.000000, 40.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "b-meeting",
        transform: "translate(1.000000, 1.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("polygon", {
        id: "Path",
        stroke: "#373AAF",
        points: "22 0 10 0 10 10 15 6 22 6"
      }), _react["default"].createElement("path", {
        d: "M9,20.836 C9,20.232 8.735,19.657 8.262,19.282 C7.539,18.708 6.285,18 4.5,18 C2.715,18 1.461,18.708 0.738,19.282 C0.265,19.657 0,20.232 0,20.836 L0,22 L9,22 L9,20.836 Z",
        id: "Path",
        stroke: "#373AAF"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        stroke: "#373AAF",
        cx: "4.5",
        cy: "12.5",
        r: "2.5"
      }), _react["default"].createElement("path", {
        d: "M22,20.836 C22,20.232 21.735,19.657 21.262,19.282 C20.539,18.708 19.285,18 17.5,18 C15.715,18 14.461,18.708 13.738,19.282 C13.265,19.657 13,20.232 13,20.836 L13,22 L22,22 L22,20.836 Z",
        id: "Path",
        stroke: "#1BDFBA"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        stroke: "#1BDFBA",
        cx: "17.5",
        cy: "12.5",
        r: "2.5"
      }))))))));

    case "push":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Pricing-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "2.0-Pricing",
        transform: "translate(-245.000000, -2756.000000)"
      }, _react["default"].createElement("g", {
        id: "Feature-all-plans",
        transform: "translate(100.000000, 2221.000000)"
      }, _react["default"].createElement("g", {
        id: "Push-notificaitons",
        transform: "translate(0.000000, 535.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-push",
        transform: "translate(145.000000, 0.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0.5",
        width: "24",
        height: "24"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        fill: "#1BDFBA",
        fillRule: "nonzero",
        cx: "19",
        cy: "5.5",
        r: "5"
      }), _react["default"].createElement("path", {
        d: "M9.91782847,5.5 L7,5.5 C3.6862915,5.5 1,8.1862915 1,11.5 L1,16.5 C1,19.8137085 3.6862915,22.5 7,22.5 L13,22.5 C16.3137085,22.5 19,19.8137085 19,16.5 L19,14.1359286",
        id: "Path-3",
        stroke: "#373AAF",
        strokeWidth: "2",
        strokeLinecap: "round"
      })))))));

    case "providers":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({}, props, {
        width: "25px",
        height: "25px",
        viewBox: "0 0 25 25",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }), _react["default"].createElement("g", {
        id: "Pricing-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "2.0-Pricing",
        transform: "translate(-708.000000, -2757.000000)"
      }, _react["default"].createElement("g", {
        id: "Feature-all-plans",
        transform: "translate(100.000000, 2221.000000)"
      }, _react["default"].createElement("g", {
        id: "Pyament-providers",
        transform: "translate(464.000000, 536.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-payment-providers",
        transform: "translate(145.000000, 0.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "money-12",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        stroke: "#393CB4",
        x: "0",
        y: "7.2",
        width: "22.6285714",
        height: "16.4571429"
      }), _react["default"].createElement("circle", {
        id: "Oval",
        stroke: "#1BDFBA",
        cx: "11.3142857",
        cy: "15.4285714",
        r: "3.08571429"
      }), _react["default"].createElement("path", {
        d: "M3.08571429,4.11428571 L19.5428571,4.11428571",
        id: "Path",
        stroke: "#1BDFBA"
      }), _react["default"].createElement("path", {
        d: "M7.2,1.02857143 L15.4285714,1.02857143",
        id: "Path",
        stroke: "#1BDFBA"
      }))))))));

    case "video":
      return _react["default"].createElement(BrandBasicIconSVG, {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react["default"].createElement("g", {
        id: "Landing-Page",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "1.0-Landing-Page",
        transform: "translate(-100.000000, -935.000000)"
      }, _react["default"].createElement("g", {
        id: "Button-Full---Large",
        transform: "translate(100.000000, 935.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-play"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "frame-c-caret-right",
        transform: "translate(1.000000, 1.000000)",
        stroke: "#373AAF",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("circle", {
        id: "Oval",
        cx: "11",
        cy: "11",
        r: "11"
      }), _react["default"].createElement("polygon", {
        id: "Path",
        points: "9 15 9 7 15 11"
      })))))));

    case "ebook":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({
        width: "20px",
        height: "24px",
        viewBox: "0 0 20 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), _react["default"].createElement("g", {
        id: "Resources",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "8.0-Resources",
        transform: "translate(-905.000000, -521.000000)"
      }, _react["default"].createElement("g", {
        id: "Demo-Form-Copy-2",
        transform: "translate(884.000000, 500.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-ebook",
        transform: "translate(19.000000, 21.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "book-bookmark",
        transform: "translate(3.000000, 1.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#1BDFBA",
        points: "10 0 10 8 7 6 4 8 4 0"
      }), _react["default"].createElement("path", {
        d: "M2,0 C0.895,0 0,0.895 0,2 L0,20 C0,18.895 0.895,18 2,18 L16,18 C17.105,18 18,17.105 18,16 L18,2 C18,0.895 17.105,0 16,0 L2,0 Z",
        id: "Path",
        stroke: "#393CB4"
      }), _react["default"].createElement("path", {
        d: "M16,22 C17.105,22 18,21.105 18,20 L18,18 L18,16 C18,17.105 17.105,18 16,18 L2,18 C0.895,18 0,18.895 0,20 C0,21.105 0.895,22 2,22 L16,22 Z",
        id: "Path",
        stroke: "#393CB4"
      })))))));

    case "infographic":
      return _react["default"].createElement(BrandBasicIconSVG, _extends({
        width: "22px",
        height: "22px",
        viewBox: "0 0 22 22",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), _react["default"].createElement("g", {
        id: "Resources",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("g", {
        id: "8.0-Resources",
        transform: "translate(-905.000000, -771.000000)"
      }, _react["default"].createElement("g", {
        id: "Demo-Form-Copy-4",
        transform: "translate(884.000000, 750.000000)"
      }, _react["default"].createElement("g", {
        id: "Icon-inforgraphic",
        transform: "translate(20.000000, 20.000000)"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
      }), _react["default"].createElement("g", {
        id: "decision-process",
        transform: "translate(2.000000, 2.000000)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }, _react["default"].createElement("rect", {
        id: "Rectangle",
        stroke: "#393CB4",
        x: "0",
        y: "0",
        width: "8",
        height: "4"
      }), _react["default"].createElement("rect", {
        id: "Rectangle",
        stroke: "#393CB4",
        x: "0",
        y: "16",
        width: "8",
        height: "4"
      }), _react["default"].createElement("path", {
        d: "M4,7 L4,13",
        id: "Path",
        stroke: "#393CB4"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#393CB4",
        points: "11 2 15 2 15 4"
      }), _react["default"].createElement("polyline", {
        id: "Path",
        stroke: "#393CB4",
        points: "11 18 15 18 15 16"
      }), _react["default"].createElement("polygon", {
        id: "Path",
        stroke: "#1BDFBA",
        points: "10 10 15 7 20 10 15 13"
      })))))));

    default:
      return _react["default"].createElement("span", null);
  }
};

exports.BrandIcon = BrandIcon;

var BrandAbstractIconWrapper = _styledComponents["default"].div.withConfig({
  displayName: "BrandIcon__BrandAbstractIconWrapper",
  componentId: "sc-4c7rq1-0"
})(["height:75px;width:75px;display:flex;align-items:center;"]);

var BrandAbstractIconSVG = _styledComponents["default"].svg.withConfig({
  displayName: "BrandIcon__BrandAbstractIconSVG",
  componentId: "sc-4c7rq1-1"
})(["max-height:75px;margin-left:0px;margin-right:0px;max-width:75px;width:100%;margin-left:", ";margin-right:", ";", ";"], function (props) {
  return props.iconRight ? "10px" : "0px";
}, function (props) {
  return props.iconLeft ? "10px" : "0px";
}, function (props) {
  return props.style ? props.style : null;
});

var BrandBasicIconSVG = _styledComponents["default"].svg.withConfig({
  displayName: "BrandIcon__BrandBasicIconSVG",
  componentId: "sc-4c7rq1-2"
})(["margin-left:", ";margin-right:", ";", ";"], function (props) {
  return props.iconRight ? "10px" : "0px";
}, function (props) {
  return props.iconLeft ? "10px" : "0px";
}, function (props) {
  return props.style ? props.style : null;
});