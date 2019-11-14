"use strict";

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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
var range = function range(from, to) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var i = from;
  var range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

var getPages = function getPages(currentPage, pages, onPageClick, _ref) {
  var props = _extends({}, _ref);

  var elements = [];

  if (currentPage === 1) {
    elements.push(_react["default"].createElement(DisabledPage, _extends({
      key: "prev"
    }, props), _react["default"].createElement(_Icon.Icon, {
      iconLeft: true,
      type: "arrow-left"
    }), "PREV"));
  } else {
    elements.push(_react["default"].createElement(Page, {
      key: "prev",
      onClick: function onClick() {
        if (currentPage !== 1) {
          onPageClick(currentPage - 1);
        }
      }
    }, _react["default"].createElement(_Icon.Icon, {
      iconLeft: true,
      type: "arrow-left",
      fill: _variables.colors.grayText
    }), "PREV"));
  }

  pages.forEach(function (page) {
    if (currentPage === page) {
      elements.push(_react["default"].createElement(ActivePage, {
        key: page
      }, page));
    } else {
      elements.push(_react["default"].createElement(Page, {
        key: page,
        onClick: function onClick() {
          return onPageClick(page);
        }
      }, page));
    }
  });

  if (currentPage === pages.length) {
    elements.push(_react["default"].createElement(DisabledPage, _extends({}, props, {
      key: "next"
    }), "NEXT", _react["default"].createElement(_Icon.Icon, {
      iconRight: true,
      type: "arrow-right"
    })));
  } else {
    elements.push(_react["default"].createElement(Page, {
      key: "next",
      onClick: function onClick() {
        if (currentPage !== pages.length) {
          onPageClick(currentPage + 1);
        }
      }
    }, "NEXT", _react["default"].createElement(_Icon.Icon, {
      iconRight: true,
      type: "arrow-right",
      fill: _variables.colors.grayText
    })));
  }

  return elements;
};

var Pagination = function Pagination(props) {
  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var onPageClick = function onPageClick(page) {
    setCurrentPage(page);
    props.onPageChanged(page);
  };

  var pages = range(1, Math.ceil(props.totalRecords / props.perPage));
  var elements = getPages(currentPage, pages, onPageClick);
  return _react["default"].createElement(PaginationContainer, null, elements);
};

exports.Pagination = Pagination;

var PaginationContainer = _styledComponents["default"].ul.withConfig({
  displayName: "Pagination__PaginationContainer",
  componentId: "sc-1h8fjru-0"
})(["display:flex;flex-direction:row;user-select:none;align-items:center;justify-content:center;"]);

var Page = (0, _styledComponents["default"])(_Typography.Body).withConfig({
  displayName: "Pagination__Page",
  componentId: "sc-1h8fjru-1"
})(["", ";", ";margin-right:10px;margin-left:10px;cursor:pointer;min-width:15px;list-style-type:none;letter-spacing:1px;color:", ";&:hover{cursor:pointer;}transition:400ms all ease-in;"], function (props) {
  return props.disabled && "visibility: hidden; transition: 400ms all ease-in";
}, function (props) {
  return !props.disabled && "visibility: visible; transition: 400ms all ease-in";
}, _variables.colors.grayText);

var DisabledPage = function DisabledPage(props) {
  return _react["default"].createElement(Page, {
    disabled: true
  }, props.children, props.key);
};

var ActivePage = (0, _styledComponents["default"])(Page).withConfig({
  displayName: "Pagination__ActivePage",
  componentId: "sc-1h8fjru-2"
})(["color:", ";cursor:auto;"], _variables.colors.blue);
Pagination.propTypes = {
  totalRecords: _propTypes["default"].number.isRequired,
  perPage: _propTypes["default"].number,
  onPageChanged: _propTypes["default"].func
};