"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var round = function round(number) {
  return Math.round(number * 100) / 100;
};

var monitorReducerEnhancer = function monitorReducerEnhancer(createStore) {
  return function (reducer, initialState, enhancer) {
    var monitoredReducer = function monitoredReducer(state, action) {
      var start = performance.now();
      var newState = reducer(state, action);
      var end = performance.now();
      var diff = round(end - start);
      console.log('reducer process time:', diff);
      return newState;
    };

    return createStore(monitoredReducer, initialState, enhancer);
  };
};

var _default = monitorReducerEnhancer;
exports["default"] = _default;