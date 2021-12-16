"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UserDescription = function UserDescription(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement(_core.Box, _extends({
    sx: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }
  }, props), /*#__PURE__*/_react["default"].createElement(_core.Avatar, null, "SD"), /*#__PURE__*/_react["default"].createElement(_core.Box, {
    ml: 1.5
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, null, "Emilse Littel"), /*#__PURE__*/_react["default"].createElement(_core.Typography, null, "Pago De Servicio")));
};

var _default = UserDescription;
exports["default"] = _default;