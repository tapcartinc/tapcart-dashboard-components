"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _Typography = require("../elements/Typography");

var _Button = require("../elements/Button");

var _Icon = require("../elements/Icon");

var _nukaCarousel = _interopRequireDefault(require("nuka-carousel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ReactModalAdapter(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  var contentClassName = "".concat(className, "__content");
  var overlayClassName = "".concat(className, "__overlay");
  var bodyOpenClassName = 'ReactModal__Body--open';

  if (props.type === 'full') {
    bodyOpenClassName = 'ReactModal__Body--open-full';
  }

  return _react["default"].createElement(_reactModal["default"], _extends({
    portalClassName: className,
    className: contentClassName,
    overlayClassName: overlayClassName,
    onRequestClose: props.closeModal,
    bodyOpenClassName: bodyOpenClassName
  }, props));
}

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));

    _reactModal["default"].setAppElement(_this.props.rootElement || '#root');

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(StyledModal, this.props, _react["default"].createElement(ModalType, this.props, this.props.children));
    }
  }]);

  return Modal;
}(_react.Component);

exports.Modal = Modal;

function ModalType(props) {
  switch (props.type) {
    case "slider-modal":
      return _react["default"].createElement(SliderModal, props, props.children);

    case "custom":
      return _react["default"].createElement(MinimalModalStyle, props, props.children);

    case "full":
      return _react["default"].createElement(FullscreenModal, props, props.children);

    case "modal-with-graphic":
      return _react["default"].createElement(ModalWithGraphic, props, _react["default"].createElement("div", {
        style: {
          padding: 25
        }
      }, _react["default"].createElement(ModalHeader, null, _react["default"].createElement(ModalHeaderLeft, null, _react["default"].createElement(_Icon.Icon, {
        circleIcon: true,
        type: props.icon
      }), _react["default"].createElement(_Typography.H3, {
        style: {
          marginLeft: 10
        }
      }, props.title))), _react["default"].createElement("div", {
        style: {
          marginLeft: 5
        }
      }, props.children), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(ButtonsStyle, null, props.buttons && props.buttons.map(function (button, idx) {
        return _react["default"].createElement("div", {
          style: idx !== 0 ? {
            marginLeft: 15
          } : null
        }, _react["default"].createElement(_Button.Button, {
          key: button.button,
          type: button.type,
          onClick: button.onClick,
          isLoading: button.isLoading
        }, button.button));
      }))), _react["default"].createElement(ModalGraphic, null, _react["default"].createElement("img", {
        src: props.graphic,
        style: {
          width: "250px",
          height: "100%",
          objectFit: "cover"
        }
      }), _react["default"].createElement(CloseIcon, {
        type: "small-close",
        onClick: props.closeModal,
        style: {
          margin: 20
        }
      })));

    case "alert":
      return _react["default"].createElement(MinimalModalStyle, props, _react["default"].createElement(ModalHeader, null, _react["default"].createElement(ModalHeaderLeft, null, _react["default"].createElement(_Icon.Icon, {
        circleIcon: true,
        type: props.icon
      }), _react["default"].createElement(_Typography.H3, {
        style: {
          marginLeft: 10
        }
      }, props.title)), _react["default"].createElement(CloseIcon, {
        type: "small-close",
        onClick: props.closeModal
      })), _react["default"].createElement("div", {
        style: {
          marginLeft: 5
        }
      }, props.children), _react["default"].createElement(ButtonsStyle, null, props.buttons && props.buttons.map(function (button, idx) {
        return _react["default"].createElement("div", {
          style: idx !== 0 ? {
            marginLeft: 15
          } : null
        }, _react["default"].createElement(_Button.Button, {
          key: button.type,
          type: button.type,
          onClick: button.onClick
        }, button.button));
      })));

    default:
      return _react["default"].createElement("div", null);
  }
}

var SliderModal = function SliderModal(props) {
  return _react["default"].createElement("div", {
    style: {
      width: "650px",
      boxShadow: "0 0 28px 0 rgba(0, 0, 0, 0.14)",
      paddingBottom: 50,
      borderRadius: "4px",
      position: "relative"
    }
  }, _react["default"].createElement(CloseIcon, {
    type: "small-close",
    className: "modal-graphic-close-btn",
    onClick: props.closeModal,
    style: {
      margin: 20
    }
  }), _react["default"].createElement(_nukaCarousel["default"], {
    slidesToShow: 1,
    wrapAround: true,
    afterSlide: props.afterSlide,
    autoplay: true,
    style: {
      height: "100%"
    },
    renderCenterLeftControls: function renderCenterLeftControls(_ref2) {
      var previousSlide = _ref2.previousSlide;
      return _react["default"].createElement(_Button.Button, {
        onClick: previousSlide,
        type: "secondary"
      }, "Back");
    },
    renderCenterRightControls: function renderCenterRightControls(_ref3) {
      var nextSlide = _ref3.nextSlide;
      return _react["default"].createElement(_Button.Button, {
        onClick: nextSlide,
        type: "primary"
      }, "Next");
    }
  }, props.slides.map(function (slide, idx) {
    return _react["default"].createElement("div", {
      key: slide.graphic,
      className: "slider-slide-inside"
    }, _react["default"].createElement("img", {
      src: slide.graphic
    }), _react["default"].createElement("div", null, _react["default"].createElement(_Typography.H1, null, slide.header), _react["default"].createElement(_Typography.Paragraph, {
      color: "black",
      style: {
        maxWidth: "500px"
      }
    }, slide.subtext)));
  })));
};

var StyledModal = (0, _styledComponents["default"])(ReactModalAdapter).withConfig({
  displayName: "Modal__StyledModal",
  componentId: "sc-1fnp8gl-0"
})(["&__overlay{height:100%;width:100%;position:fixed;overflow-y:scroll;top:0;left:0;z-index:999;background:rgba(0,0,0,0.4);display:flex;flex-direction:column;justify-content:center;align-items:center;}&__content{overflow-y:hidden;border-radius:3px;background:#ffffff;z-index:9999;}"]);

var ModalStyle = _styledComponents["default"].div.withConfig({
  displayName: "Modal__ModalStyle",
  componentId: "sc-1fnp8gl-1"
})(["", ""], function (props) {
  return props.style ? props.style : null;
});

var ModalWithGraphic = (0, _styledComponents["default"])(ModalStyle).withConfig({
  displayName: "Modal__ModalWithGraphic",
  componentId: "sc-1fnp8gl-2"
})(["width:600px;display:flex;flex-direction:row;align-items:center;object-fit:cover;height:100%;overflow:hidden;justify-content:space-between;", ""], function (props) {
  return props.style ? props.style : null;
});
var MinimalModalStyle = (0, _styledComponents["default"])(ModalStyle).withConfig({
  displayName: "Modal__MinimalModalStyle",
  componentId: "sc-1fnp8gl-3"
})(["width:450px;padding:25px;", ""], function (props) {
  return props.style ? props.style : null;
});
var FullscreenModal = (0, _styledComponents["default"])(ModalStyle).withConfig({
  displayName: "Modal__FullscreenModal",
  componentId: "sc-1fnp8gl-4"
})(["position:fixed;width:100%;height:100%;top:0;left:0;", ""], function (props) {
  return props.style ? props.style : null;
});

var ButtonsStyle = _styledComponents["default"].div.withConfig({
  displayName: "Modal__ButtonsStyle",
  componentId: "sc-1fnp8gl-5"
})(["display:flex;flex-direction:row;align-items:center;justify-content:flex-end;margin-top:25px;", ""], function (props) {
  return props.style ? props.style : null;
});

var ModalHeader = _styledComponents["default"].div.withConfig({
  displayName: "Modal__ModalHeader",
  componentId: "sc-1fnp8gl-6"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;position:relative;margin-bottom:30px;"]);

var ModalHeaderLeft = _styledComponents["default"].div.withConfig({
  displayName: "Modal__ModalHeaderLeft",
  componentId: "sc-1fnp8gl-7"
})(["display:flex;flex-direction:row;justify-items:flex-start;align-items:center;"]);

var ModalGraphic = _styledComponents["default"].div.withConfig({
  displayName: "Modal__ModalGraphic",
  componentId: "sc-1fnp8gl-8"
})(["position:relative;object-fit:cover;height:100%;width:250px;"]);

var CloseIcon = (0, _styledComponents["default"])(_Icon.Icon).withConfig({
  displayName: "Modal__CloseIcon",
  componentId: "sc-1fnp8gl-9"
})(["height:15px;width:15px;top:0;right:0;position:absolute;z-index:10;&:hover{cursor:pointer;}"]);