"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topTen = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var topTen = _axios["default"].create({
  baseURL: "https://private-bf0ebc-n5101.apiary-mock.com/api/spa/categories"
});

exports.topTen = topTen;