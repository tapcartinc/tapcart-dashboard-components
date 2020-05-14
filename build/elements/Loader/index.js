"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Loader = function Loader(props) {
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledLoaderWrapper, {
    loaderColors: props.loaderColors,
    parentBgColor: props.parentBgColor,
    size: props.size
  });
};

exports.Loader = Loader;
Loader.propTypes = {
  loaderColors: _propTypes["default"].shape({
    /**
     * spinner color
     */
    fg: _propTypes["default"].string,

    /**
     * area color
     */
    bg: _propTypes["default"].string
  }),

  /**
   * Allows a color to be passed into the loader component in case the loader is overtop a another color
   * particularly useful for buttons
   */
  parentBgColor: _propTypes["default"].string,

  /**
   * shapes the height and the width of the loader in pixel height
   */
  size: _propTypes["default"].number
};
Loader.defaultProps = {
  size: 25
};