"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ContainerWrapper = _styledComponents["default"].section.withConfig({
  displayName: "Container__ContainerWrapper",
  componentId: "sc-1yn4lrp-0"
})(["box-sizing:border-box;position:relative;padding-left:20px;padding-right:20px;padding-top:20px;width:100%;"]);

var Container = function Container(props) {
  return _react["default"].createElement(ContainerWrapper, props);
};

exports.Container = Container;