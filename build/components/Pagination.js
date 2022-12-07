"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Icon = require("../elements/Icon");
var _Typography = require("../elements/Typography");
var _variables = require("../utils/_variables");
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */

var range = function range(from, to, currentPage) {
  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var i = from;
  var range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }
  var currentIndex = range.indexOf(currentPage);
  var visibleRange = function visibleRange(range, currIdx) {
    var arr = [];
    if (range[currIdx] <= 4) {
      return range.slice(0, 5);
    }
    if (range[currIdx] >= range.length - 3) {
      arr = range.slice(Math.max(range.length - 5, 1));
      return arr;
    }
    arr = range.slice(currIdx - 2, currIdx + 3);
    return arr;
  };
  return visibleRange(range, currentIndex, to);
};
var getPages = function getPages(currentPage, pages, onPageClick, totalRecords, perPage, _ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var elements = [];
  var pagRange = Math.ceil(totalRecords / perPage);
  if (currentPage === 1) {
    elements.push( /*#__PURE__*/_react["default"].createElement(DisabledPage, _extends({
      key: "prev"
    }, props, {
      pagNav: true
    }), /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      iconLeft: true,
      type: "arrow-left"
    })));
  } else {
    elements.push( /*#__PURE__*/_react["default"].createElement(Page, {
      pagNav: true,
      key: "prev",
      onClick: function onClick() {
        if (currentPage !== 1) {
          onPageClick(currentPage - 1);
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      iconLeft: true,
      type: "arrow-left",
      fill: _variables.colors.grayText
    })));
  }
  if (currentPage > 4) {
    elements.push( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Page, {
      onClick: function onClick() {
        return onPageClick(1);
      }
    }, "1"), /*#__PURE__*/_react["default"].createElement(_Typography.Body, {
      color: _variables.colors.grayText
    }, "...")));
  }
  pages.length && pages.forEach(function (page) {
    if (currentPage === page) {
      elements.push( /*#__PURE__*/_react["default"].createElement(ActivePage, {
        key: page
      }, page));
    } else {
      elements.push( /*#__PURE__*/_react["default"].createElement(Page, {
        key: page,
        onClick: function onClick() {
          return onPageClick(page);
        }
      }, page));
    }
  });
  if (currentPage < pagRange - 3) {
    elements.push( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography.Body, {
      color: _variables.colors.grayText
    }, "..."), /*#__PURE__*/_react["default"].createElement(Page, {
      onClick: function onClick() {
        return onPageClick(pagRange);
      }
    }, pagRange)));
  }
  if (currentPage === pagRange) {
    elements.push( /*#__PURE__*/_react["default"].createElement(DisabledPage, _extends({}, props, {
      key: "next",
      pagNav: true
    }), /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      iconRight: true,
      type: "arrow-right"
    })));
  } else {
    elements.push( /*#__PURE__*/_react["default"].createElement(Page, {
      pagNav: true,
      key: "next",
      onClick: function onClick() {
        if (currentPage !== pagRange) {
          onPageClick(currentPage + 1);
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      iconRight: true,
      type: "arrow-right",
      fill: _variables.colors.grayText
    })));
  }
  return elements;
};
var Pagination = function Pagination(props) {
  var totalRecords = props.totalRecords,
    perPage = props.perPage;
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var onPageClick = function onPageClick(page) {
    setCurrentPage(page);
    props.onPageChanged(page);
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };
  var pages = range(1, Math.ceil(props.totalRecords / props.perPage), currentPage);
  var elements = getPages(currentPage, pages, onPageClick, totalRecords, perPage);
  return /*#__PURE__*/_react["default"].createElement(PaginationContainer, null, elements);
};
exports.Pagination = Pagination;
var PaginationContainer = _styledComponents["default"].ul.withConfig({
  displayName: "Pagination__PaginationContainer",
  componentId: "sc-1h9w1ne-0"
})(["display:flex;flex-direction:row;user-select:none;align-items:center;justify-content:center;"]);
var Page = (0, _styledComponents["default"])(_Typography.Body).withConfig({
  displayName: "Pagination__Page",
  componentId: "sc-1h9w1ne-1"
})(["", ";", ";", ";margin-right:10px;margin-left:10px;cursor:pointer;list-style-type:none;letter-spacing:1px;color:", ";&:hover{cursor:pointer;}transition:400ms all ease-in;"], function (props) {
  return props.disabled && "visibility: hidden; transition: 400ms all ease-in";
}, function (props) {
  return !props.disabled && "visibility: visible; transition: 400ms all ease-in";
}, function (props) {
  return props.pagNav && "width: 30px; text-align: center";
}, _variables.colors.grayText);
var DisabledPage = function DisabledPage(props) {
  return /*#__PURE__*/_react["default"].createElement(Page, {
    disabled: true,
    pagNav: props.pagNav
  }, props.children, props.children[1]);
};
var ActivePage = (0, _styledComponents["default"])(Page).withConfig({
  displayName: "Pagination__ActivePage",
  componentId: "sc-1h9w1ne-2"
})(["color:", ";cursor:auto;"], _variables.colors.blue);
Pagination.propTypes = {
  totalRecords: _propTypes["default"].number.isRequired,
  pageNeighbours: _propTypes["default"].number.isRequired,
  perPage: _propTypes["default"].number.isRequired,
  onPageChanged: _propTypes["default"].func.isRequired
};
Pagination.defaultProps = {};