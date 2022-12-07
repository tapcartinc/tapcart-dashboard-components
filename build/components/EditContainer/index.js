"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditContainer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _variables = require("../../utils/_variables");
var _dashVariables = require("../../utils/_dashVariables");
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _Icon = require("../../elements/Icon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var EditContainer = function EditContainer(props) {
  var hoverNode = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  (0, _react.useEffect)(function () {
    document.addEventListener("mouseover", handleHover);
    return function () {
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);
  var handleHover = function handleHover(e) {
    if (hoverNode.current && hoverNode.current.contains(e.target)) {
      return;
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(DropDownSection, _extends({}, props, {
    disabled: props.disabled,
    onMouseEnter: function onMouseEnter() {
      return setOpen(true);
    },
    ref: hoverNode,
    onMouseLeave: function onMouseLeave() {
      return setOpen(false);
    }
  }), /*#__PURE__*/_react["default"].createElement(DropdownHeader, _extends({}, props, {
    open: open,
    disabled: props.disabled
  }), props.children), /*#__PURE__*/_react["default"].createElement(ClickableDropdown, _extends({}, props, {
    open: open,
    top: props.top,
    disabled: props.disabled
  }), /*#__PURE__*/_react["default"].createElement("ul", null, props.items.length && props.items.map(function (item, idx) {
    switch (item.type) {
      case "button":
        return /*#__PURE__*/_react["default"].createElement(StyledListItem, {
          lastIndex: idx === props.items.length - 1,
          key: "".concat(props.id, "-").concat(item.text),
          onClick: item.typeOptions.handler
        }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
          type: item.icon,
          style: {
            marginRight: 14
          },
          iconRight: true
        }), /*#__PURE__*/_react["default"].createElement("span", null, item.text));
      case "slider":
        return /*#__PURE__*/_react["default"].createElement(StyledListItem, {
          lastIndex: idx === props.items.length - 1,
          key: "".concat(item.typeOptions.type, "-").concat(props.id)
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center"
          }
        }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
          type: item.icon,
          style: {
            marginRight: 14
          },
          iconRight: true
        }), /*#__PURE__*/_react["default"].createElement("span", null, "Show", /*#__PURE__*/_react["default"].createElement("span", {
          className: "range-value"
        }, item.typeOptions.value, " Products"))), /*#__PURE__*/_react["default"].createElement("input", {
          style: {
            width: "100%"
          },
          type: item.typeOptions.type,
          name: item.typeOptions.name,
          step: item.typeOptions.step,
          min: item.typeOptions.min,
          max: item.typeOptions.max,
          value: item.typeOptions.value,
          onChange: item.typeOptions.handler
        }));
      case "segmented":
        return /*#__PURE__*/_react["default"].createElement(StyledListItem, {
          lastIndex: idx === props.items.length - 1,
          key: "".concat(props.id, "-").concat(item.text)
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center"
          }
        }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
          type: item.icon,
          iconLeft: true,
          iconRight: true
        }), /*#__PURE__*/_react["default"].createElement("span", null, item.text)), /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: "80%"
          }
        }, /*#__PURE__*/_react["default"].createElement(SegmentedControl, {
          items: item.typeOptions.items,
          action: item.typeOptions.handler,
          current: item.typeOptions.current,
          rounded: item.typeOptions.rounded,
          name: item.typeOptions.name
        })));
      case "file":
        return /*#__PURE__*/_react["default"].createElement(StyledListItem, {
          lastIndex: idx === props.items.length - 1,
          onClick: function onClick(e) {
            return item.typeOptions.handler(e);
          },
          key: "".concat(props.id, "-").concat(item.text)
        }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
          type: item.icon,
          iconLeft: true,
          iconRight: true
        }), /*#__PURE__*/_react["default"].createElement("span", null, item.text), /*#__PURE__*/_react["default"].createElement("input", {
          type: "file",
          onChange: function onChange(e) {
            return item.typeOptions.onChangeHandler(props.parent.dragDropId, e.target.files);
          },
          onClick: function onClick(e) {
            return e.target.value = null;
          }
        }));
      case "removeFile":
        if (props.parent.image) {
          return /*#__PURE__*/_react["default"].createElement(StyledListItem, {
            key: "".concat(props.id, "-").concat(item.text),
            lastIndex: idx === props.items.length - 1,
            onClick: function onClick(e) {
              return item.typeOptions.handler(props.parent.dragDropId, e);
            }
          }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
            type: item.icon,
            iconLeft: true,
            iconRight: true
          }), /*#__PURE__*/_react["default"].createElement("span", null, item.text));
        }
      default:
        break;
    }
  })))));
};
exports.EditContainer = EditContainer;
var DropDownSection = _styledComponents["default"].div.withConfig({
  displayName: "EditContainer__DropDownSection",
  componentId: "sc-1mizre-0"
})(["", ";position:relative;display:inline-block;overflow:visible;width:auto;", ""], function (props) {
  return props.disabled && "display: none;";
}, function (props) {
  return props.style ? props.style : null;
});
var ClickableDropdown = _styledComponents["default"].div.withConfig({
  displayName: "EditContainer__ClickableDropdown",
  componentId: "sc-1mizre-1"
})(["margin:0px;list-style:none;width:200px;", " padding:0px;color:", ";position:absolute;z-index:1;visibility:hidden;top:", ";right:0;opacity:0;transition:all 0.2s ease-in-out;", " ", ";", ";ul{background:white;width:195px;margin-left:5px;border-radius:3px;overflow:hidden;box-shadow:", ";}"], _variables.sofia.sofiaMedium, _variables.colors.blue, function (props) {
  return props.top ? props.top : "0";
}, function (props) {
  return props.open && "visibility: visible; opacity: 1; right: -200px;";
}, function (props) {
  return props.style ? props.style : null;
}, function (props) {
  return props.disabled && "display: none";
}, _variables.boxShadow.medium);
var StyledListItem = _styledComponents["default"].li.withConfig({
  displayName: "EditContainer__StyledListItem",
  componentId: "sc-1mizre-2"
})(["padding:12px 5px;display:flex;align-items:center;border-bottom:1px solid ", ";font-size:14px;color:", ";", " &:hover{cursor:pointer;}", ";"], _dashVariables.colorPicker.lightGray, _dashVariables.colorPicker.black, _dashVariables.sofiaPro.medium, function (props) {
  return props.lastIndex && "border-bottom: 0px";
});
var DropdownHeader = _styledComponents["default"].div.withConfig({
  displayName: "EditContainer__DropdownHeader",
  componentId: "sc-1mizre-3"
})(["position:relative;z-index:5;&:hover{cursor:pointer;", ";}", ";"], function (props) {
  return props.disabled && "cursor: default";
}, function (props) {
  return props.style ? props.style : null;
});
EditContainer.propTypes = {
  items: _propTypes["default"].array.isRequired
};
EditContainer.defaultProps = {};