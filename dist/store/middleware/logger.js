"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var logger = function logger(store) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.info('dispatching', action);
      var result = next(action);
      console.log('next state', store.getState());
      console.groupEnd();
      return result;
    };
  };
};

var _default = logger;
exports["default"] = _default;