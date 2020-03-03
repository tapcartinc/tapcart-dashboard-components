"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(DropDownSection, _extends({}, props, {
    disabled: props.disabled,
    onMouseEnter: function onMouseEnter() {
      return setOpen(true);
    },
    ref: hoverNode,
    onMouseLeave: function onMouseLeave() {
      return setOpen(false);
    }
  }), _react["default"].createElement(DropdownHeader, _extends({}, props, {
    open: open,
    disabled: props.disabled
  }), props.children), _react["default"].createElement(ClickableDropdown, _extends({}, props, {
    open: open,
    top: props.top,
    disabled: props.disabled
  }), _react["default"].createElement("ul", null, props.items.length && props.items.map(function (item, idx) {
    switch (item.type) {
      case "button":
        return _react["default"].createElement(StyledListItem, {
          lastIndex: idx === props.items.length - 1,
          key: "".concat(props.id, "-").concat(item.text),
          onClick: item.typeOptions.handler
        }, _react["default"].createElement(_Icon.Icon, {
          type: item.icon,
          style: {
            marginRight: 14
          },
          iconRight: true
        }), _react["default"].createElement("span", null, item.text));

      case "slider":
        return _react["default"].createElement(StyledListItem, {
          lastIndex: idx === props.items.length - 1,
          key: "".concat(item.typeOptions.type, "-").concat(props.id)
        }, _react["default"].createElement("div", {
          style: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center"
          }
        }, _react["default"].createElement(_Icon.Icon, {
          type: item.icon,
          style: {
            marginRight: 14
          },
          iconRight: true
        }), _react["default"].createElement("span", null, "Show", _react["default"].createElement("span", {
          className: "range-value"
        }, item.typeOptions.value, " Products"))), _react["default"].createElement("input", {
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
        return _react["default"].createElement(StyledListItem, {
          lastIndex: idx === props.items.length - 1,
          key: "".concat(props.id, "-").concat(item.text)
        }, _react["default"].createElement("div", {
          style: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center"
          }
        }, _react["default"].createElement(_Icon.Icon, {
          type: item.icon,
          iconLeft: true,
          iconRight: true
        }), _react["default"].createElement("span", null, item.text)), _react["default"].createElement("div", {
          style: {
            width: "80%"
          }
        }, _react["default"].createElement(SegmentedControl, {
          items: item.typeOptions.items,
          action: item.typeOptions.handler,
          current: item.typeOptions.current,
          rounded: item.typeOptions.rounded,
          name: item.typeOptions.name
        })));

      case "file":
        return _react["default"].createElement(StyledListItem, {
          lastIndex: idx === props.items.length - 1,
          onClick: function onClick(e) {
            return item.typeOptions.handler(e);
          },
          key: "".concat(props.id, "-").concat(item.text)
        }, _react["default"].createElement(_Icon.Icon, {
          type: item.icon,
          iconLeft: true,
          iconRight: true
        }), _react["default"].createElement("span", null, item.text), _react["default"].createElement("input", {
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
          return _react["default"].createElement(StyledListItem, {
            key: "".concat(props.id, "-").concat(item.text),
            lastIndex: idx === props.items.length - 1,
            onClick: function onClick(e) {
              return item.typeOptions.handler(props.parent.dragDropId, e);
            }
          }, _react["default"].createElement(_Icon.Icon, {
            type: item.icon,
            iconLeft: true,
            iconRight: true
          }), _react["default"].createElement("span", null, item.text));
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