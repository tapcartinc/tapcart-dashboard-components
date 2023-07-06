"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestBox = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _variables = require("../utils/_variables");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Box = _styledComponents["default"].div.withConfig({
  displayName: "TestBox__Box",
  componentId: "sc-oaoz4f-0"
})(["background-color:", " ", ";"], _variables.colors.blue, _variables.space);
var TestBox = function TestBox(props) {
  return /*#__PURE__*/_react["default"].createElement(Box, {
    width: [1,
    // 100% below the smallest breakpoint (all viewports)
    1 / 2,
    // 50% from the next breakpoint and up
    1 / 4 // 25% from the next breakpoint and up
    ]
  }, "TestBox");
};
exports.TestBox = TestBox;