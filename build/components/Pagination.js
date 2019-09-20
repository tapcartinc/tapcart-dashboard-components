"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LEFT_PAGE = 'LEFT';
var RIGHT_PAGE = 'RIGHT';
/**
 * https://scotch.io/tutorials/build-custom-pagination-with-react
 */

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

var Pagination =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "gotoPage", function (page) {
      var _this$props$onPageCha = _this.props.onPageChanged,
          onPageChanged = _this$props$onPageCha === void 0 ? function (f) {
        return f;
      } : _this$props$onPageCha;
      var currentPage = Math.max(0, Math.min(page, _this.totalPages));
      var paginationData = {
        currentPage: currentPage,
        totalPages: _this.totalPages,
        pageLimit: _this.pageLimit,
        totalRecords: _this.totalRecords
      };

      _this.setState({
        currentPage: currentPage
      }, function () {
        return onPageChanged(paginationData);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (page) {
      return function (evt) {
        evt.preventDefault();

        _this.gotoPage(page);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleMoveLeft", function (evt) {
      evt.preventDefault();

      _this.gotoPage(_this.state.currentPage - _this.pageNeighbours * 2 - 1);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMoveRight", function (evt) {
      evt.preventDefault();

      _this.gotoPage(_this.state.currentPage + _this.pageNeighbours * 2 + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "fetchPageNumbers", function () {
      var totalPages = _this.totalPages;
      var currentPage = _this.state.currentPage;
      var pageNeighbours = _this.pageNeighbours;
      /**
       * totalNumbers: the total page numbers to show on the control
       * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
       */

      var totalNumbers = _this.pageNeighbours * 2 + 3;
      var totalBlocks = totalNumbers + 2;

      if (totalPages > totalBlocks) {
        var startPage = Math.max(2, currentPage - pageNeighbours);
        var endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
        var pages = range(startPage, endPage);
        /**
         * hasLeftSpill: has hidden pages to the left
         * hasRightSpill: has hidden pages to the right
         * spillOffset: number of hidden pages either to the left or to the right
         */

        var hasLeftSpill = startPage > 2;
        var hasRightSpill = totalPages - endPage > 1;
        var spillOffset = totalNumbers - (pages.length + 1);

        switch (true) {
          // handle: (1) < {5 6} [7] {8 9} (10)
          case hasLeftSpill && !hasRightSpill:
            {
              var extraPages = range(startPage - spillOffset, startPage - 1);
              pages = [LEFT_PAGE].concat(_toConsumableArray(extraPages), _toConsumableArray(pages));
              break;
            }
          // handle: (1) {2 3} [4] {5 6} > (10)

          case !hasLeftSpill && hasRightSpill:
            {
              var _extraPages = range(endPage + 1, endPage + spillOffset);

              pages = [].concat(_toConsumableArray(pages), _toConsumableArray(_extraPages), [RIGHT_PAGE]);
              break;
            }
          // handle: (1) < {4 5} [6] {7 8} > (10)

          case hasLeftSpill && hasRightSpill:
          default:
            {
              pages = [LEFT_PAGE].concat(_toConsumableArray(pages), [RIGHT_PAGE]);
              break;
            }
        }

        return [1].concat(_toConsumableArray(pages), [totalPages]);
      }

      return range(1, totalPages);
    });

    var _props$totalRecords = props.totalRecords,
        totalRecords = _props$totalRecords === void 0 ? null : _props$totalRecords,
        _props$pageLimit = props.pageLimit,
        pageLimit = _props$pageLimit === void 0 ? 30 : _props$pageLimit,
        _props$pageNeighbours = props.pageNeighbours,
        _pageNeighbours = _props$pageNeighbours === void 0 ? 0 : _props$pageNeighbours;

    _this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
    _this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0; // pageNeighbours can be: 0, 1 or 2

    _this.pageNeighbours = typeof _pageNeighbours === 'number' ? Math.max(0, Math.min(_pageNeighbours, 2)) : 0;
    _this.totalPages = Math.ceil(_this.totalRecords / _this.pageLimit);
    _this.state = {
      currentPage: 1
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.gotoPage(1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.totalRecords || this.totalPages === 1) return null;
      var currentPage = this.state.currentPage;
      var pages = this.fetchPageNumbers();
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("nav", {
        "aria-label": "Pagination"
      }, _react["default"].createElement(PaginationContainer, null, pages.map(function (page, index) {
        if (page === LEFT_PAGE) return _react["default"].createElement(PageItem, {
          key: index
        }, _react["default"].createElement("a", {
          href: "#",
          "aria-label": "Previous",
          onClick: _this2.handleMoveLeft
        }, _react["default"].createElement("span", {
          "aria-hidden": "true"
        }, "\xAB"), _react["default"].createElement("span", {
          className: "sr-only"
        }, "Previous")));
        if (page === RIGHT_PAGE) return _react["default"].createElement(PageItem, {
          key: index
        }, _react["default"].createElement("a", {
          href: "#",
          "aria-label": "Next",
          onClick: _this2.handleMoveRight
        }, _react["default"].createElement("span", {
          "aria-hidden": "true"
        }, "\xBB"), _react["default"].createElement("span", {
          className: "sr-only"
        }, "Next")));

        if (currentPage === page) {
          return _react["default"].createElement(ActivePage, {
            key: index
          }, _react["default"].createElement("a", {
            href: "#",
            onClick: _this2.handleClick(page)
          }, page));
        }

        return _react["default"].createElement(PageItem, {
          key: index
        }, _react["default"].createElement("a", {
          href: "#",
          onClick: _this2.handleClick(page)
        }, page));
      }))));
    }
  }]);

  return Pagination;
}(_react["default"].Component);

exports.Pagination = Pagination;

var PaginationContainer = _styledComponents["default"].ul.withConfig({
  displayName: "Pagination__PaginationContainer",
  componentId: "sc-1h8fjru-0"
})(["display:flex;"]);

var PageItem = _styledComponents["default"].li.withConfig({
  displayName: "Pagination__PageItem",
  componentId: "sc-1h8fjru-1"
})(["margin-right:5px;color:gray;min-width:10px;min-height:10px;border:1px solid black;list-style-type:none;"]);

var ActivePage = (0, _styledComponents["default"])(PageItem).withConfig({
  displayName: "Pagination__ActivePage",
  componentId: "sc-1h8fjru-2"
})(["color:red;"]);
Pagination.propTypes = {
  totalRecords: _propTypes["default"].number.isRequired,
  pageLimit: _propTypes["default"].number,
  pageNeighbours: _propTypes["default"].number,
  onPageChanged: _propTypes["default"].func
};