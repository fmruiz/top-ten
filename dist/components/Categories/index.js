"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _Categorie = _interopRequireDefault(require("../common/Categorie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Categories = function Categories() {
  var categoriesArr = [{
    text: "hola",
    value: 32
  }, {
    text: "chau",
    value: 12
  }];
  return /*#__PURE__*/_react["default"].createElement(_core.Box, null, categoriesArr.map(function (_ref) {
    var text = _ref.text,
        value = _ref.value;
    return /*#__PURE__*/_react["default"].createElement(_Categorie["default"], {
      textValue: text,
      numberValue: value
    });
  }));
};

var _default = Categories;
exports["default"] = _default;