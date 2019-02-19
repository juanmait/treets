"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.branches = void 0;

var _index = require("../index");

/**
 * return only the leaves of a tree. A leave can be of type:
 * `boolean`, `number`, `string`, `null`, `undefined`.
 *
 * @param obj a traversable object
 */
const branches = obj => (0, _index.traverse)(obj).reduce(function (acc) {
  if (this.isLeaf) {
    acc.push(this.path.join('.'));
  }

  return acc;
}, []);

exports.branches = branches;
//# sourceMappingURL=branches.js.map