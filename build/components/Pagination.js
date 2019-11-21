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
  var props = _extends({}, _ref);

  var elements = [];
  var pagRange = Math.ceil(totalRecords / perPage);

  if (currentPage === 1) {
    elements.push(_react["default"].createElement(DisabledPage, _extends({
      key: "prev"
    }, props, {
      pagNav: true
    }), _react["default"].createElement(_Icon.Icon, {
      iconLeft: true,
      type: "arrow-left"
    })));
  } else {
    elements.push(_react["default"].createElement(Page, {
      pagNav: true,
      key: "prev",
      onClick: function onClick() {
        if (currentPage !== 1) {
          onPageClick(currentPage - 1);
        }

        cd;
      }
    }, _react["default"].createElement(_Icon.Icon, {
      iconLeft: true,
      type: "arrow-left",
      fill: _variables.colors.grayText
    })));
  }

  if (currentPage > 4) {
    elements.push(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Page, {
      onClick: function onClick() {
        return onPageClick(1);
      }
    }, "1"), _react["default"].createElement(_Typography.Body, {
      color: _variables.colors.grayText
    }, "...")));
  }

  pages.length && pages.forEach(function (page) {
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

  if (currentPage < pagRange - 3) {
    elements.push(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Typography.Body, {
      color: _variables.colors.grayText
    }, "..."), _react["default"].createElement(Page, {
      onClick: function onClick() {
        return onPageClick(pagRange);
      }
    }, pagRange)));
  }

  if (currentPage === pagRange) {
    elements.push(_react["default"].createElement(DisabledPage, _extends({}, props, {
      key: "next",
      pagNav: true
    }), _react["default"].createElement(_Icon.Icon, {
      iconRight: true,
      type: "arrow-right"
    })));
  } else {
    elements.push(_react["default"].createElement(Page, {
      pagNav: true,
      key: "next",
      onClick: function onClick() {
        if (currentPage !== pagRange) {
          onPageClick(currentPage + 1);
        }
      }
    }, _react["default"].createElement(_Icon.Icon, {
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
})(["", ";", ";", ";margin-right:10px;margin-left:10px;cursor:pointer;list-style-type:none;letter-spacing:1px;color:", ";&:hover{cursor:pointer;}transition:400ms all ease-in;"], function (props) {
  return props.disabled && "visibility: hidden; transition: 400ms all ease-in";
}, function (props) {
  return !props.disabled && "visibility: visible; transition: 400ms all ease-in";
}, function (props) {
  return props.pagNav && "width: 30px; text-align: center";
}, _variables.colors.grayText);

var DisabledPage = function DisabledPage(props) {
  return _react["default"].createElement(Page, {
    disabled: true,
    pagNav: props.pagNav
  }, props.children, props.children[1]);
};

var ActivePage = (0, _styledComponents["default"])(Page).withConfig({
  displayName: "Pagination__ActivePage",
  componentId: "sc-1h8fjru-2"
})(["color:", ";cursor:auto;"], _variables.colors.blue);
Pagination.propTypes = {
  totalRecords: _propTypes["default"].number.isRequired,
  perPage: _propTypes["default"].number,
  onPageChanged: _propTypes["default"].func
}; // import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { Icon } from "../elements/Icon";
// import { Body } from "../elements/Typography";
// import { colors } from "../utils/_variables";
// import styled from "styled-components";
// /**
//  * Helper method for creating a range of numbers
//  * range(1, 5) => [1, 2, 3, 4, 5]
//  */
// const range = (from, to, currentPage, step = 1) => {
//   let i = from;
//   const range = [];
//   while (i <= to) {
//     range.push(i);
//     i += step;
//   }
//   const currentIndex = range.indexOf(currentPage);
//   const visibleRange = (range, currIdx) => {
//     let arr = [];
//     if (range[currIdx] <= 4) {
//       return range.slice(0, 7);
//     }
//     if (range[currIdx] >= range.length - 3) {
//       arr = range.slice(Math.max(range.length - 7, 1));
//       return arr;
//     }
//     arr = range.slice(currIdx - 3, currIdx + 4);
//     return arr;
//   };
//   return visibleRange(range, currentIndex, to);
// };
// const getPages = (
//   currentPage,
//   pages,
//   onPageClick,
//   totalRecords,
//   perPage,
//   leftDots,
//   rightDots,
//   { ...props }
// ) => {
//   const elements = [];
//   const pagRange = Math.ceil(totalRecords / perPage);
//   const Dropdown = ({ pages, side }) => {
//     return (
//       <StyledPagDropdown>
//         <StyledPagDropdownList>
//           {pages.length > 0 &&
//             pages.reverse().map(page => {
//               return (
//                 <StyledPagListItem onClick={() => onPageClick(page)}>
//                   {page}
//                 </StyledPagListItem>
//               );
//             })}
//         </StyledPagDropdownList>
//       </StyledPagDropdown>
//     );
//   };
//   if (currentPage === 1) {
//     elements.push(
//       <DisabledPage key={"prev"} {...props} pagNav>
//         <Icon iconLeft type="arrow-left" />
//         PREV
//       </DisabledPage>
//     );
//   } else {
//     elements.push(
//       <Page
//         pagNav
//         key={"prev"}
//         onClick={() => {
//           if (currentPage !== 1) {
//             onPageClick(currentPage - 1);
//           }
//         }}
//       >
//         <Icon iconLeft type="arrow-left" fill={colors.grayText} />
//         PREV
//       </Page>
//     );
//   }
//   if (currentPage > 4) {
//     elements.push(
//       <>
//         <Page onClick={() => onPageClick(1)}>1</Page>
//         <Body style={{ position: "relative" }} color={colors.grayText}>
//           ... <Dropdown pages={leftDots} side="left" />
//         </Body>
//       </>
//     );
//   }
//   pages.length &&
//     pages.forEach(page => {
//       if (currentPage === page) {
//         elements.push(<ActivePage key={page}>{page}</ActivePage>);
//       } else {
//         elements.push(
//           <Page key={page} onClick={() => onPageClick(page)}>
//             {page}
//           </Page>
//         );
//       }
//     });
//   if (currentPage < pagRange - 3) {
//     elements.push(
//       <>
//         <Body color={colors.grayText}>...</Body>
//         <Page onClick={() => onPageClick(pagRange)}>{pagRange}</Page>
//       </>
//     );
//   }
//   if (currentPage === pagRange) {
//     elements.push(
//       <DisabledPage {...props} key={"next"} pagNav>
//         NEXT
//         <Icon iconRight type="arrow-right" />
//       </DisabledPage>
//     );
//   } else {
//     elements.push(
//       <Page
//         pagNav
//         key={"next"}
//         onClick={() => {
//           if (currentPage !== pagRange) {
//             onPageClick(currentPage + 1);
//           }
//         }}
//       >
//         NEXT
//         <Icon iconRight type="arrow-right" fill={colors.grayText} />
//       </Page>
//     );
//   }
//   return elements;
// };
// const Pagination = props => {
//   const { totalRecords, perPage } = props;
//   const [currentPage, setCurrentPage] = useState(1);
//   const onPageClick = page => {
//     setCurrentPage(page);
//     props.onPageChanged(page);
//   };
//   let pages = range(
//     1,
//     Math.ceil(props.totalRecords / props.perPage),
//     currentPage
//   );
//   const hiddenPagesLeft = pages => {
//     let starting = pages[0];
//     const arr = [];
//     while (starting > 1) {
//       starting = starting - 1;
//       arr.push(starting);
//     }
//     arr.pop();
//     return arr;
//   };
//   const hiddenPagesRight = pages => {
//     let starting = pages[pages.length - 1];
//     const totalPages = Math.ceil(totalRecords / perPage);
//     const arr = [];
//     while (starting < totalPages) {
//       starting = starting + 1;
//       arr.push(starting);
//     }
//     arr.pop();
//     return arr;
//   };
//   const leftDots = hiddenPagesLeft(pages);
//   const rightDots = hiddenPagesRight(pages);
//   const elements = getPages(
//     currentPage,
//     pages,
//     onPageClick,
//     totalRecords,
//     perPage,
//     leftDots,
//     rightDots
//   );
//   return <PaginationContainer>{elements}</PaginationContainer>;
// };
// const PaginationContainer = styled.ul`
//   display: flex;
//   flex-direction: row;
//   user-select: none;
//   align-items: center;
//   justify-content: center;
// `;
// const Page = styled(Body)`
//   ${props =>
//     props.disabled && `visibility: hidden; transition: 400ms all ease-in`};
//   ${props =>
//     !props.disabled && `visibility: visible; transition: 400ms all ease-in`};
//   ${props => props.pagNav && `width: 100px; text-align: center`};
//   margin-right: 10px;
//   margin-left: 10px;
//   cursor: pointer;
//   list-style-type: none;
//   letter-spacing: 1px;
//   color: ${colors.grayText};
//   &:hover {
//     cursor: pointer;
//   }
//   transition: 400ms all ease-in;
// `;
// const DisabledPage = props => {
//   return (
//     <Page disabled pagNav={props.pagNav}>
//       {props.children}
//       {props.children[1]}
//     </Page>
//   );
// };
// const ActivePage = styled(Page)`
//   color: ${colors.blue};
//   cursor: auto;
// `;
// const StyledPagDropdown = styled.div`
//   width: 45px;
//   position: absolute;
//   top: 0;
//   left: -10px;
//   opacity: 0;
//   height: auto;
//   // padding: 5px;
//   padding-top: 25px;
//   border: 1px soid blue;
//   box-sizing: border-box;
//   &:hover {
//     opacity: 1;
//   }
// `;
// const StyledPagDropdownList = styled.ul`
//   padding-left: 10px;
//   border-radius: 3px;
//   max-height: 200px;
//   overflow: scroll;
//   box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.05);
//   height: 100%;
//   &::-webkit-scrollbar {
//     // width: 5px;
//     // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
//   }
// `;
// const StyledPagListItem = styled.li`
//   &:hover {
//     cursor: pointer;
//   }
// `;
// Pagination.propTypes = {
//   totalRecords: PropTypes.number.isRequired,
//   perPage: PropTypes.number,
//   onPageChanged: PropTypes.func
// };
// export { Pagination };