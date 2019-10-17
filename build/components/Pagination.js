"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var getPages = function getPages(currentPage, pages, onPageClick) {
  var elements = [];

  if (currentPage === 1) {
    elements.push(_react["default"].createElement(DisabledPage, {
      key: 'prev'
    }, "PREV"));
  } else {
    elements.push(_react["default"].createElement(Page, {
      key: 'prev',
      onClick: function onClick() {
        if (currentPage !== 1) {
          onPageClick(currentPage - 1);
        }
      }
    }, "PREV"));
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
    elements.push(_react["default"].createElement(DisabledPage, {
      key: 'next'
    }, "NEXT"));
  } else {
    elements.push(_react["default"].createElement(Page, {
      key: 'next',
      onClick: function onClick() {
        if (currentPage !== pages.length) {
          onPageClick(currentPage + 1);
        }
      }
    }, "NEXT"));
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
})(["display:flex;flex-direction:row;user-select:none;"]);

var Page = _styledComponents["default"].li.withConfig({
  displayName: "Pagination__Page",
  componentId: "sc-1h8fjru-1"
})(["margin-right:5px;min-width:10px;min-height:10px;color:blue;cursor:pointer;border:1px solid black;list-style-type:none;"]);

var DisabledPage = (0, _styledComponents["default"])(Page).withConfig({
  displayName: "Pagination__DisabledPage",
  componentId: "sc-1h8fjru-2"
})(["color:gray;cursor:auto;"]);
var ActivePage = (0, _styledComponents["default"])(Page).withConfig({
  displayName: "Pagination__ActivePage",
  componentId: "sc-1h8fjru-3"
})(["color:red;cursor:auto;"]);
Pagination.propTypes = {
  totalRecords: _propTypes["default"].number.isRequired,
  perPage: _propTypes["default"].number,
  onPageChanged: _propTypes["default"].func
};