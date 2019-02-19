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

var _traverse2 = _interopRequireWildcard(require("traverse"));

var _keepBranchesIncluding = require("./lib/keepBranchesIncluding");

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

var _toHash = require("./lib/toHash");

Object.keys(_toHash).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _toHash[key];
    }
  });
});

var _leaves = require("./lib/leaves");

Object.keys(_leaves).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _leaves[key];
    }
  });
});

var _branches = require("./lib/branches");

Object.keys(_branches).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _branches[key];
    }
  });
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const traverse = _traverse2.default;
exports.traverse = traverse;
//# sourceMappingURL=index.js.map