"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  traverse: true,
  TraverseContext: true,
  Traverse: true
};
Object.defineProperty(exports, "TraverseContext", {
  enumerable: true,
  get: function () {
    return _traverse2.TraverseContext;
  }
});
Object.defineProperty(exports, "Traverse", {
  enumerable: true,
  get: function () {
    return _traverse2.Traverse;
  }
});
exports.traverse = void 0;

var _traverse2 = require("traverse");

var _keepBranchesIncluding = require("./keepBranchesIncluding");

Object.keys(_keepBranchesIncluding).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _keepBranchesIncluding[key];
    }
  });
});

const _traverse = require('traverse'); //tslint:disable-line


const traverse = _traverse;
exports.traverse = traverse;
//# sourceMappingURL=index.js.map