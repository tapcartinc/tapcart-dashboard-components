"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = Grid;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Grid(props) {
  // separate out props required for children
  var childPropKeys = ['childStyle', 'margin', 'wrap', 'wrapCount']; // define any necessary key transformations before adding to children

  var childPropKeyTransforms = {
    childStyle: 'style'
  }; // create child prop object

  var childProps = {};

  for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    // check if key is a child prop, and also check if it should be transformed
    if (childPropKeys.includes(key)) childProps[childPropKeyTransforms[key] || key] = props[key];
  }

  return /*#__PURE__*/_react["default"].createElement(_styles.StyledGridWrapper, props, props.children.map(function (child) {
    return /*#__PURE__*/_react["default"].createElement(_styles.StyledGridItem, childProps, child);
  }));
}

Grid.propTypes = {
  align: _propTypes["default"].string,
  // justify-content and align-items respectively
  margin: _propTypes["default"].number,
  // margin for children
  type: _propTypes["default"].string,
  // row or column
  wrap: _propTypes["default"].bool,
  // whether or not to wrap children
  wrapCount: _propTypes["default"].number // the number of children to show inline before wrapping

};
Grid.defaultProps = {
  align: 'flex-start flex-start',
  margin: 10,
  type: 'row',
  wrap: false,
  wrapCount: 3
};