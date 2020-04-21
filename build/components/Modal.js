"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _Button = require("../elements/Button");

var _Icon = require("../elements/Icon");

var _variables = require("../utils/_variables");

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _dashVariables = require("../utils/_dashVariables");

var _Typography = require("../elements/Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ReactModalAdapter(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  var contentClassName = "".concat(className, "__content");
  var overlayClassName = "".concat(className, "__overlay");
  var bodyOpenClassName = "ReactModal__Body--open";

  if (props.type === "generic") {
    bodyOpenClassName = "ReactModal__Body--open-full";
  }

  return /*#__PURE__*/_react["default"].createElement(_reactModal["default"], _extends({
    portalClassName: className,
    className: contentClassName,
    overlayClassName: overlayClassName,
    onRequestClose: props.closeModal,
    bodyOpenClassName: bodyOpenClassName
  }, props));
}

var Modal = function Modal(props) {
  (0, _react.useEffect)(function () {
    _reactModal["default"].setAppElement(props.rootElement || "#root");
  }, []);
  return /*#__PURE__*/_react["default"].createElement(StyledModal, props, /*#__PURE__*/_react["default"].createElement(ModalType, props, props.children));
};

exports.Modal = Modal;

function ModalType(props) {
  switch (props.type) {
    case "custom":
      return /*#__PURE__*/_react["default"].createElement(MinimalModalStyle, props, props.children);

    case "generic":
      return /*#__PURE__*/_react["default"].createElement(GenericModalStyle, props, props.children);

    case "dash":
      return /*#__PURE__*/_react["default"].createElement(DashModal, props, /*#__PURE__*/_react["default"].createElement("div", {
        onClick: props.closeModal,
        style: {
          position: "absolute",
          right: 16,
          top: 13,
          cursor: "pointer"
        }
      }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
        fill: _variables.colors.grayText,
        type: "small-close"
      })), /*#__PURE__*/_react["default"].createElement(StyledDashContent, null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginBottom: 20,
          marginTop: 20
        }
      }, /*#__PURE__*/_react["default"].createElement(_Typography.Header, null, props.header), props.description && /*#__PURE__*/_react["default"].createElement(_Typography.Description, null, props.description)), /*#__PURE__*/_react["default"].createElement(StyledDashModalContent, null, props.children), props.buttonText && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        isDisabled: props.saveDisabled,
        onClick: props.save
      }, props.buttonText)));

    case "full":
      return /*#__PURE__*/_react["default"].createElement(FullscreenModal, props, props.children);

    case "modal-with-graphic":
      return /*#__PURE__*/_react["default"].createElement(ModalWithGraphic, props, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          padding: 25
        }
      }, /*#__PURE__*/_react["default"].createElement(ModalHeader, null, /*#__PURE__*/_react["default"].createElement(ModalHeaderLeft, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
        circleIcon: true,
        type: props.icon
      }), /*#__PURE__*/_react["default"].createElement(_Typography.Header, {
        style: {
          marginLeft: 10
        }
      }, props.header))), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginLeft: 5
        }
      }, props.children), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(ButtonsStyle, null, props.buttons && props.buttons.map(function (button, idx) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: "".concat(button.type, "-").concat(button.button, "-").concat(props.header),
          style: idx !== 0 ? {
            marginLeft: 15
          } : null
        }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
          key: button.button,
          type: button.type,
          onClick: button.onClick,
          isLoading: button.isLoading
        }, button.button));
      }))), /*#__PURE__*/_react["default"].createElement(ModalGraphic, null, /*#__PURE__*/_react["default"].createElement("img", {
        src: props.graphic,
        style: {
          width: "250px",
          height: "100%",
          objectFit: "cover"
        }
      }), /*#__PURE__*/_react["default"].createElement(CloseIcon, {
        type: "small-close",
        onClick: props.closeModal,
        style: {
          margin: 20
        }
      })));

    case "alert":
      return /*#__PURE__*/_react["default"].createElement(MinimalModalStyle, props, /*#__PURE__*/_react["default"].createElement(ModalHeader, null, /*#__PURE__*/_react["default"].createElement(ModalHeaderLeft, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
        circleIcon: true,
        type: props.icon
      }), /*#__PURE__*/_react["default"].createElement(_Typography.Header, {
        style: {
          marginLeft: 15
        }
      }, props.header)), /*#__PURE__*/_react["default"].createElement(CloseIcon, {
        fill: _variables.colors.grayText,
        type: "small-close",
        onClick: props.closeModal
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginLeft: 5
        }
      }, props.children), /*#__PURE__*/_react["default"].createElement(ButtonsStyle, null, props.buttons && props.buttons.map(function (button, idx) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: "".concat(button.type, "-").concat(button.button, "-").concat(props.header),
          style: idx !== 0 ? {
            marginLeft: 15
          } : null
        }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
          key: button.type,
          kind: button.kind,
          onClick: button.onClick
        }, button.button));
      })));

    default:
      return /*#__PURE__*/_react["default"].createElement("div", null);
  }
}

var StyledModal = (0, _styledComponents["default"])(ReactModalAdapter).withConfig({
  displayName: "Modal__StyledModal",
  componentId: "sc-10ogjb3-0"
})(["&__overlay{height:100%;width:100%;position:fixed;overflow-y:scroll;top:0;left:0;z-index:999;background:rgba(0,0,0,0.4);display:flex;flex-direction:column;justify-content:center;align-items:center;}&__content{overflow-y:hidden;border-radius:3px;background:#ffffff;z-index:9999;box-shadow:", ";", ";", ";&:focus{outline:0;}}"], _variables.boxShadow.large, function (props) {
  return props.type !== "dash" && "max-width: 600px; width: auto !important";
}, function (props) {
  return props.type === "dash" && "position: relative;padding: .75em 1em; overflow: scroll; background: ".concat(_dashVariables.colorPicker.modalBg, ";");
});

var ModalStyle = _styledComponents["default"].div.withConfig({
  displayName: "Modal__ModalStyle",
  componentId: "sc-10ogjb3-1"
})(["", ""], function (props) {
  return props.style ? props.style : null;
});

var StyledDashModalContent = _styledComponents["default"].div.withConfig({
  displayName: "Modal__StyledDashModalContent",
  componentId: "sc-10ogjb3-2"
})(["background:#ffffff;border:1px solid ", ";height:60vh;min-height:400px;margin-bottom:30px;padding:30px 50px;overflow:scroll;"], _dashVariables.colorPicker.lightGray);

var StyledDashContent = _styledComponents["default"].div.withConfig({
  displayName: "Modal__StyledDashContent",
  componentId: "sc-10ogjb3-3"
})(["margin-left:0px;text-align:left;padding-left:30px;padding-right:30px;button{margin:0 auto;margin-bottom:10px;}"]);

var DashModal = (0, _styledComponents["default"])(ModalStyle).withConfig({
  displayName: "Modal__DashModal",
  componentId: "sc-10ogjb3-4"
})(["width:90vw;height:auto;top:0;left:0;padding:0.75em 1em;"]);
var ModalWithGraphic = (0, _styledComponents["default"])(ModalStyle).withConfig({
  displayName: "Modal__ModalWithGraphic",
  componentId: "sc-10ogjb3-5"
})(["width:600px;display:flex;flex-direction:row;align-items:center;object-fit:cover;height:100%;overflow:hidden;justify-content:space-between;", ""], function (props) {
  return props.style ? props.style : null;
});
var MinimalModalStyle = (0, _styledComponents["default"])(ModalStyle).withConfig({
  displayName: "Modal__MinimalModalStyle",
  componentId: "sc-10ogjb3-6"
})(["width:500px;padding-top:19px;padding-left:19px;padding-bottom:20px;padding-right:20px;", ""], function (props) {
  return props.style ? props.style : null;
});
var GenericModalStyle = (0, _styledComponents["default"])(ModalStyle).withConfig({
  displayName: "Modal__GenericModalStyle",
  componentId: "sc-10ogjb3-7"
})(["", ""], function (props) {
  return props.style ? props.style : null;
});
var FullscreenModal = (0, _styledComponents["default"])(ModalStyle).withConfig({
  displayName: "Modal__FullscreenModal",
  componentId: "sc-10ogjb3-8"
})(["position:fixed;width:100%;height:100%;top:0;left:0;", ""], function (props) {
  return props.style ? props.style : null;
});

var ButtonsStyle = _styledComponents["default"].div.withConfig({
  displayName: "Modal__ButtonsStyle",
  componentId: "sc-10ogjb3-9"
})(["display:flex;flex-direction:row;align-items:center;justify-content:flex-end;margin-top:25px;", ""], function (props) {
  return props.style ? props.style : null;
});

var ModalHeader = _styledComponents["default"].div.withConfig({
  displayName: "Modal__ModalHeader",
  componentId: "sc-10ogjb3-10"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;position:relative;margin-bottom:30px;"]);

var ModalHeaderLeft = _styledComponents["default"].div.withConfig({
  displayName: "Modal__ModalHeaderLeft",
  componentId: "sc-10ogjb3-11"
})(["display:flex;flex-direction:row;justify-items:flex-start;align-items:center;"]);

var ModalGraphic = _styledComponents["default"].div.withConfig({
  displayName: "Modal__ModalGraphic",
  componentId: "sc-10ogjb3-12"
})(["position:relative;object-fit:cover;height:100%;width:250px;"]);

var CloseIcon = (0, _styledComponents["default"])(_Icon.Icon).withConfig({
  displayName: "Modal__CloseIcon",
  componentId: "sc-10ogjb3-13"
})(["height:15px;width:15px;top:0;right:0;position:absolute;z-index:10;&:hover{cursor:pointer;}"]);
Modal.propTypes = {
  /**
   * options: "alert" | "dash" | "full"
   */
  type: _propTypes["default"].string,
  buttons: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    /**
     * Button text to be dispalyed; ex: "Save"
     */
    button: _propTypes["default"].string,

    /**
     * Function returned once button is clicked
     */
    onClick: _propTypes["default"].func,

    /**
     * Kind of button styling that should be applies
     * options: "primary", "secondary", "delete", "etc..."
     */
    kind: _propTypes["default"].string
  })),

  /**
   * Modal header
   */
  header: _propTypes["default"].string,

  /**
   * Text rendered under modal header
   * ONLY applies to modal of type "dash"
   */
  description: _propTypes["default"].string,

  /**
   * Icon rendered to the left of the modal header
   * ONLY applies to modal of type "alert"
   */
  icon: _propTypes["default"].string,

  /**
   *  Modal close function
   */
  closeModal: _propTypes["default"].func,

  /**
   * Button text for the button that saves any functionality shown in the children/content of the modal
   *
   * The button rendered at the bottom of the modal on all of the non-alert dashboard modals
   * ONLY applies to modal of type "dash"
   */
  buttonText: _propTypes["default"].string,
  isOpen: _propTypes["default"].bool,

  /**
   * Modal content/ body of the modal
   */
  children: _propTypes["default"].node
};
Modal.defaultProps = {};