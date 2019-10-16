"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import './.css';
var BrandIcon = function BrandIcon(props) {
  var type = props.type,
      fill = props.fill;

  switch (type) {
    case 'design':
      return _react["default"].createElement(BrandIconWrapper, {
        className: ""
      }, _react["default"].createElement(BrandIconSVG, {
        viewBox: "0 0 73 75",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react["default"].createElement("g", {
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

    default:
      return _react["default"].createElement("span", null);
  }
};

exports.BrandIcon = BrandIcon;

var BrandIconWrapper = _styledComponents["default"].div.withConfig({
  displayName: "BrandIcon__BrandIconWrapper",
  componentId: "sc-4c7rq1-0"
})(["height:75px;width:75px;max-height:75px;display:flex;align-items:center;"]);

var BrandIconSVG = _styledComponents["default"].svg.withConfig({
  displayName: "BrandIcon__BrandIconSVG",
  componentId: "sc-4c7rq1-1"
})(["width:100%;max-height:75px;height:auto;object-fit:contain;margin-left:", ";margin-right:", ";", ";"], function (props) {
  return props.iconRight ? '10px' : '0px';
}, function (props) {
  return props.iconLeft ? '10px' : '0px';
}, function (props) {
  return props.style ? props.style : null;
});