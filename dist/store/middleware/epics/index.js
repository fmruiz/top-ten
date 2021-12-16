"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxObservable = require("redux-observable");

var rootEpic = (0, _reduxObservable.combineEpics)();
var _default = rootEpic;
exports["default"] = _default;