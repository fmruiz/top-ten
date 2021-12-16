"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configureAppStore;

var _toolkit = require("@reduxjs/toolkit");

var _reduxObservable = require("redux-observable");

var _monitorReducers = _interopRequireDefault(require("./enhancers/monitorReducers"));

var _logger = _interopRequireDefault(require("./middleware/logger"));

var _epics = _interopRequireDefault(require("./middleware/epics"));

var _reducers = _interopRequireDefault(require("./reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var epicMiddleware = (0, _reduxObservable.createEpicMiddleware)();

function configureAppStore(preloadedState) {
  var store = (0, _toolkit.configureStore)({
    reducer: _reducers["default"],
    middleware: [_logger["default"], epicMiddleware].concat(_toConsumableArray((0, _toolkit.getDefaultMiddleware)({
      thunk: false
    }))),
    preloadedState: preloadedState,
    enhancers: [_monitorReducers["default"]]
  });
  epicMiddleware.run(_epics["default"]);
  /* eslint-disable no-undef */

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', function () {
      return store.replaceReducer(_reducers["default"]);
    });
  }
  /* eslint-enable no-undef */


  return store;
}