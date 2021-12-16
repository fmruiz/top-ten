"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _core = require("@material-ui/core");

var _UserDescription = _interopRequireDefault(require("../../components/common/UserDescription"));

var _Categories = _interopRequireDefault(require("../../components/Categories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)("Challenge", module).add("Component", function () {
  return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "h3"
  }, "Jr. Front End Challenge"), /*#__PURE__*/_react["default"].createElement(_core.Divider, null)), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Categories["default"], null), /*#__PURE__*/_react["default"].createElement(_UserDescription["default"], null)));
});