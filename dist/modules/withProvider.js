"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _configureAppStore = _interopRequireDefault(require("../store/configureAppStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _configureAppStore["default"])();

var withProvider = function withProvider(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(WrappedComponent, props));
  };
};

var _default = withProvider;
exports["default"] = _default;