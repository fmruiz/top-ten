"use strict";

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.
(function () {
  var source = _fs["default"].readFileSync(__dirname + "/../package.json").toString('utf-8');

  var sourceObj = JSON.parse(source);
  var propertiesToDelete = ['scripts', 'devDependencies', 'browserslist', 'jest', 'eslintConfig'];
  propertiesToDelete.forEach(function (property) {
    delete sourceObj[property];
  });

  if (sourceObj.main.startsWith("dist/")) {
    sourceObj.main = sourceObj.main.slice(5);
  }

  _fs["default"].writeFileSync(__dirname + "/package.json", Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8"));
})();